import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const body = await request.json();
    const { resumeUrl, fileName, userId, jobId, matchScore, strengths, weaknesses, recommendations, fullAnalysis } = body;

    // 1. حفظ بيانات السيرة الذاتية المرفوعة
    const { data: resumeData, error: resumeError } = await supabase
      .from('resumes')
      .insert([
        {
          user_id: userId || null,
          job_id: jobId || null,
          file_name: fileName,
          file_path: resumeUrl,
          file_url: resumeUrl
        }
      ])
      .select()
      .single();

    if (resumeError) throw resumeError;

    // 2. حفظ نتيجة تحليل الذكاء الاصطناعي في جدول ai_evaluations
    const { data: evalData, error: evalError } = await supabase
      .from('ai_evaluations')
      .insert([
        {
          resume_id: resumeData.id,
          job_id: jobId || null,
          match_score: matchScore || 0,
          strengths: strengths || [],
          weaknesses: weaknesses || [],
          recommendations: recommendations || '',
          full_analysis: fullAnalysis || {}
        }
      ])
      .select()
      .single();

    if (evalError) throw evalError;

    return Response.json({
      success: true,
      evaluation: evalData,
      resume: resumeData
    });

  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
