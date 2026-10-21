"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
    signInBtn: "🔐 تسجيل الدخول / إنشاء حساب",
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
    successMsg: "تم تقديم الطلب بنجاح! 🎉 (Application Submitted Successfully)"
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
    signInBtn: "🔐 Sign In / Register",
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
    signInBtn: "🔐 登录 / 注册",
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
    successMsg: "申请提交成功！ 🎉"
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
    signInBtn: "🔐 साइन इन करें / पंजीकरण करें",
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
    successMsg: "आवेदन सफलतापूर्वक जमा किया गया! 🎉"
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
    signInBtn: "🔐 Mag-sign In / Magrehistro",
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
    successMsg: "Matagumpay na Naipasa ang Aplikasyon! 🎉"
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
    signInBtn: "🔐 Giriş Yap / Kaydol",
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
    successMsg: "Başvuru Başarıyla Gönderildi! 🎉"
  },
  ne: {
    dir: "ltr",
    subtitleHeader: "विकेंद्रीकृत HR र AI भर्ना प्लेटफर्म",
    badge: "🚀 नयाँ पुस्ताको करियर र प्रतिभा हब",
    heroTitle: "तपाईंको भर्ना र HR सञ्चालनहरू सरल बनाउनुहोस्",
    heroDesc: "एकै ड्यासबोर्डमा AI-संचालित बायोडाटा स्क्रिनिङ, ब्लकचेन-समर्थित प्रमाणपत्रहरू र सहज अनबोर्डिङको अनुभव लिनुहोस्।",
    screeningHeader: "उम्मेदवार द्रुत स्क्रिनिङ",
    uploadLabel: "CV अपलोड गर्नुहोस्* (PDF / DOCX)",
    dropText: "तपाईंको फाइल यहाँ छोड्नुहोस् वा",
    browseText: "अपलोड गर्न ब्राउज गर्नुहोस्",
    supportText: "10MB सम्म PDF, DOCX समर्थन गर्दछ",
    selectedText: "चयन गरिएको:",
    signInBtn: "🔐 साइन इन गर्नुहोस् / दर्ता गर्नुहोस्",
    dashboardBtn: "📊 HR ड्यासबोर्ड",
    aiScreeningBtn: "✨ AI बायोडाटा स्क्रिनिङ र कार्य राउटर →",
    footerRights: "ProHR AI © 2026. सबै अधिकार सुरक्षित।",
    supportCenter: "सहायता केन्द्र",
    developedBy: "द्वारा विकसित",
    submitBtn: "आवेदन पेश गर्नुहोस्",
    submittingBtn: "पेश हुँदैछ...",
    emailLabel: "इमेल*",
    phoneLabel: "फोन नम्बर*",
    privacyAgreeText: "यो आवेदन पेश गरेर, म सहमत छु कि मैले पढेको छु ",
    privacyPolicyText: "गोपनीयता नीति",
    successMsg: "आवेदन सफलतापूर्वक पेश गरियो! 🎉"
  },
  ur: {
    dir: "rtl",
    subtitleHeader: "غیر مرکزی ایچ آر اور اے آئی بھرتی کا پلیٹ فارم",
    badge: "🚀 اگلی نسل کا کیریئر اور ٹیلنٹ هب",
    heroTitle: "اپنے بھرتی اور ایچ آر کے امور کو آسان بنائیں",
    heroDesc: "ایک ہی ڈیش بورڈ میں AI سے چلنے والی سی وی کی جانچ، بلاک چین کی تصدیق اور ہموار آن بورڈنگ کا تجربہ کریں۔",
    screeningHeader: "امیدوار کی تیز رفتار جانچ",
    uploadLabel: "سی وی اپ لوڈ کریں* (PDF / DOCX)",
    dropText: "اپنی فائل یہاں چھوڑیں یا",
    browseText: "اپ لوڈ کرنے کے لیے براؤز کریں",
    supportText: "10MB تک PDF، DOCX کو سپورٹ کرتا ہے",
    selectedText: "منتخب کردہ:",
    signInBtn: "🔐 سائن ان کریں / رجسٹریشن کریں",
    dashboardBtn: "📊 ایچ آر ڈیش بورڈ",
    aiScreeningBtn: "✨ اے آئی سی وی اسکریننگ اور ٹاسک راؤٹر ←",
    footerRights: "ProHR AI © 2026. جملہ حقوق محفوظ ہیں۔",
    supportCenter: "سپورٹ سینٹر",
    developedBy: "تیار کردہ",
    submitBtn: "درخواست جمع کرائیں",
    submittingBtn: "جمع ہو رہا ہے...",
    emailLabel: "ای میل*",
    phoneLabel: "فون نمبر*",
    privacyAgreeText: "یہ درخواست جمع کروا کر، میں اس بات سے اتفاق کرتا ہوں کہ میں نے پڑھ لیا ہے ",
    privacyPolicyText: "پرائیویسی پالیسی",
    successMsg: "درخواست کامیابی کے ساتھ جمع ہو گئی! 🎉"
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
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const t = translations[currentLang] || translations.ar;

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_lang", langCode);
    }
    setIsLangOpen(false);
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
    if (!selectedFileName) {
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
      if (selectedFile) formData.append('file', selectedFile);

      await fetch('/api/submit-application', {
        method: 'POST',
        body: formData,
      }).catch(() => null);

      setTimeout(() => {
        setIsSubmitting(false);
        setStatusMessage({
          type: 'success',
          text: t.successMsg
        });
        
        setEmail("");
        setPhone("");
        setSelectedFile(null);
        setSelectedFileName("");
        setAgreedPrivacy(false);
      }, 1200);

    } catch (error) {
      console.error("Submission Error:", error);
      setIsSubmitting(false);
      setStatusMessage({ type: 'error', text: 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' });
    }
  };

  return (
    <main 
      dir={t.dir}
      className="min-h-screen flex flex-col items-center justify-center p-3 sm:p-6 relative overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: '#071628',
        backgroundImage: `
          radial-gradient(circle at 85% 8%, rgba(47,111,176,0.3) 0, transparent 45%),
          radial-gradient(circle at 8% 92%, rgba(20,51,92,0.4) 0, transparent 40%)
        `,
        fontFamily: "'Inter', 'Tajawal', sans-serif"
      }}
    >
      {/* Top Bar Accent */}
      <div 
        className="fixed top-0 right-0 left-0 h-2 z-50"
        style={{ background: 'linear-gradient(90deg, #14335c, #2f6fb0 60%, #5b9bd5)' }}
      />

      {/* Main Container Card - Unified Dark Glassmorphic Design */}
      <div 
        className="w-full max-w-2xl overflow-hidden p-5 sm:p-8 transition-all relative z-10 shadow-2xl text-white"
        style={{
          backgroundColor: '#0b223f',
          backgroundImage: 'linear-gradient(135deg, #0b223f 0%, #0e2a4d 50%, #173d6a 100%)',
          borderRadius: '28px',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}
      >
        {/* Header & Logo with Dynamic Language Dropdown */}
        <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10 gap-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/10 backdrop-blur-md shadow-inner overflow-hidden p-2 shrink-0 border border-white/25">
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
              <h1 className="text-lg sm:text-xl font-bold text-white tracking-wide">ProHR AI</h1>
              <p className="text-[11px] sm:text-xs text-blue-200/80">{t.subtitleHeader}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 relative">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs font-semibold text-white transition-all shadow-sm backdrop-blur-md"
              >
                <span>{languagesList.find(l => l.code === currentLang)?.flag}</span>
                <span>{languagesList.find(l => l.code === currentLang)?.name}</span>
                <span className="text-[10px] opacity-80">▼</span>
              </button>

              {isLangOpen && (
                <div className="absolute top-full mt-2 right-0 w-36 bg-[#0e2a4d] border border-blue-400/30 rounded-xl shadow-2xl py-1 z-50 max-h-56 overflow-y-auto">
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-right hover:bg-white/10 transition-colors ${
                        currentLang === lang.code ? 'font-bold text-amber-300 bg-white/5' : 'text-slate-200'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 hidden sm:inline-block">
              v1.0 Portal
            </span>
          </div>
        </div>

        {/* Promo Feature Card - Harmonized Dark Glass Design */}
        <div 
          dir="ltr"
          className="relative overflow-hidden rounded-2xl p-5 sm:p-7 mb-6 text-white shadow-lg border border-blue-400/20 text-left"
          style={{
            backgroundColor: 'rgba(14, 42, 77, 0.65)',
            backgroundImage: 'linear-gradient(135deg, rgba(14, 42, 77, 0.85) 0%, rgba(23, 61, 106, 0.75) 100%)'
          }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold mb-3 shadow-sm">
            <span>⚡ AI-Powered</span>
            <span className="text-amber-400">•</span>
            <span>Pi Network Native</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            <div className="md:col-span-8 space-y-2.5">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Hiring, <span className="text-[#5b9bd5] underline decoration-blue-400/40">Reinvented</span><br />
                for the UAE 🇦🇪
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Decentralized smart HR — AI resume screening, real agent reasoning, and Pi-native identity. Try it free.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-[11px] font-medium text-slate-200">
                  🤖 AI Agents
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-[11px] font-medium text-slate-200">
                  🔐 Pi Sign-In
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-[11px] font-medium text-slate-200">
                  🇦🇪 UAE-Ready
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center text-center pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-white/10">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-2.5 bg-[#0b223f] backdrop-blur-md flex items-center justify-center border border-white/25 shadow-xl">
                <Image 
                  src="/logo-1.png" 
                  alt="ProHR AI Logo" 
                  width={75} 
                  height={75} 
                  className="w-full h-full object-contain drop-shadow-md"
                  priority
                />
              </div>

              <h3 className="text-sm font-bold text-white mt-2.5 tracking-wide">ProHR AI</h3>
              <p className="text-[10px] text-blue-300 font-mono">pro-hr-ai.vercel.app</p>
            </div>
          </div>
        </div>

        {/* Hero / Intro Section */}
        <div className="text-center py-1 mb-6">
          <span className="inline-block text-xs font-bold px-3.5 py-1 rounded-full mb-2.5 bg-blue-500/20 text-blue-200 border border-blue-400/30 tracking-wide">
            {t.badge}
          </span>
          
          <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
            {t.heroTitle}
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            {t.heroDesc}
          </p>
        </div>

        {/* Interactive Application / CV Upload Form */}
        <form onSubmit={handleSubmitApplication} className="space-y-4 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10 mb-6 backdrop-blur-sm">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="h-px bg-white/20 flex-1"></span>
            {t.screeningHeader}
            <span className="h-px bg-white/20 flex-1"></span>
          </div>

          {/* Email Input */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-200">
              {t.emailLabel}
            </label>
            <input 
              type="email" 
              required
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-blue-400 transition-all"
            />
          </div>

          {/* Phone Input */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-200">
              {t.phoneLabel}
            </label>
            <input 
              type="tel" 
              required
              placeholder="+971500000000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-blue-400 transition-all"
            />
          </div>

          {/* File Input Section */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-200">
              {t.uploadLabel}
            </label>
            
            <input 
              type="file" 
              id="cvFile" 
              accept=".pdf,.docx,.doc" 
              className="hidden" 
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setSelectedFile(file);
                  setSelectedFileName(file.name);
                }
              }}
            />

            <div 
              onClick={() => {
                const fileInput = document.getElementById('cvFile') as HTMLInputElement;
                if (fileInput) fileInput.click();
              }}
              className="border-2 border-dashed border-white/20 hover:border-blue-400 transition-all rounded-xl p-4 text-center cursor-pointer bg-white/5 hover:bg-white/10 flex flex-col items-center justify-center gap-1.5"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center text-base shadow-sm border border-blue-400/30">
                📄
              </div>
              <p className="text-xs text-slate-200 font-medium">
                {selectedFileName ? (
                  <span className="text-blue-300 font-bold">{t.selectedText} {selectedFileName}</span>
                ) : (
                  <>{t.dropText} <span className="text-blue-400 underline font-bold">{t.browseText}</span></>
                )}
              </p>
              <p className="text-[10px] text-slate-400">{t.supportText}</p>
            </div>
          </div>

          {/* Checkbox Privacy Agree */}
          <div className="flex items-start gap-2.5 pt-1">
            <input 
              type="checkbox" 
              id="privacyCheck"
              checked={agreedPrivacy}
              onChange={(e) => setAgreedPrivacy(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-white/30 text-blue-600 focus:ring-blue-500 bg-white/10 cursor-pointer"
            />
            <label htmlFor="privacyCheck" className="text-[11px] text-slate-300 leading-tight cursor-pointer">
              {t.privacyAgreeText}
              <span className="text-blue-400 underline font-semibold">{t.privacyPolicyText}</span>.
            </label>
          </div>

          {/* Message Status Bar */}
          {statusMessage && (
            <div className={`p-3 rounded-xl text-xs font-semibold text-center ${
              statusMessage.type === 'success' 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
            }`}>
              {statusMessage.text}
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-4 rounded-xl text-white font-bold text-xs sm:text-sm text-center shadow-lg transition-all flex items-center justify-center gap-2 hover:opacity-95 disabled:opacity-50 cursor-pointer mt-2"
            style={{ background: 'linear-gradient(90deg, #14335c, #2f6fb0)' }}
          >
            {isSubmitting ? t.submittingBtn : t.submitBtn}
          </button>
        </form>

        {/* Quick Action Section */}
        <div className="space-y-2.5 mb-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <Link
              href="/login"
              className="w-full py-3 px-4 rounded-xl text-white font-bold text-xs sm:text-sm text-center shadow-md transition-all flex items-center justify-center gap-2 hover:opacity-95"
              style={{ background: 'linear-gradient(90deg, #14335c, #2f6fb0)' }}
            >
              {t.signInBtn}
            </Link>

            <Link
              href="/dashboard"
              className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 shadow-sm"
            >
              {t.dashboardBtn}
            </Link>
          </div>

          <div className="pt-0.5">
            <Link
              href="/screen"
              className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-center transition-all flex items-center justify-center gap-2 text-blue-200 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-400/20"
            >
              {t.aiScreeningBtn}
            </Link>
          </div>
        </div>

        {/* Professional Footer */}
        <footer className="w-full text-center py-4 mt-5 border-t border-white/10 text-slate-400 text-[11px]">
          <p className="mb-1">
            {t.footerRights} • <span className="hover:text-white cursor-pointer">{t.supportCenter}</span>
          </p>
          <div className="text-slate-300 font-medium tracking-wide flex items-center justify-center gap-1 flex-wrap">
            <span>{t.developedBy}</span>
            <span dir="ltr" className="font-semibold text-white">Reham Hamdy Elsayed Khedr</span>
          </div>
        </footer>

      </div>
    </main>
  );
}   
