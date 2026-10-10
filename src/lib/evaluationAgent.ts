import { CandidateEvaluation, RecommendedAction } from "@/types/ai";

/**
 * EvaluationAgent
 * ----------------
 * Analyzes a candidate's resume against a job description and produces a
 * structured, recruiter-facing evaluation — not just a keyword match score.
 *
 * This is intentionally a plain async function rather than a class or a
 * LangChain pipeline: at this stage there's a single reasoning step with no
 * tool use or multi-turn planning, so a class/framework would add
 * indirection without adding capability. If a later version needs the agent
 * to call tools (e.g. fetch MOHRE classification data, query a vector store
 * of past placements), that's the point to introduce an actual agent
 * framework — not before, since "Agent" should describe real tool-using
 * autonomy, not just a dressed-up prompt call.
 */

const EVALUATION_SYSTEM_PROMPT = `
أنت "Evaluation Agent" — وكيل تقييم مرشحين متخصص يعمل داخل منصة ProHR AI لسوق العمل في دولة الإمارات.

مهمتك: تحليل سيرة ذاتية مقابل وصف وظيفي، وإخراج تقييم منظم يساعد مسؤول التوظيف على اتخاذ قرار سريع وواثق.

قواعد صارمة يجب الالتزام بها:
1. لا تعتمد على مطابقة الكلمات المفتاحية فقط. اقرأ المحتوى وافهم الخبرة الفعلية والسياق.
2. "recruiterSummary" يجب أن يشرح بشكل محدد *لماذا* المرشح مناسب أو غير مناسب — بالإشارة لتفاصيل حقيقية من السيرة الذاتية والوصف الوظيفي، وليس عبارات عامة.
3. "matchScore" رقم من 0 إلى 100 يعكس درجة التطابق الفعلية، وليس تقييمًا متفائلًا دائمًا.
4. "recommendedAction" يجب أن تكون واحدة فقط من: "strong_match" (تطابق قوي، أرسله للمقابلة)، "consider" (مرشح محتمل، يحتاج مراجعة بشرية)، "not_a_fit" (غير مناسب لهذا الدور).
5. أعد الإجابة بصيغة JSON صحيحة فقط، بدون أي نص إضافي أو علامات Markdown أو تعليقات.

شكل الإخراج المطلوب بالضبط:
{
  "matchScore": number,
  "recommendedAction": "strong_match" | "consider" | "not_a_fit",
  "recruiterSummary": string,
  "strengths": string[],
  "gaps": string[]
}
`.trim();

function buildEvaluationPrompt(params: { jobDescription: string; resumeText: string }) {
  const { jobDescription, resumeText } = params;
  return `
الوصف الوظيفي:
"""
${jobDescription}
"""

السيرة الذاتية للمرشح:
"""
${resumeText}
"""

حلّل المطابقة بين السيرة الذاتية والوصف الوظيفي وأعد تقييمك بصيغة JSON فقط، حسب الشكل المحدد في تعليمات النظام.
`.trim();
}

const VALID_ACTIONS: RecommendedAction[] = ["strong_match", "consider", "not_a_fit"];

/**
 * Validates and normalizes the raw JSON the model returned, so a malformed
 * or partial response never silently reaches the UI as if it were trusted
 * structured data.
 */
function parseAndValidate(rawText: string): CandidateEvaluation {
  let parsed: unknown;
  try {
    const cleaned = rawText.replace(/```json|```/g, "").trim();
    parsed = JSON.parse(cleaned);
  } catch {
    throw new Error("EvaluationAgent: the model did not return valid JSON.");
  }

  if (typeof parsed !== "object" || parsed === null) {
    throw new Error("EvaluationAgent: unexpected response shape.");
  }

  const p = parsed as Record<string, unknown>;

  const matchScore = Number(p.matchScore);
  if (!Number.isFinite(matchScore) || matchScore < 0 || matchScore > 100) {
    throw new Error("EvaluationAgent: matchScore missing or out of range.");
  }

  const recommendedAction = p.recommendedAction as RecommendedAction;
  if (!VALID_ACTIONS.includes(recommendedAction)) {
    throw new Error("EvaluationAgent: invalid recommendedAction value.");
  }

  const recruiterSummary = typeof p.recruiterSummary === "string" ? p.recruiterSummary : "";
  if (!recruiterSummary.trim()) {
    throw new Error("EvaluationAgent: recruiterSummary missing.");
  }

  const strengths = Array.isArray(p.strengths) ? p.strengths.map(String) : [];
  const gaps = Array.isArray(p.gaps) ? p.gaps.map(String) : [];

  return {
    matchScore: Math.round(matchScore),
    recommendedAction,
    recruiterSummary,
    strengths,
    gaps,
  };
}

export async function runEvaluationAgent(params: {
  jobDescription: string;
  resumeText: string;
}): Promise<CandidateEvaluation> {
  const { jobDescription, resumeText } = params;

  if (!jobDescription?.trim() || !resumeText?.trim()) {
    throw new Error("EvaluationAgent: jobDescription and resumeText are both required.");
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("EvaluationAgent: ANTHROPIC_API_KEY is not set in .env");
  }

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 800,
      system: EVALUATION_SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildEvaluationPrompt({ jobDescription, resumeText }) }],
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`EvaluationAgent: Anthropic API error (${res.status}): ${errText}`);
  }

  const data = await res.json();
  const rawText: string = data.content?.[0]?.text ?? "";

  return parseAndValidate(rawText);
}
