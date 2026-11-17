"use client";

import React, { useState } from "react";
import Link from "next/link";
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
      brandSubtitle: "ProHR Smart Candidate Portal",
      bannerTitle: "Available Vacancies",
      bannerDesc: "We're hiring — explore open roles and apply in minutes.",
      status: "Open",
      jobs: [
        { id: "civil-engineer", title: "Civil Engineer", type: "Full-time", location: "On-site" },
        { id: "accounting", title: "Accounting", type: "Full-time", location: "On-site" },
        { id: "foreman-civil-engineer", title: "Foreman Civil Engineer", type: "Full-time", location: "On-site" },
      ],
      applyBtn: "Apply Now",
      footerRights: "ProHR AI © 2026. All rights reserved.",
      support: "Support Center",
      developer: "Developed by Reham Hamdy Elsayed Khedr",
    },
    ar: {
      home: "الرئيسية",
      brandTitle: "ProHR AI",
      brandSubtitle: "بوابة المرشحين الذكية ProHR",
      bannerTitle: "الوظائف المتاحة",
      bannerDesc: "نحن نوظف الآن — استكشف الشواغر المتاحة وقدم في دقائق.",
      status: "متاح",
      jobs: [
        { id: "civil-engineer", title: "مهندس مدني", type: "دوام كامل", location: "حضوري" },
        { id: "accounting", title: "محاسب", type: "دوام كامل", location: "حضوري" },
        { id: "foreman-civil-engineer", title: "مراقب أعمال مدنية (فورمان)", type: "دوام كامل", location: "حضوري" },
      ],
      applyBtn: "قدم الآن",
      footerRights: "ProHR AI © 2026. جميع الحقوق محفوظة.",
      support: "مركز الدعم",
      developer: "تطوير ريهام حمدي السيد خضر",
    },
    zh: {
      home: "首页",
      brandTitle: "ProHR AI",
      brandSubtitle: "ProHR 智能候选人门户",
      bannerTitle: "空缺职位",
      bannerDesc: "我们正在招聘 — 探索开放职位并在几分钟内申请。",
      status: "开放",
      jobs: [
        { id: "civil-engineer", title: "土木工程师", type: "全职", location: "现场" },
        { id: "accounting", title: "会计", type: "全职", location: "现场" },
        { id: "foreman-civil-engineer", title: "土木工头", type: "全职", location: "现场" },
      ],
      applyBtn: "立即申请",
      footerRights: "ProHR AI © 2026. 保留所有权利。",
      support: "支持中心",
      developer: "由 Reham Hamdy Elsayed Khedr 开发",
    },
    hi: {
      home: "होम",
      brandTitle: "ProHR AI",
      brandSubtitle: "ProHR स्मार्ट कैंडिडेट पोर्टल",
      bannerTitle: "उपलब्ध रिक्तियां",
      bannerDesc: "हम भर्ती कर रहे हैं — खुली भूमिकाओं का अन्वेषण करें और कुछ ही मिनटों में आवेदन करें।",
      status: "खुला",
      jobs: [
        { id: "civil-engineer", title: "सिविल इंजीनियर", type: "पूर्णकालिक", location: "ऑन-साइट" },
        { id: "accounting", title: "एकाउंटिंग", type: "पूर्णकालिक", location: "ऑन-साइट" },
        { id: "foreman-civil-engineer", title: "फोरमैन सिविल इंजीनियर", type: "पूर्णकालिक", location: "ऑन-साइट" },
      ],
      applyBtn: "अभी आवेदन करें",
      footerRights: "ProHR AI © 2026. सर्वाधिकार सुरक्षित।",
      support: "सहायता केंद्र",
      developer: "Reham Hamdy Elsayed Khedr द्वारा विकसित",
    },
    ne: {
      home: "गृह",
      brandTitle: "ProHR AI",
      brandSubtitle: "ProHR स्मार्ट उम्मेदवार पोर्टल",
      bannerTitle: "उपलब्ध रिक्त पदहरू",
      bannerDesc: "हामी भर्ना गर्दैछौं — खुला भूमिकाहरू अन्वेषण गर्नुहोस् र मिनेटमै आवेदन दिनुहोस्।",
      status: "खुला",
      jobs: [
        { id: "civil-engineer", title: "सिभिल इन्जिनियर", type: "पूर्ण-समय", location: "अन-साइट" },
        { id: "accounting", title: "लेखा (Accounting)", type: "पूर्ण-समय", location: "अन-साइट" },
        { id: "foreman-civil-engineer", title: "फोरम्यान सिभिल इन्जिनियर", type: "पूर्ण-समय", location: "अन-साइट" },
      ],
      applyBtn: "अहिले आवेदन दिनुहोस्",
      footerRights: "ProHR AI © 2026. सर्वाधिकार सुरक्षित।",
      support: "सहयोग केन्द्र",
      developer: "Reham Hamdy Elsayed Khedr द्वारा विकसित",
    },
    fil: {
      home: "Tahanan",
      brandTitle: "ProHR AI",
      brandSubtitle: "ProHR Smart Candidate Portal",
      bannerTitle: "Mga Bakanteng Trabaho",
      bannerDesc: "Kumukuha kami — galugarin ang mga bukas na tungkulin at mag-apply sa ilang minuto.",
      status: "Bukas",
      jobs: [
        { id: "civil-engineer", title: "Civil Engineer", type: "Full-time", location: "On-site" },
        { id: "accounting", title: "Accounting", type: "Full-time", location: "On-site" },
        { id: "foreman-civil-engineer", title: "Foreman Civil Engineer", type: "Full-time", location: "On-site" },
      ],
      applyBtn: "Mag-apply Na",
      footerRights: "ProHR AI © 2026. All rights reserved.",
      support: "Support Center",
      developer: "Binuo ni Reham Hamdy Elsayed Khedr",
    },
    tr: {
      home: "Ana Sayfa",
      brandTitle: "ProHR AI",
      brandSubtitle: "ProHR Akıllı Aday Portalı",
      bannerTitle: "Açık Pozisyonlar",
      bannerDesc: "İşe alım yapıyoruz — açık rolleri keşfedin ve dakikalar içinde başvurun.",
      status: "Açık",
      jobs: [
        { id: "civil-engineer", title: "İnşaat Mühendisi", type: "Tam Zamanlı", location: "Ofiste" },
        { id: "accounting", title: "Muhasebe", type: "Tam Zamanlı", location: "Ofiste" },
        { id: "foreman-civil-engineer", title: "İnşaat Formeni", type: "Tam Zamanlı", location: "Ofiste" },
      ],
      applyBtn: "Hemen Başvur",
      footerRights: "ProHR AI © 2026. Tüm hakları saklıdır.",
      support: "Destek Merkezi",
      developer: "Reham Hamdy Elsayed Khedr tarafından geliştirilmiştir",
    },
    ur: {
      home: "ہوم",
      brandTitle: "ProHR AI",
      brandSubtitle: "ProHR سمارٹ امیدوار پورٹل",
      bannerTitle: "موجودہ آسامیاں",
      bannerDesc: "ہم خدمات لے رہے ہیں — خالی اسامیاں دیکھیں اور چند منٹوں میں درخواست دیں۔",
      status: "کھلا ہے",
      jobs: [
        { id: "civil-engineer", title: "سویل انجینئر", type: "فل ٹائم", location: "آن سائٹ" },
        { id: "accounting", title: "اکاؤنٹنگ", type: "فل ٹائم", location: "آن سائٹ" },
        { id: "foreman-civil-engineer", title: "فورمین سول انجینئر", type: "فل ٹائم", location: "آن سائٹ" },
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
      className="min-h-screen bg-[#f1f5f9] text-slate-800 flex flex-col items-center py-6 px-4 font-sans select-none"
    >
      {/* حاوية الهاتف الأساسية المطابقة لهوية ProHR AI */}
      <div className="w-full max-w-md bg-white rounded-[32px] shadow-xl border border-slate-200/80 overflow-hidden flex flex-col relative">
        
        {/* شريط علوي بلون الهوية البصرية */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0f172a] via-blue-600 to-indigo-600"></div>

        {/* الهيدر العلوي */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-slate-100">
          {/* شعار الشركة والاسم */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-[#0f172a] tracking-tight leading-tight">
                {t.brandTitle}
              </h1>
              <p className="text-[11px] text-blue-600 font-medium">
                {t.brandSubtitle}
              </p>
            </div>
          </div>

          {/* أزرار التنقل واللغة */}
          <div className="flex items-center gap-2">
            {/* زر اختيار اللغة المنسدل */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-700 px-3 py-2 rounded-xl text-xs font-semibold hover:bg-slate-100 transition"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>{currentLangObj.short}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>

              {isLangOpen && (
                <div className={`absolute top-11 ${isRtl ? "left-0" : "right-0"} w-44 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50`}>
                  {languagesList.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => {
                        setLang(item.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2 text-xs transition hover:bg-blue-50/80 ${
                        lang === item.code ? "bg-blue-50/60 text-blue-600 font-bold" : "text-slate-700 font-medium"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] text-slate-400 font-bold">{item.short}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* زر الرجوع للرئيسية */}
            <Link
              href="/"
              className="flex items-center gap-1 bg-slate-50 border border-slate-200 text-slate-700 px-3 py-2 rounded-xl text-xs font-semibold hover:bg-slate-100 transition active:scale-95"
            >
              <span className={isRtl ? "rotate-180 inline-block" : ""}>←</span>
              <span>{t.home}</span>
            </Link>
          </div>
        </div>

        {/* البانر الأزرق الرئيسي (Available Vacancies Banner) */}
        <div className="mx-6 mt-6 bg-gradient-to-br from-[#0f172a] via-blue-700 to-blue-600 rounded-3xl p-6 text-white shadow-lg shadow-blue-600/20 mb-6 relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          <div className="flex items-center gap-2.5 mb-2">
            <div className="p-2 bg-white/15 backdrop-blur-sm rounded-xl">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg font-bold tracking-wide">{t.bannerTitle}</h2>
          </div>
          <p className="text-xs text-blue-100 leading-relaxed font-normal">
            {t.bannerDesc}
          </p>
        </div>

        {/* قائمة بطاقات الوظائف */}
        <div className="px-6 space-y-4 pb-8">
          {t.jobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#f8fafc] rounded-3xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md hover:border-blue-200 transition duration-200"
            >
              {/* عنوان الوظيفة وحالة الوظيفة Open */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0f172a] text-base">{job.title}</h3>
                </div>
                <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200/70">
                  {t.status}
                </span>
              </div>

              {/* الوسوم التفصيلية (Full-time, On-site) */}
              <div className="flex items-center gap-2 mb-5">
                <span className="bg-white border border-slate-200/80 text-slate-600 text-xs font-medium px-3 py-1 rounded-full">
                  {job.type}
                </span>
                <span className="bg-white border border-slate-200/80 text-slate-600 text-xs font-medium px-3 py-1 rounded-full">
                  {job.location}
                </span>
              </div>

              {/* زر التقديم (Apply Now) ينقل لصفحة التقديم */}
              <Link
                href={`/apply?role=${encodeURIComponent(job.title)}`}
                className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition text-white font-semibold py-3 rounded-2xl text-sm shadow-md shadow-blue-600/20 flex items-center justify-center"
              >
                {t.applyBtn}
              </Link>
            </div>
          ))}
        </div>

        {/* الفوتر السفلي */}
        <div className="mt-auto bg-[#f8fafc] border-t border-slate-200/70 py-4 px-6 text-center space-y-1">
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
