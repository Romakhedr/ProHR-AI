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
  signInBtn: string;
  signUpBtn: string;
  footerRights: string;
  supportCenter: string;
  developedBy: string;
}> = {
  ar: {
    dir: "rtl",
    subtitleHeader: "منصة الموارد البشرية الذكية",
    backHome: "العودة للرئيسية ←",
    signInTab: "تسجيل الدخول",
    signUpTab: "إنشاء حساب",
    emailLabel: "البريد الإلكتروني",
    passwordLabel: "كلمة المرور",
    signInBtn: "تسجيل الدخول",
    signUpBtn: "إنشاء حساب",
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
    signInBtn: "Sign In",
    signUpBtn: "Register",
    footerRights: "ProHR AI © 2026. All rights reserved.",
    supportCenter: "Support Center",
    developedBy: "developed by"
  }
};

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [currentLang, setCurrentLang] = useState("ar");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!email || !password) {
      setStatusMessage({ type: 'error', text: currentLang === 'ar' ? 'يرجى إدخال البريد الإلكتروني وكلمة المرور' : 'Please enter email and password' });
      return;
    }

    setIsLoading(true);

    // محاكاة عملية المعالجة والإرسال
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage({
        type: 'success',
        text: 'Registration successful' // ستظهر باللون الأخضر الزمردي المميز
      });

      // تفريغ الحقول بعد النجاح
      setEmail("");
      setPassword("");
    }, 800);
  };

  const t = translations[currentLang] || translations.ar;

  return (
    <main
      dir={t.dir}
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-white text-slate-800"
      style={{
        fontFamily: "'Inter', 'Tajawal', sans-serif"
      }}
    >
      {/* Top Bar Accent - Royal Blue Gradient */}
      <div
        className="fixed top-0 right-0 left-0 h-2 z-50"
        style={{ background: "linear-gradient(90deg, #1d4ed8, #2563eb 60%, #60a5fa)" }}
      />

      {/* Main Container Card */}
      <div
        className="w-full max-w-md overflow-hidden p-6 sm:p-8 transition-all bg-white relative z-10 shadow-xl border border-blue-100"
        style={{
          borderRadius: "24px"
        }}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 gap-2">
          <div className="flex items-center gap-2.5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-blue-900 font-extrabold text-lg shadow-inner overflow-hidden p-1 bg-blue-50 shrink-0 border border-blue-200"
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
              <h1 className="text-base font-bold text-blue-950">ProHR AI</h1>
              <p className="text-[11px] text-blue-600 font-medium">{t.subtitleHeader}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={() => handleLanguageChange(currentLang === "ar" ? "en" : "ar")}
              className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full text-[11px] font-bold text-blue-800 transition-all shrink-0 cursor-pointer"
            >
              {currentLang === "ar" ? "🇺🇸 EN" : "🇦🇪 AR"}
            </button>

            {/* Back to Home Button */}
            <Link
              href="/"
              className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-all shrink-0 whitespace-nowrap"
            >
              {t.backHome}
            </Link>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-blue-50/70 border border-blue-100 rounded-xl mb-6">
          <button
            type="button"
            onClick={() => { setActiveTab("signin"); setStatusMessage(null); }}
            className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "signin"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-600 hover:text-blue-900"
            }`}
          >
            {t.signInTab}
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab("signup"); setStatusMessage(null); }}
            className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeTab === "signup"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-600 hover:text-blue-900"
            }`}
          >
            {t.signUpTab}
          </button>
        </div>

        {/* Form Fields */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1 text-start">
            <label className="block text-xs font-semibold text-slate-700">{t.emailLabel}</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 bg-white text-slate-900 transition-all"
            />
          </div>

          <div className="space-y-1 text-start">
            <label className="block text-xs font-semibold text-slate-700">{t.passwordLabel}</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 bg-white text-slate-900 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 mt-2 rounded-xl text-white font-bold text-xs text-center shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 bg-blue-600 cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>{currentLang === 'ar' ? 'جاري المعالجة...' : 'Processing...'}</span>
              </>
            ) : (
              <span>{activeTab === "signin" ? t.signInBtn : t.signUpBtn}</span>
            )}
          </button>

          {/* Status Alert Box - Emerald Green Styling for Success */}
          {statusMessage && (
            <div className={`p-3.5 mt-3 rounded-xl text-xs font-bold text-center transition-all duration-300 border ${
              statusMessage.type === 'success' 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300 shadow-sm' 
                : 'bg-rose-50 text-rose-800 border-rose-300'
            }`}>
              {statusMessage.text}
            </div>
          )}
        </form>

        {/* Footer */}
        <footer className="w-full text-center py-4 mt-6 border-t border-slate-100 text-slate-500 text-[11px]">
          <p className="mb-1">
            {t.footerRights} • <span className="hover:text-blue-600 transition-colors cursor-pointer">{t.supportCenter}</span>
          </p>
          <p className="text-slate-700 font-medium tracking-wide">
            {t.developedBy}{" "}
            <span dir="ltr" className="inline-block font-semibold text-blue-700">
              Reham Hamdy Elsayed Khedr
            </span>
          </p>
        </footer>
      </div>
    </main>
  );
}
