"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedFileName, setSelectedFileName] = useState("");

  return (
    <main 
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden"
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
        {/* Header & Logo */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-md overflow-hidden p-1 bg-white"
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
              <p className="text-xs text-slate-500">Decentralized HR & AI Recruitment Platform</p>
            </div>
          </div>
          <span 
            className="text-xs font-semibold px-3.5 py-1 rounded-full bg-blue-50 text-[#2f6fb0] border border-blue-100"
          >
            v1.0 Portal
          </span>
        </div>

        {/* Hero / Intro Section */}
        <div className="text-center py-2 mb-6">
          <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-3 bg-blue-50 text-[#2f6fb0] tracking-wide uppercase">
            🚀 Next-Gen Career & Talent Hub
          </span>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0e2a4d] mb-3">
            Streamline Your Hiring & HR Operations
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
            Experience AI-powered resume screening, blockchain-backed credentials, and seamless candidate onboarding in one unified dashboard.
          </p>
        </div>

        {/* Interactive Application / CV Upload Section */}
        <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 mb-6">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="h-px bg-slate-300 flex-1"></span>
            Candidate Quick Screening
            <span className="h-px bg-slate-300 flex-1"></span>
          </div>

          {/* Upload CV Component */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700">
              Upload CV* (PDF / DOCX)
            </label>
            
            {/* حقل الإدخال المخفي */}
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

            {/* الصندوق التفاعلي القابل للضغط */}
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
                  <span className="text-[#2f6fb0] font-bold">Selected: {selectedFileName}</span>
                ) : (
                  <>Drop your file here or <span className="text-[#2f6fb0] underline font-bold">browse to upload</span></>
                )}
              </p>
              <p className="text-[10px] text-slate-400">Supports PDF, DOCX up to 10MB</p>
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
              🔐 Sign In / Register
            </Link>

            <Link
              href="/dashboard"
              className="w-full py-3.5 px-5 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 bg-white text-[#0e2a4d] border border-slate-300 hover:bg-slate-100 shadow-sm"
            >
              📊 HR Dashboard
            </Link>
          </div>

          <div className="pt-1">
            <Link
              href="/screen"
              className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-center transition-all flex items-center justify-center gap-2 text-[#2f6fb0] bg-blue-50/80 hover:bg-blue-100/80 border border-blue-100"
            >
              ✨ AI Resume Screening & Task Router →
            </Link>
          </div>
        </div>

        {/* Professional Footer */}
        <footer className="w-full text-center py-5 mt-6 border-t border-slate-100 text-slate-500 text-xs">
          <p className="mb-1">
            ProHR AI © 2026. All rights reserved. • <span className="hover:text-slate-800 cursor-pointer">Support Center</span>
          </p>
          <p className="text-slate-700 font-medium tracking-wide">
            Engineered by <strong className="text-slate-900 font-semibold">Reham Hamdy Elsayed Khedr</strong>
          </p>
        </footer>

      </div>
    </main>
  );
}
