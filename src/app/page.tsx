"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { submitApplicationAction } from "./actions";

const translations: Record<string, {
  dir: "rtl" | "ltr";
  subtitleHeader: string;
  badge: string;
  heroTitle: string;
  heroDesc: string;
  screeningHeader: string;
  uploadLabel: string;
  dropText: string;
  browseText: string;
  supportText: string;
  selectedText: string;
  signInBtn: string;
  dashboardBtn: string;
  aiScreeningBtn: string;
  footerRights: string;
  supportCenter: string;
  developedBy: string;
  submitBtn: string;
  submittingBtn: string;
  emailLabel: string;
  phoneLabel: string;
  privacyAgreeText: string;
  privacyPolicyText: string;
  successMsg: string;
}> = {
  ar: {
    dir: "rtl",
    subtitleHeader: "منصة اللامركزية للموارد البشرية والتوظيف بالذكاء الاصطناعي",
    badge: "🚀 مركز الوظائف والمواهب من الجيل القادم",
    heroTitle: "بسط عمليات التوظيف والموارد البشرية",
    heroDesc: "تجربة فحص السير الذاتية بالذكاء الاصطناعي، وثائق موثقة بالبلوكشين، وإدارة مرشحين سلسة في لوحة تحكم واحدة.",
    screeningHeader: "فحص سريع للمرشحين",
    uploadLabel: "ارفع السيرة الذاتية* (PDF / DOCX)",
    dropText: "أسقط ملفك هنا أو",
    browseText: "تصفح للرفع",
    supportText: "يدعم صيغ PDF و DOCX حتى 10 ميجابايت",
    selectedText: "تم اختيار الملف:",
    signInBtn: "🔐 تسجيل الدخول بـ Pi Network",
    dashboardBtn: "📊 لوحة تحكم الموارد البشرية",
    aiScreeningBtn: "✨ فحص السير الذاتية بالذكاء الاصطناعي وتوجيه المهام ←",
    footerRights: "ProHR AI © 2026. جميع الحقوق محفوظة.",
    supportCenter: "مركز الدعم",
    developedBy: "تم التطوير بواسطة",
    submitBtn: "إرسال الطلب (Submit Application)",
    submittingBtn: "جاري الإرسال...",
    emailLabel: "البريد الإلكتروني*",
    phoneLabel: "رقم الهاتف*",
    privacyAgreeText: "بالضغط على إرسال، أوافق على أنني قرأت ",
    privacyPolicyText: "سياسة الخصوصية",
    successMsg: "Application Submitted Successfully! 🎉"
  },
  en: {
    dir: "ltr",
    subtitleHeader: "Decentralized HR & AI Recruitment Platform",
    badge: "🚀 NEXT-GEN CAREER & TALENT HUB",
    heroTitle: "Streamline Your Hiring & HR Operations",
    heroDesc: "Experience AI-powered resume screening, blockchain-backed credentials, and seamless candidate onboarding in one unified dashboard.",
    screeningHeader: "CANDIDATE QUICK SCREENING",
    uploadLabel: "Upload CV* (PDF / DOCX)",
    dropText: "Drop your file here or",
    browseText: "browse to upload",
    supportText: "Supports PDF, DOCX up to 10MB",
    selectedText: "Selected:",
    signInBtn: "🔐 Sign in with Pi Network",
    dashboardBtn: "📊 HR Dashboard",
    aiScreeningBtn: "✨ AI Resume Screening & Task Router →",
    footerRights: "ProHR AI © 2026. All rights reserved.",
    supportCenter: "Support Center",
    developedBy: "developed by",
    submitBtn: "Submit Application",
    submittingBtn: "Submitting...",
    emailLabel: "Email*",
    phoneLabel: "Phone*",
    privacyAgreeText: "By submitting this application, I agree that I have read the ",
    privacyPolicyText: "Privacy Policy",
    successMsg: "Application Submitted Successfully! 🎉"
  },
  zh: {
    dir: "ltr",
    subtitleHeader: "去中心化人力资源与 AI 招聘平台",
    badge: "🚀 下一代职业与人才中心",
    heroTitle: "简化您的招聘与人力资源运营",
    heroDesc: "在统一的仪表板中体验 AI 简历筛选、区块链认证凭证和无缝候选人入职。",
    screeningHeader: "候选人快速筛选",
    uploadLabel: "上传简历* (PDF / DOCX)",
    dropText: "拖放文件到此处或",
    browseText: "浏览上传",
    supportText: "支持高达 10MB 的 PDF, DOCX",
    selectedText: "已选择:",
    signInBtn: "🔐 使用 Pi Network 登录",
    dashboardBtn: "📊 人力资源仪表板",
    aiScreeningBtn: "✨ AI 简历筛选与任务路由 →",
    footerRights: "ProHR AI © 2026. 保留所有权利。",
    supportCenter: "支持中心",
    developedBy: "开发者",
    submitBtn: "提交申请",
    submittingBtn: "提交中...",
    emailLabel: "电子邮件*",
    phoneLabel: "电话号码*",
    privacyAgreeText: "提交此申请即表示我同意已阅读",
    privacyPolicyText: "隐私政策",
    successMsg: "Application Submitted Successfully! 🎉"
  },
  hi: {
    dir: "ltr",
    subtitleHeader: "विकेंद्रीकृत एचआर और एआई भर्ती मंच",
    badge: "🚀 अगली पीढ़ी का करियर और टैलेंट हब",
    heroTitle: "अपनी भर्ती और एचआर संचालन को सुव्यवस्थित करें",
    heroDesc: "एक एकीकृत डैशबोर्ड में एआई-संचालित रेज़्यूमे स्क्रीन, ब्लॉकचेन-समर्थित क्रेडेंशियल और निर्बाध ऑनबोर्डिंग का अनुभव करें।",
    screeningHeader: "उम्मीदवार त्वरित जांच",
    uploadLabel: "सीवी अपलोड करें* (PDF / DOCX)",
    dropText: "अपनी फ़ाइल यहाँ छोड़ें या",
    browseText: "अपलोड करने के लिए ब्राउज़ करें",
    supportText: "10MB तक PDF, DOCX का समर्थन करता है",
    selectedText: "चयनित:",
    signInBtn: "🔐 Pi Network के साथ साइन इन करें",
    dashboardBtn: "📊 एचआर डैशबोर्ड",
    aiScreeningBtn: "✨ एआई रेज़्यूमे स्क्रिनिंग और टास्क राउटर →",
    footerRights: "ProHR AI © 2026. सभी अधिकार सुरक्षित।",
    supportCenter: "सहायता केंद्र",
    developedBy: "द्वारा विकसित",
    submitBtn: "आवेदन जमा करें",
    submittingBtn: "जमा किया जा रहा है...",
    emailLabel: "ईमेल*",
    phoneLabel: "फोन नंबर*",
    privacyAgreeText: "इस आवेदन को जमा करके, मैं सहमत हूँ कि मैंने पढ़ लिया है ",
    privacyPolicyText: "गोपनीयता नीति",
    successMsg: "Application Submitted Successfully! 🎉"
  },
  tl: {
    dir: "ltr",
    subtitleHeader: "Decentralized HR at AI Recruitment Platform",
    badge: "🚀 SUSUNOD NA Henerasyon ng CAREER AT TALENT HUB",
    heroTitle: "Pabilisin ang Inyong Pagkuha at Operasyon ng HR",
    heroDesc: "Maranasan ang AI-powered resume screening, blockchain credentials, at seamless onboarding sa isang dashboard.",
    screeningHeader: "MABILIS NA PAGSUSURI NG KANDIDATO",
    uploadLabel: "Mag-upload ng CV* (PDF / DOCX)",
    dropText: "I-drop ang iyong file dito o",
    browseText: "mag-browse para mag-upload",
    supportText: "Sumusuporta sa PDF, DOCX hanggang 10MB",
    selectedText: "Naipasa:",
    signInBtn: "🔐 Mag-sign in gamit ang Pi Network",
    dashboardBtn: "📊 HR Dashboard",
    aiScreeningBtn: "✨ AI Resume Screening at Task Router →",
    footerRights: "ProHR AI © 2026. Lahat ng karapatan ay nakalaan.",
    supportCenter: "Sentro ng Tulong",
    developedBy: "binuo ni",
    submitBtn: "I-submit ang Aplikasyon",
    submittingBtn: "Ipinapasa...",
    emailLabel: "Email*",
    phoneLabel: "Telepono*",
    privacyAgreeText: "Sa pag-submit ng aplikasyong ito, sumasang-ayon ako na nabasa ko ang ",
    privacyPolicyText: "Patakaran sa Privacy",
    successMsg: "Application Submitted Successfully! 🎉"
  },
  tr: {
    dir: "ltr",
    subtitleHeader: "Merkeziyetsiz İK ve Yapay Zeka İşe Alım Platformu",
    badge: "🚀 YENİ NESİL KARİYER VE YETENEK MERKEZİ",
    heroTitle: "İşe Alım ve İK Operasyonlarınızı Kolaylaştırın",
    heroDesc: "Yapay zeka destekli özgeçmiş taraması, blok zinciri doğrulamalı belgeler ve tek bir panelde sorunsuz işe alım deneyimi yaşayın.",
    screeningHeader: "ADAY HIZLI TARAMA",
    uploadLabel: "CV Yükle* (PDF / DOCX)",
    dropText: "Dosyanızı buraya bırakın veya",
    browseText: "yüklemek için göz atın",
    supportText: "10MB'a kadar PDF, DOCX destekler",
    selectedText: "Seçilen:",
    signInBtn: "🔐 Pi Network ile Giriş Yap",
    dashboardBtn: "📊 İK Paneli",
    aiScreeningBtn: "✨ Yapay Zeka CV Taraması ve Görev Yönlendirici →",
    footerRights: "ProHR AI © 2026. Tüm hakları saklıdır.",
    supportCenter: "Destek Merkezi",
    developedBy: "geliştiren",
    submitBtn: "Başvuruyu Gönder",
    submittingBtn: "Gönderiliyor...",
    emailLabel: "E-posta*",
    phoneLabel: "Telefon*",
    privacyAgreeText: "Bu başvuruyu göndererek, okuduğumu kabul ediyorum ",
    privacyPolicyText: "Gizlilik Politikası",
    successMsg: "Application Submitted Successfully! 🎉"
  },
  ne: {
    dir: "ltr",
    subtitleHeader: "विकेंद्रीकृत HR र AI भर्ना प्लेटफर्म",
    badge: "🚀 नयाँ पुस्ताको करियर र प्रतिभा हब",
    heroTitle: "तपाईंको भर्ना र HR सञ्चालनहरू सरल बनाउनुहोस्",
    heroDesc: "एकै ड्यासबोर्डमा AI-संचालित बायोडाटा स्क्रिनिङ, ब्लकचेन-समर्थित प्रमाणपत्रहरू र सहज अनबोर्डिङको अनुभव लिनुहोस्۔",
    screeningHeader: "उम्मेदवार द्रुत स्क्रिनिङ",
    uploadLabel: "CV अपलोड गर्नुहोस्* (PDF / DOCX)",
    dropText: "तपाईंको फाइल यहाँ छोड्नुहोस् वा",
    browseText: "अपलोड गर्न ब्राउज गर्नुहोस्",
    supportText: "10MB सम्म PDF, DOCX समर्थन गर्दछ",
    selectedText: "चयन गरिएको:",
    signInBtn: "🔐 Pi Network मार्फत साइन इन गर्नुहोस्",
    dashboardBtn: "📊 HR ड्यासबोर्ड",
    aiScreeningBtn: "✨ AI बायोडाटा स्क्रिनिङ र कार्य राउटर →",
    footerRights: "ProHR AI © 2026. सबै अधिकार सुरक्षित।",
    supportCenter: "सहायता केन्द्र",
    developedBy: "द्वारा विकसित",
    submitBtn: "आवेदन पेश गर्नुहोस्",
    submittingBtn: "पेश हुँदैछ...",
    emailLabel: "इमेल*",
    phoneLabel: "फोन नम्बर*",
    privacyAgreeText: "यो आवेदन पेश गरेर, म सहमत हूँ कि मैले पढेको छु ",
    privacyPolicyText: "गोपनीयता नीति",
    successMsg: "Application Submitted Successfully! 🎉"
  },
  ur: {
    dir: "rtl",
    subtitleHeader: "غیر مرکزی ایچ آر اور اے آئی بھرتی کا پلیٹ فارم",
    badge: "🚀 اگلی نسل کا کیریئر اور ٹیلنٹ هب",
    heroTitle: "अपने بھرتی اور ایچ آر کے امور کو آسان بنائیں",
    heroDesc: "ایک ہی ڈیش بورڈ میں AI سے چلنے والی سی وی کی جانچ، بلاک چین کی تصدیق اور ہموار آن بورڈنگ کا تجربہ کریں۔",
    screeningHeader: "امیدوار کی تیز رفتار جانچ",
    uploadLabel: "سی وی اپ لوڈ کریں* (PDF / DOCX)",
    dropText: "اپنی فائل یہاں چھوڑیں یا",
    browseText: "اپ لوڈ کرنے کے لیے براؤز کریں",
    supportText: "10MB تک PDF، DOCX کو سپورٹ کرتا ہے",
    selectedText: "منتخب کردہ:",
    signInBtn: "🔐 Pi Network کے ساتھ سائن ان کریں",
    dashboardBtn: "📊 ایچ آر ڈیش بورڈ",
    aiScreeningBtn: "✨ اے آئی سی وی اسکریننگ اور ٹاسک راؤٹر ←",
    footerRights: "ProHR AI © 2026. جملہ حقوق محفوظ ہیں۔",
    supportCenter: "سپورٹ سینٹر",
    developedBy: "تیار کردہ",
    submitBtn: "درخواست جمع کرائیں",
    submittingBtn: "جمع ہو رہا ہے۔۔۔",
    emailLabel: "ای میل*",
    phoneLabel: "فون نمبر*",
    privacyAgreeText: "یہ درخواست جمع کروا کر, میں اس بات سے اتفاق کرتا ہوں کہ میں نے پڑھ لیا ہے ",
    privacyPolicyText: "پرائیویسی پالیسی",
    successMsg: "Application Submitted Successfully! 🎉"
  }
};

