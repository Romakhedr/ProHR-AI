"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// قاموس الترجمات لجميع اللغات الـ 8
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
    developedBy: "تم التطوير بواسطة"
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
    developedBy: "developed by"
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
    developedBy: "开发者"
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
    developedBy: "द्वारा विकसित"
  },
  tl: {
    dir: "ltr",
    subtitleHeader: "Decentralized HR at AI Recruitment Platform",
    badge: "🚀 SUSUNOD NA Henerasyon ng CAREER AT TALENT HUB",
    title: "Pabilisin ang Inyong Pagkuha at Operasyon ng HR",
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
    developedBy: "binuo ni"
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
    developedBy: "geliştiren"
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
    developedBy: "द्वारा विकसित"
  },
  ur: {
    dir: "rtl",
    subtitleHeader: "غیر مرکزی ایچ آر اور اے آئی بھرتی کا پلیٹ فارم",
    badge: "🚀 اگلی نسل کا کیریئر اور ٹیلنٹ ہب",
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
    developedBy: "تیار کردہ"
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
  const [selectedFileName, setSelectedFileName] = useState("");
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const t = translations[currentLang] || translations.ar;

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setIsLangOpen(false);
  };

  return (
    <main 
      dir={t.dir}
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: '#0b223f',
        backgroundImage: `
          radial-gradient(circle at 85% 8%, rgba(47,111,176,0.2) 0, transparent 40%),
          radial-gradient(circle at 8% 92%, rgba(47,111,176,0.15) 0, transparent 35%)
        `,
        fontFamily: "'Inter', 'Tajawal', sans-serif"
      }}
    >
      {/* Top Bar Accent */}
      <div 
        className="fixed top-0 right-0 left-0 h-2 z-50"
        style={{ background: 'linear-gradient(90deg, #14335c, #2f6fb0 60%, #5b9bd5)' }}
      />

      {/* Main Container Card */}
      <div 
        className="w-full max-w-2xl overflow-hidden p-6 sm:p-10 transition-all bg-white relative z-10 shadow-2xl"
        style={{
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Header & Logo with Dynamic Language Dropdown */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-100 gap-2">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-md overflow-hidden p-1 bg-white shrink-0"
              style={{ background: 'linear-gradient(135deg, #0e2a4d, #2f6fb0)' }}
            >
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
              <h1 className="text-xl font-bold text-[#0e2a4d]">ProHR AI</h1>
              <p className="text-xs text-slate-500">{t.subtitleHeader}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 relative">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full text-xs font-semibold text-slate-700 transition-all shadow-sm"
              >
                <span>{languagesList.find(l => l.code === currentLang)?.flag}</span>
                <span>{languagesList.find(l => l.code === currentLang)?.name}</span>
                <span className="text-[10px]">▼</span>
              </button>

              {isLangOpen && (
                <div className="absolute top-full mt-2 right-0 w-36 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-50 max-h-56 overflow-y-auto">
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-right hover:bg-blue-50 transition-colors ${
                        currentLang === lang.code ? 'font-bold text-[#2f6fb0] bg-blue-50/50' : 'text-slate-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#2f6fb0] border border-blue-100 hidden sm:inline-block">
              v1.0 Portal
            </span>
          </div>
        </div>

        {/* Hero / Intro Section */}
        <div className="text-center py-2 mb-6">
          <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-3 bg-blue-50 text-[#2f6fb0] tracking-wide">
            {t.badge}
          </span>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e2a4d] mb-3">
            {t.heroTitle}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
            {t.heroDesc}
          </p>
        </div>

        {/* Interactive Application / CV Upload Section */}
        <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 mb-6">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="h-px bg-slate-300 flex-1"></span>
            {t.screeningHeader}
            <span className="h-px bg-slate-300 flex-1"></span>
          </div>

          {/* Upload CV Component */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700">
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
                  setSelectedFileName(file.name);
                }
              }}
            />

            <div 
              onClick={() => {
                const fileInput = document.getElementById('cvFile') as HTMLInputElement;
                if (fileInput) fileInput.click();
              }}
              className="border-2 border-dashed border-slate-300 hover:border-[#2f6fb0] transition-all rounded-2xl p-5 text-center cursor-pointer bg-white/80 hover:bg-blue-50/30 flex flex-col items-center justify-center gap-2 shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2f6fb0] flex items-center justify-center text-lg shadow-sm">
                📄
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                {selectedFileName ? (
                  <span className="text-[#2f6fb0] font-bold">{t.selectedText} {selectedFileName}</span>
                ) : (
                  <>{t.dropText} <span className="text-[#2f6fb0] underline font-bold">{t.browseText}</span></>
                )}
              </p>
              <p className="text-[10px] text-slate-400">{t.supportText}</p>
            </div>
          </div>
        </div>

        {/* Quick Action Section */}
        <div className="space-y-3 mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/login"
              className="w-full py-3.5 px-5 rounded-xl text-white font-bold text-sm text-center shadow-md transition-all flex items-center justify-center gap-2 hover:opacity-95"
              style={{ background: 'linear-gradient(90deg, #0e2a4d, #2f6fb0)' }}
            >
              {t.signInBtn}
            </Link>

            <Link
              href="/dashboard"
              className="w-full py-3.5 px-5 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 bg-white text-[#0e2a4d] border border-slate-300 hover:bg-slate-100 shadow-sm"
            >
              {t.dashboardBtn}
            </Link>
          </div>

          <div className="pt-1">
            <Link
              href="/screen"
              className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-center transition-all flex items-center justify-center gap-2 text-[#2f6fb0] bg-blue-50/80 hover:bg-blue-100/80 border border-blue-100"
            >
              {t.aiScreeningBtn}
            </Link>
          </div>
        </div>

        {/* Professional Footer */}
        <footer className="w-full text-center py-5 mt-6 border-t border-slate-100 text-slate-500 text-xs">
          <p className="mb-1">
            {t.footerRights} • <span className="hover:text-slate-800 cursor-pointer">{t.supportCenter}</span>
          </p>
          <p className="text-slate-700 font-medium tracking-wide">
            {t.developedBy} <strong className="text-slate-900 font-semibold">Reham Hamdy Elsayed Khedr</strong>
          </p>
        </footer>

      </div>
    </main>
  );
}
