'use client';

import React, { useState } from 'react';

const languages = [
  { code: 'ar', name: 'العربية', flag: '🇦🇪' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'tl', name: 'Filipino', flag: '🇵🇭' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ne', name: 'नेपाली', flag: '🇳🇵' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  const handleSelect = (lang: typeof languages[0]) => {
    setCurrentLang(lang);
    setIsOpen(false);
    // يمكنك إضافة منطق تغيير اتجاه الصفحة أو ترجمة النصوص هنا
    if (lang.code === 'ar' || lang.code === 'ur') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-white dark:hover:bg-slate-800 transition-all"
      >
        <span className="text-sm">{currentLang.flag}</span>
        <span>{currentLang.name}</span>
        <svg className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl py-2 max-h-60 overflow-y-auto focus:outline-none">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs text-left hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors ${
                currentLang.code === lang.code ? 'font-bold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
