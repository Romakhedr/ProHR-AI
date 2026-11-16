"use client";

import React, { useState } from "react";
import { Globe, ChevronDown, Briefcase, ShieldCheck } from "lucide-react";

type Language = "en" | "ar" | "zh" | "hi" | "ne" | "fil" | "tr" | "ur";

export default function AvailableVacanciesPage() {
  const [lang, setLang] = useState<Language>("en");
  const [isLangOpen, setIsLangOpen] = useState(false);

  // قاموس الترجمات للنصوص والعناوين
  const content = {
    en: {
      home: "Home",
      brandTitle: "ProHR AI",
      brandSubtitle: "Smart HR Platform",
      bannerTitle: "Available Vacancies",
      bannerDesc: "We're hiring — explore open roles and apply in minutes.",
      status: "Open",
      jobs: [
        { title: "Civil Engineer", type: "Full-time", location: "On-site" },
        { title: "Accounting", type: "Full-time", location: "On-site" },
        { title: "Foreman Civil Engineer", type: "Full-time", location: "On-site" },
      ],
      applyBtn: "Apply Now",
      footerRights: "ProHR AI © 2026. All rights reserved.",
      support: "Support Center",
      developer: "Developed by Reham Hamdy Elsayed Khedr",
    },
    ar: {
      home: "الرئيسية",
      brandTitle: "ProHR AI",
      brandSubtitle: "منصة الموارد البشرية الذكية",
      bannerTitle: "الوظائف المتاحة",
      bannerDesc: "نحن نوظف الآن — استكشف الشواغر المتاحة وقدم في دقائق.",
      status: "متاح",
      jobs: [
        { title: "مهندس مدني", type: "دوام كامل", location: "حضوري" },
        { title: "محاسب", type: "دوام كامل", location: "حضوري" },
        { title: "مراقب أعمال مدنية (فورمان)", type: "دوام كامل", location: "حضوري" },
      ],
      applyBtn: "قدم الآن",
      footerRights: "ProHR AI © 2026. جميع الحقوق محفوظة.",
      support: "مركز الدعم",
      developer: "تطوير ريهام حمدي السيد خضر",
    },
    zh: {
      home: "首页",
      brandTitle: "ProHR AI",
      brandSubtitle: "智能HR平台",
      bannerTitle: "空缺职位",
      bannerDesc: "我们正在招聘 — 探索开放职位并在几分钟内申请。",
      status: "开放",
      jobs: [
        { title: "土木工程师", type: "全职", location: "现场" },
        { title: "会计", type: "全职", location: "现场" },
        { title: "土木工头", type: "全职", location: "现场" },
      ],
      applyBtn: "立即申请",
      footerRights: "ProHR AI © 2026. 保留所有权利。",
      support: "支持中心",
      developer: "由 Reham Hamdy Elsayed Khedr 开发",
    },
    hi: {
      home: "होम",
      brandTitle: "ProHR AI",
      brandSubtitle: "स्मार्ट एचआर प्लेटफॉर्म",
      bannerTitle: "उपलब्ध रिक्तियां",
      bannerDesc: "हम भर्ती कर رہے हैं — खुली भूमिकाओं का अन्वेषण करें और कुछ ही मिनटों में आवेदन करें।",
      status: "खुला",
      jobs: [
        { title: "सिविल इंजीनियर", type: "पूर्णकालिक", location: "ऑन-साइट" },
        { title: "एकाउंटिंग", type: "पूर्णकालिक", location: "ऑन-साइट" },
        { title: "फोरमैन सिविल इंजीनियर", type: "पूर्णकालिक", location: "ऑन-साइट" },
      ],
      applyBtn: "अभी आवेदन करें",
      footerRights: "ProHR AI © 2026. सर्वाधिकार सुरक्षित।",
      support: "सहायता केंद्र",
      developer: "Reham Hamdy Elsayed Khedr द्वारा विकसित",
    },
    ne: {
      home: "गृह",
      brandTitle: "ProHR AI",
      brandSubtitle: "स्मार्ट एचआर प्लेटफर्म",
      bannerTitle: "उपलब्ध रिक्त पदहरू",
      bannerDesc: "हामी भर्ना गर्दैछौं — खुला भूमिका हरू अन्वेषण गर्नुहोस् र मिनेटमै आवेदन दिनुहोस्।",
      status: "खुला",
      jobs: [
        { title: "सिभिल इन्जिनियर", type: "पूर्ण-समय", location: "अन-साइट" },
        { title: "लेखा (Accounting)", type: "पूर्ण-समय", location: "अन-साइट" },
        { title: "फोरम्यान सिभिल इन्जिनियर", type: "पूर्ण-समय", location: "अन-साइट" },
      ],
      applyBtn: "अहिले आवेदन दिनुहोस्",
      footerRights: "ProHR AI © 2026. सर्वाधिकार सुरक्षित।",
      support: "सहयोग केन्द्र",
      developer: "Reham Hamdy Elsayed Khedr द्वारा विकसित",
    },
    fil: {
      home: "Tahanan",
      brandTitle: "ProHR AI",
      brandSubtitle: "Smart HR Platform",
      bannerTitle: "Mga Bakanteng Trabaho",
      bannerDesc: "Kumukuha kami — galugarin ang mga bukas na tungkulin at mag-apply sa ilang minuto.",
      status: "Bukas",
      jobs: [
        { title: "Civil Engineer", type: "Full-time", location: "On-site" },
        { title: "Accounting", type: "Full-time", location: "On-site" },
        { title: "Foreman Civil Engineer", type: "Full-time", location: "On-site" },
      ],
      applyBtn: "Mag-apply Na",
      footerRights: "ProHR AI © 2026. All rights reserved.",
      support: "Support Center",
      developer: "Binuo ni Reham Hamdy Elsayed Khedr",
    },
    tr: {
      home: "Ana Sayfa",
      brandTitle: "ProHR AI",
      brandSubtitle: "Akıllı İK Platformu",
      bannerTitle: "Açık Pozisyonlar",
      bannerDesc: "İşe alım yapıyoruz — açık rolleri keşfedin ve dakikalar içinde başvurun.",
      status: "Açık",
      jobs: [
        { title: "İnşaat Mühendisi", type: "Tam Zamanlı", location: "Ofiste" },
        { title: "Muhasebe", type: "Tam Zamanlı", location: "Ofiste" },
        { title: "İnşaat Formeni", type: "Tam Zamanlı", location: "Ofiste" },
      ],
      applyBtn: "Hemen Başvur",
      footerRights: "ProHR AI © 2026. Tüm hakları saklıdır.",
      support: "Destek Merkezi",
      developer: "Reham Hamdy Elsayed Khedr tarafından geliştirilmiştir",
    },
    ur: {
      home: "ہوم",
      brandTitle: "ProHR AI",
      brandSubtitle: "سمارٹ ایچ آر پلیٹ فارم",
      bannerTitle: "موجودہ آسامیاں",
      bannerDesc: "ہم خدمات لے رہے ہیں — خالی اسامیاں دیکھیں اور چند منٹوں میں درخواست دیں۔",
      status: "کھلا ہے",
      jobs: [
        { title: "سویل انجینئر", type: "فل ٹائم", location: "آن سائٹ" },
        { title: "اکاؤنٹنگ", type: "فل ٹائم", location: "آن سائٹ" },
        { title: "فورمین سول انجینئر", type: "فل ٹائم", location: "آن سائٹ" },
      ],
      applyBtn: "ابھی درخواست دیں",
      footerRights: "ProHR AI © 2026. جملہ حقوق محفوظ ہیں۔",
      support: "سپورٹ سینٹر",
      developer: "تخلیق کار: ريهام حمدي السيد خضر",
    },
  };

  const t = content[lang];
  const isRtl = lang === "ar" || lang === "ur";

  const languagesList: { code: Language; label: string; short: string }[] = [
    { code: "en", label: "English", short: "EN" },
    { code: "ar", label: "العربية", short: "AR" },
    { code: "zh", label: "中文", short: "ZH" },
    { code: "hi", label: "हिन्दी", short: "HI" },
    { code: "ne", label: "नेपाली", short: "NE" },
    { code: "fil", label: "Filipino", short: "FIL" },
    { code: "tr", label: "Türkçe", short: "TR" },
    { code: "ur", label: "اردو", short: "UR" },
  ];

  const currentLangObj = languagesList.find((l) => l.code === lang) || languagesList[0];

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f1f3f9] text-slate-800 flex flex-col items-center py-6 px-4 font-sans select-none"
    >
      {/* حاوية الهاتف الأساسية (Container) */}
      <div className="w-full max-w-md bg-[#f8f9fc] rounded-[32px] shadow-xl border border-slate-200/80 overflow-hidden flex flex-col relative">
        
        {/* الهيدر العلوي */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          {/* زر الرجوع */}
          <button
            type="button"
            className="flex items-center gap-1 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-slate-50 transition active:scale-95"
          >
            <span className={isRtl ? "rotate-180 inline-block" : ""}>&lt;</span>
            <span>{t.home}</span>
          </button>

          {/* زر اختيار اللغة المنسدل */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-3.5 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-slate-50 transition"
            >
              <Globe className="w-4 h-4 text-slate-600" />
              <span>{currentLangObj.short}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
            </button>

            {/* قائمة اللغات المطابقة للصورة تماماً */}
            {isLangOpen && (
              <div className="absolute top-12 right-0 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95">
                {languagesList.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLang(item.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition hover:bg-blue-50/80 ${
                      lang === item.code ? "bg-blue-50/60 text-blue-600 font-bold" : "text-slate-700 font-normal"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-slate-400 font-semibold">{item.short}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* شعار الشركة والمعلومات */}
        <div className="px-6 flex items-center justify-between mt-2 mb-6">
          <div>
            <h1 className="text-xl font-bold text-blue-600 tracking-tight">{t.brandTitle}</h1>
            <p className="text-xs text-slate-500 font-medium">{t.brandSubtitle}</p>
          </div>
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <ShieldCheck className="w-7 h-7" />
          </div>
        </div>

        {/* البانر الأزرق الرئيسي (Available Vacancies Banner) */}
        <div className="mx-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-6 text-white shadow-lg shadow-blue-600/25 mb-6 relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-white/20 rounded-lg">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg font-bold tracking-wide">{t.bannerTitle}</h2>
          </div>
          <p className="text-xs text-blue-100 leading-relaxed font-normal opacity-90">
            {t.bannerDesc}
          </p>
        </div>

        {/* قائمة بطاقات الوظائف */}
        <div className="px-6 space-y-4 pb-8">
          {t.jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition duration-200"
            >
              {/* عنوان الوظيفة وحالة الوظيفة Open */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-inner">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base">{job.title}</h3>
                </div>
                <span className="bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100/60">
                  {t.status}
                </span>
              </div>

              {/* الوسوم التفصيلية (Full-time, On-site) */}
              <div className="flex items-center gap-2 mb-5">
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full">
                  {job.type}
                </span>
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full">
                  {job.location}
                </span>
              </div>

              {/* زر التقديم (Apply Now) */}
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition text-white font-semibold py-3 rounded-2xl text-sm shadow-md shadow-blue-500/20"
              >
                {t.applyBtn}
              </button>
            </div>
          ))}
        </div>

        {/* الفوتر السفلي */}
        <div className="mt-auto bg-slate-50 border-t border-slate-200/60 py-4 px-6 text-center space-y-1">
          <div className="text-[11px] text-slate-500 flex items-center justify-center gap-2 flex-wrap">
            <span>{t.footerRights}</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer font-medium">{t.support}</span>
          </div>
          <div className="text-[11px] font-semibold text-blue-600 tracking-wide">
            {t.developer}
          </div>
        </div>

      </div>
    </div>
  );
}
