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
  }
};

const languagesList = [
  { code: 'ar', name: 'العربية', flag: '🇦🇪' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

export default function Home() {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const t = translations[currentLang] || translations.ar;

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_lang", langCode);
    }
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
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-md overflow-hidden p-1.5 bg-white shrink-0 border border-slate-100"
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
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full text-xs font-semibold text-slate-700 transition-all shadow-sm"
              >
                <span>{languagesList.find(l => l.code === currentLang)?.flag}</span>
                <span>{languagesList.find(l => l.code === currentLang)?.name}</span>
                <span className="text-[10px]">▼</span>
              </button>

              {isLangOpen && (
                <div className="absolute top-full mt-2 right-0 w-32 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-50">
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
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

        {/* Promo Feature Card - كارت متناسق و مندمج بصرياً */}
        <div 
          dir="ltr"
          className="relative overflow-hidden rounded-3xl p-6 sm:p-8 mb-8 text-white shadow-xl border border-blue-400/20 text-left"
          style={{
            backgroundColor: '#0e2a4d',
            backgroundImage: 'linear-gradient(135deg, #0b223f 0%, #0e2a4d 50%, #173d6a 100%)'
          }}
        >
          {/* الشريط العلوي المضيء */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold mb-4 shadow-sm">
            <span>⚡ AI-Powered</span>
            <span className="text-amber-400">•</span>
            <span>Pi Network Native</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* العناوين والشارات */}
            <div className="md:col-span-8 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Hiring, <span className="text-[#5b9bd5] underline decoration-blue-400/40">Reinvented</span><br />
                for the UAE 🇦🇪
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Decentralized smart HR — AI resume screening, real agent reasoning, and Pi-native identity. Try it free.
              </p>

              {/* الشارات */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs font-medium text-slate-200">
                  🤖 AI Agents
                </span>
                <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs font-medium text-slate-200">
                  🔐 Pi Sign-In
                </span>
                <span className="px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs font-medium text-slate-200">
                  🇦🇪 UAE-Ready
                </span>
              </div>
            </div>

            {/* الشعار النظيف (بدون نص مكرر) والرابط */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-white/10">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-2 bg-[#0b223f]/90 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                <Image 
                  src="/logo-1.png" 
                  alt="ProHR AI Logo" 
                  width={80} 
                  height={80} 
                  className="w-full h-full object-contain drop-shadow"
                  priority
                />
              </div>

              <h3 className="text-base font-bold text-white mt-3 tracking-wide">ProHR AI</h3>
              <p className="text-[11px] text-blue-300 font-mono">pro-hr-ai.vercel.app</p>
            </div>
          </div>
        </div>

        {/* Hero / Intro Section */}
        <div className="text-center py-1 mb-6">
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
              className="border-2 border-dashed border-slate-300 hover:border-[#2f6fb0] transition-all rounded-2xl p-5 text-center cursor-pointer bg-white hover:bg-blue-50/20 flex flex-col items-center justify-center gap-2 shadow-2xs"
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