const languagesList = [
  { code: 'ar', name: 'العربية', flag: '🇦🇪' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'tl', name: 'Filipino', flag: '🇵🇭' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ne', name: 'नेपाली', flag: '🇳🇵' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
];

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSigningInPi, setIsSigningInPi] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const t = translations[currentLang] || translations.ar;

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_lang", langCode);
    }
    setIsLangOpen(false);
  };

  const handlePiSignIn = async () => {
    setStatusMessage(null);
    try {
      if (typeof window === 'undefined' || !(window as any).Pi) {
        setStatusMessage({ type: 'error', text: 'يرجى فتح التطبيق من داخل Pi Browser لتسجيل الدخول.' });
        return;
      }

      setIsSigningInPi(true);
      const scopes = ['username', 'payments'];
      
      const authResult = await (window as any).Pi.authenticate(scopes, (payment: any) => {
        console.log("Incomplete payment found:", payment);
      });

      const response = await fetch('/api/auth/pi-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accessToken: authResult.accessToken,
          user: authResult.user
        })
      });

      const data = await response.json();
      setIsSigningInPi(false);

      if (!response.ok || !data.success) {
        setStatusMessage({ type: 'error', text: data.error || 'فشل تسجيل الدخول عبر Pi.' });
        return;
      }

      setStatusMessage({
        type: 'success',
        text: `أهلاً بك ${authResult.user.username} في منصة ProHR AI! 🎉`
      });

    } catch (error) {
      console.error("Pi Sign-In Error:", error);
      setIsSigningInPi(false);
      setStatusMessage({ type: 'error', text: 'حدث خطأ أثناء المصادقة عبر Pi Network.' });
    }
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!email) {
      setStatusMessage({ type: 'error', text: 'يرجى إدخال البريد الإلكتروني' });
      return;
    }
    if (!phone) {
      setStatusMessage({ type: 'error', text: 'يرجى إدخال رقم الهاتف' });
      return;
    }
    if (!selectedFile) {
      setStatusMessage({ type: 'error', text: 'يرجى اختيار ملف السيرة الذاتية' });
      return;
    }
    if (!agreedPrivacy) {
      setStatusMessage({ type: 'error', text: 'يرجى الموافقة على سياسة الخصوصية' });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('cv', selectedFile);

      const result = await submitApplicationAction(formData);

      setIsSubmitting(false);

      if (!result.success) {
        setStatusMessage({ type: 'error', text: result.message });
        return;
      }

      setStatusMessage({
        type: 'success',
        text: result.message || t.successMsg
      });

      setEmail("");
      setPhone("");
      setSelectedFile(null);
      setSelectedFileName("");
      setAgreedPrivacy(false);

    } catch (error) {
      console.error("Submission Error:", error);
      setIsSubmitting(false);
      setStatusMessage({ type: 'error', text: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' });
    }
  };

  return (
    <main 
      dir={t.dir}
      className="min-h-screen bg-[#f1f5f9] text-slate-800 flex flex-col items-center justify-between p-6 sm:p-10 font-sans select-none relative overflow-x-hidden"
      style={{
        fontFamily: "'Inter', 'Tajawal', sans-serif"
      }}
    >
      {/* Top Bar Accent */}
      <div 
        className="fixed top-0 right-0 left-0 h-2 z-50"
        style={{ background: 'linear-gradient(90deg, #1d4ed8, #2563eb 60%, #60a5fa)' }}
      />

      {/* Main Wide Desktop Container */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden flex flex-col relative my-auto">
        
        {/* Header & Logo with Dynamic Language Dropdown */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-inner overflow-hidden p-1">
              <Image 
                src="/logo-1.png" 
                alt="ProHR AI Logo" 
                width={40} 
                height={40} 
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <p className="text-xs text-blue-600 font-semibold tracking-wide">
                {t.subtitleHeader}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangOpen(!isLangOpen);
                }}
                className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-2xl text-xs font-semibold hover:bg-slate-100 transition shadow-sm cursor-pointer"
              >
                <GlobeIcon className="w-4 h-4 text-blue-600" />
                <span>{languagesList.find(l => l.code === currentLang)?.flag}</span>
                <span>{languagesList.find(l => l.code === currentLang)?.name}</span>
                <span className="text-[10px] opacity-80">▼</span>
              </button>

              {isLangOpen && (
                <div className="absolute top-12 right-0 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl py-2 z-50 max-h-56 overflow-y-auto">
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-xs transition hover:bg-blue-50/80 ${
                        currentLang === lang.code ? 'font-bold text-blue-700 bg-blue-50/60' : 'text-slate-700 font-medium'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dashboard / Nav Link */}
            <Link
              href="/login"
              className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-2xl text-xs font-semibold hover:bg-slate-100 transition active:scale-95 shadow-sm"
            >
              <span>{t.dashboardBtn}</span>
            </Link>
          </div>
        </div>

        {/* Promo Feature Card */}
        <div 
          dir="ltr"
          className="mx-8 mt-8 bg-gradient-to-br from-[#0f172a] via-blue-700 to-blue-600 rounded-3xl p-8 text-white shadow-lg shadow-blue-600/20 relative overflow-hidden text-left"
        >
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold mb-4 shadow-sm">
            <span>⚡ AI-Powered</span>
            <span>•</span>
            <span>Pi Network Native</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Hiring, <span className="text-blue-300 underline decoration-blue-400/50">Reinvented</span><br />
                for the UAE 🇦🇪
              </h2>

              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal max-w-xl">
                Decentralized smart HR — AI resume screening, real agent reasoning, and Pi-native identity. Try it free.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/20 text-xs font-medium text-white backdrop-blur-sm">
                  🤖 AI Agents
                </span>
                <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/20 text-xs font-medium text-white backdrop-blur-sm">
                  🔐 Pi Sign-In
                </span>
                <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/20 text-xs font-medium text-white backdrop-blur-sm">
                  🇦🇪 UAE-Ready
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center text-center pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/15">
              <div className="w-24 h-24 rounded-full p-2.5 bg-white backdrop-blur-md flex items-center justify-center border border-white/20 shadow-md">
                <Image 
                  src="/logo-1.png" 
                  alt="ProHR AI Logo" 
                  width={75} 
                  height={75} 
                  className="w-full h-full object-contain drop-shadow-sm"
                  priority
                />
              </div>

              <h3 className="text-sm font-bold text-white mt-3 tracking-wide">ProHR AI</h3>
              <p className="text-[10px] text-blue-200 font-mono">pro-hr-ai.vercel.app</p>
            </div>
          </div>
        </div>

        {/* Hero / Intro Section */}
        <div className="text-center py-6 px-8">
          <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-3 bg-blue-50 text-blue-800 border border-blue-200 shadow-sm">
            {t.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight mb-2.5">
            {t.heroTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.heroDesc}
          </p>
        </div>

        {/* Action Buttons Row (Dashboard & Pi Sign-In) */}
        <div className="px-8 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/vacancies"
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-50 hover:bg-slate-100 text-blue-900 border border-slate-200 rounded-2xl text-sm font-bold transition-all shadow-sm text-center cursor-pointer"
          >
            📋 استعراض الوظائف المتاحة (Available Vacancies)
          </Link>

          <button
            type="button"
            onClick={handlePiSignIn}
            disabled={isSigningInPi}
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl text-sm font-bold transition-all shadow-md shadow-blue-500/20 cursor-pointer disabled:opacity-70"
          >
            {isSigningInPi ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>جاري تسجيل الدخول...</span>
              </>
            ) : (
              <span>{t.signInBtn}</span>
            )}
          </button>
        </div>

        {/* Candidate Quick Screening Submission Form */}
        <div className="mx-8 mb-8 bg-[#f8fafc] rounded-3xl p-8 border border-slate-200/70 shadow-sm">
          <h3 className="text-sm sm:text-base font-black text-blue-950 mb-6 tracking-wide uppercase flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
            {t.screeningHeader}
          </h3>

          <form onSubmit={handleSubmitApplication} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Input */}
              <div>
                <label className="block text-xs font-bold text-blue-950 mb-2">
                  {t.emailLabel}
                </label>
                <input 
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  dir="ltr"
                  className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-xs font-bold text-blue-950 mb-2">
                  {t.phoneLabel}
                </label>
                <input 
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 5X XXX XXXX"
                  dir="ltr"
                  className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm"
                />
              </div>
            </div>

            {/* File Upload Box */}
            <div>
              <label className="block text-xs font-bold text-blue-950 mb-2">
                {t.uploadLabel}
              </label>
              <div className="relative border-2 border-dashed border-blue-300 hover:border-blue-600 bg-white rounded-2xl p-8 text-center transition-all group cursor-pointer">
                <input 
                  type="file" 
                  accept=".pdf,.docx"
                  required
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setSelectedFile(e.target.files[0]);
                      setSelectedFileName(e.target.files[0].name);
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform text-xl">
                    📄
                  </div>
                  <p className="text-sm font-semibold text-slate-700">
                    {selectedFileName ? (
                      <span className="text-blue-700 font-bold">
                        {t.selectedText} {selectedFileName}
                      </span>
                    ) : (
                      <>
                        {t.dropText}{" "}
                        <span className="text-blue-600 font-bold underline">{t.browseText}</span>
                      </>
                    )}
                  </p>
                  <p className="text-xs text-slate-400">{t.supportText}</p>
                </div>
              </div>
            </div>

            {/* Privacy Checkbox */}
            <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/70">
              <input 
                type="checkbox"
                id="privacy"
                required
                checked={agreedPrivacy}
                onChange={(e) => setAgreedPrivacy(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="privacy" className="text-xs text-slate-600 cursor-pointer select-none leading-relaxed">
                {t.privacyAgreeText}
                <Link href="/privacy" className="text-blue-600 font-bold underline hover:text-blue-800">
                  {t.privacyPolicyText}
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span>{t.submittingBtn}</span>
                </>
              ) : (
                <span>{t.submitBtn}</span>
              )}
            </button>

            {/* Status Alert */}
            {statusMessage && (
              <div className={`p-4 rounded-2xl text-sm font-bold text-center transition-all duration-300 border ${
                statusMessage.type === 'success' 
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-sm' 
                  : 'bg-rose-50 text-rose-800 border-rose-300'
              }`}>
                {statusMessage.text}
              </div>
            )}
          </form>
        </div>

        {/* AI Task Router Navigation Link */}
        <div className="pb-6 text-center">
          <Link
            href="/screen"
            className="inline-block text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors py-1 cursor-pointer"
          >
            {t.aiScreeningBtn}
          </Link>
        </div>

        {/* Footer info */}
        <div className="bg-[#f8fafc] border-t border-slate-200/70 py-4 px-8 text-center flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="text-xs text-slate-500 flex items-center gap-2 flex-wrap">
            <span>{t.footerRights}</span>
            <span>•</span>
            <Link href="/support" className="hover:underline cursor-pointer font-medium">
              {t.supportCenter}
            </Link>
          </div>
          <div className="text-xs font-semibold text-blue-600 tracking-wide">
            {t.developedBy}{" "}
            <span className="font-bold text-blue-700">Reham Hamdy Elsayed Khedr</span>
          </div>
        </div>

      </div>
    </main>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18m1-18a17 17 0 010 18" />
    </svg>
  );
}
