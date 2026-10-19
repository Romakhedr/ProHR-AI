"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const translations: Record<string, {
  dir: "rtl" | "ltr";
  subtitleHeader: string;
  backHome: string;
  signInTab: string;
  signUpTab: string;
  emailLabel: string;
  passwordLabel: string;
  submitBtn: string;
  footerRights: string;
  supportCenter: string;
  developedBy: string;
}> = {
  ar: {
    dir: "rtl",
    subtitleHeader: "منصة الموارد البشرية الذكية",
    backHome: "← العودة للرئيسية",
    signInTab: "تسجيل الدخول",
    signUpTab: "إنشاء حساب",
    emailLabel: "البريد الإلكتروني",
    passwordLabel: "كلمة المرور",
    submitBtn: "تسجيل الدخول",
    footerRights: "ProHR AI © 2026. جميع الحقوق محفوظة.",
    supportCenter: "مركز الدعم",
    developedBy: "تم التطوير بواسطة"
  },
  en: {
    dir: "ltr",
    subtitleHeader: "Smart HR Platform",
    backHome: "← Back to Home",
    signInTab: "Sign In",
    signUpTab: "Register",
    emailLabel: "Email Address",
    passwordLabel: "Password",
    submitBtn: "Sign In",
    footerRights: "ProHR AI © 2026. All rights reserved.",
    supportCenter: "Support Center",
    developedBy: "developed by"
  }
};

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [currentLang, setCurrentLang] = useState("ar");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("preferred_lang");
      if (savedLang && translations[savedLang]) {
        setCurrentLang(savedLang);
      }
    }
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_lang", langCode);
    }
  };

  const t = translations[currentLang] || translations.ar;

  return (
    <main
      dir={t.dir}
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden"
      style={{
        backgroundColor: "#0b223f",
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
        style={{ background: "linear-gradient(90deg, #14335c, #2f6fb0 60%, #5b9bd5)" }}
      />

      {/* Main Container Card */}
      <div
        className="w-full max-w-md overflow-hidden p-6 sm:p-8 transition-all bg-white relative z-10 shadow-2xl"
        style={{
          borderRadius: "24px",
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 gap-2">
          <div className="flex items-center gap-2.5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-md overflow-hidden p-1 bg-white shrink-0 border border-slate-100"
            >
              <Image
                src="/logo-1.png"
                alt="ProHR AI Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-base font-bold text-[#0e2a4d]">ProHR AI</h1>
              <p className="text-[11px] text-slate-500">{t.subtitleHeader}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={() => handleLanguageChange(currentLang === "ar" ? "en" : "ar")}
              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full text-[11px] font-bold text-slate-700 transition-all shrink-0"
            >
              {currentLang === "ar" ? "🇺🇸 EN" : "🇦🇪 AR"}
            </button>

            {/* Back to Home Button */}
            <Link
              href="/"
              className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-[#2f6fb0] border border-blue-100 hover:bg-blue-100 transition-all shrink-0 whitespace-nowrap"
            >
              {t.backHome}
            </Link>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => setActiveTab("signin")}
            className={`py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === "signin"
                ? "bg-white text-[#0e2a4d] shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {t.signInTab}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("signup")}
            className={`py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === "signup"
                ? "bg-white text-[#0e2a4d] shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            {t.signUpTab}
          </button>
        </div>

        {/* Form Fields */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1 text-start">
            <label className="block text-xs font-bold text-slate-700">{t.emailLabel}</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#2f6fb0] bg-slate-50/50"
            />
          </div>

          <div className="space-y-1 text-start">
            <label className="block text-xs font-bold text-slate-700">{t.passwordLabel}</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#2f6fb0] bg-slate-50/50"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl text-white font-bold text-xs text-center shadow-md transition-all hover:opacity-95"
            style={{ background: "linear-gradient(90deg, #0e2a4d, #2f6fb0)" }}
          >
            {activeTab === "signin" ? t.signInTab : t.signUpTab}
          </button>
        </form>

        {/* Footer */}
        <footer className="w-full text-center py-4 mt-6 border-t border-slate-100 text-slate-600 text-[11px]">
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
