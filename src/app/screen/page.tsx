"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { submitApplicationAction } from "@/app/actions";

export default function ScreenPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  
  const [immediateJoining, setImmediateJoining] = useState("yes");
  const [currentSalary, setCurrentSalary] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      setStatusMessage({ type: 'error', text: 'يرجى ملء كافة البيانات الشخصية المطلوبة.' });
      return;
    }

    if (!selectedFile) {
      setStatusMessage({ type: 'error', text: 'يرجى رفع السيرة الذاتية أولاً.' });
      return;
    }

    if (!agreedTerms) {
      setStatusMessage({ type: 'error', text: 'يجب الموافقة على سياسة الخصوصية للمتابعة.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('immediateJoining', immediateJoining);
      formData.append('currentSalary', currentSalary);
      formData.append('expectedSalary', expectedSalary);
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('phone', phone);
      // إرسال الملف باسم cv و file لضمان توافقه مع أي مستقبل بيانات
      formData.append('file', selectedFile);
      formData.append('cv', selectedFile);

      const result = await submitApplicationAction(formData);

      if (!result.success) {
        throw new Error(result.message || "Failed to submit request.");
      }

      setIsSubmitting(false);
      setStatusMessage({ 
        type: 'success', 
        text: 'تم تقديم الطلب بنجاح! 🎉 (Submitted Successfully)' 
      });

      // تفريغ المدخلات بعد النجاح
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCurrentSalary("");
      setExpectedSalary("");
      setSelectedFile(null);
      setSelectedFileName("");
      setAgreedTerms(false);
      if (fileInputRef.current) fileInputRef.current.value = "";

    } catch (error: any) {
      console.error("Submission Error:", error);
      setIsSubmitting(false);
      setStatusMessage({ 
        type: 'error', 
        text: error.message || 'حدث خطأ ما، يرجى المحاولة مرة أخرى.' 
      });
    }
  };

  return (
    <main 
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-white text-slate-800"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Top Bar Accent - Royal Blue Gradient */}
      <div className="fixed top-0 right-0 left-0 h-2 z-50" style={{ background: 'linear-gradient(90deg, #1d4ed8, #2563eb 60%, #60a5fa)' }} />

      <div className="w-full max-w-2xl overflow-hidden p-6 sm:p-10 bg-white relative z-10 shadow-xl rounded-3xl border border-blue-100 my-8">
        
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-blue-900 font-extrabold text-xl shadow-inner overflow-hidden p-1 bg-blue-50 border border-blue-200">
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
              <h1 className="text-xl font-bold text-blue-950">AI Resume Screening</h1>
              <p className="text-xs text-blue-600 font-medium">ProHR Smart Candidate Portal</p>
            </div>
          </div>
          <Link href="/" className="text-xs font-semibold px-4 py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-all">
            ← Home
          </Link>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          
          <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-200">
            <label className="block text-xs font-bold text-blue-950 mb-3">Are you available for immediate joining?*</label>
            <div className="flex gap-8">
              <label className="flex items-center gap-2.5 text-sm font-semibold text-blue-900 cursor-pointer">
                <input 
                  type="radio" 
                  name="joining" 
                  value="yes" 
                  checked={immediateJoining === "yes"} 
                  onChange={(e) => setImmediateJoining(e.target.value)}
                  className="w-4 h-4 accent-blue-600 cursor-pointer" 
                /> Yes
              </label>
              <label className="flex items-center gap-2.5 text-sm font-semibold text-blue-900 cursor-pointer">
                <input 
                  type="radio" 
                  name="joining" 
                  value="no" 
                  checked={immediateJoining === "no"} 
                  onChange={(e) => setImmediateJoining(e.target.value)}
                  className="w-4 h-4 accent-blue-600 cursor-pointer" 
                /> No
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-blue-950 mb-1.5">Current Salary Package (Fixed + Benefits):</label>
              <input 
                type="text" 
                placeholder="e.g. 10,000 AED" 
                value={currentSalary}
                onChange={(e) => setCurrentSalary(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-300 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-blue-950 mb-1.5">Expected Salary:</label>
              <input 
                type="text" 
                placeholder="e.g. 15,000 AED" 
                value={expectedSalary}
                onChange={(e) => setExpectedSalary(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-300 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm" 
              />
            </div>
          </div>

          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-xs font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">Personal Information</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-blue-950 mb-1.5">First name*</label>
              <input 
                type="text" 
                placeholder="Enter first name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-300 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-blue-950 mb-1.5">Last name*</label>
              <input 
                type="text" 
                placeholder="Enter last name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-300 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-blue-950 mb-1.5">Email*</label>
              <input 
                type="email" 
                placeholder="name@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-300 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm" 
                dir="ltr" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-blue-950 mb-1.5">Phone*</label>
              <input 
                type="tel" 
                placeholder="+971" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-300 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm" 
                dir="ltr" 
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-blue-950 mb-1.5">Upload CV* (PDF / DOCX)</label>
            <input 
              type="file" 
              ref={fileInputRef}
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
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-blue-300 rounded-2xl p-6 text-center bg-blue-50/40 hover:bg-blue-50/80 hover:border-blue-600 transition-all cursor-pointer group"
            >
              <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">📄</span>
              <span className="text-xs font-semibold text-slate-700">
                {selectedFileName ? (
                  <span className="text-blue-700 font-bold">Selected: {selectedFileName}</span>
                ) : (
                  <>Drop your file here or <span className="text-blue-600 font-bold underline">browse to upload</span></>
                )}
              </span>
              <p className="text-[10px] text-slate-400 mt-1">Supports PDF, DOCX up to 10MB</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-blue-50/40 p-3.5 rounded-2xl border border-blue-100">
            <input 
              type="checkbox" 
              checked={agreedTerms}
              onChange={(e) => setAgreedTerms(e.target.checked)}
              className="mt-1 w-4 h-4 accent-blue-600 rounded cursor-pointer" 
            />
            <p className="text-xs text-slate-600 leading-relaxed">
              By submitting this application, I agree that I have read the <a href="#" className="text-blue-600 font-bold underline">Privacy Policy</a> and confirm that ProHR AI stores my personal details to process my job application.*
            </p>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-[0.99] disabled:opacity-50 cursor-pointer bg-blue-600"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>

          {/* رسالة الحالة بصندوق أخضر زمردي واضح ومميز */}
          {statusMessage && (
            <div className={`p-4 rounded-2xl text-sm font-semibold text-center transition-all shadow-md ${
              statusMessage.type === 'success' 
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-300' 
                : 'bg-rose-50 text-rose-700 border border-rose-200'
            }`}>
              {statusMessage.type === 'success' ? (
                <div className="space-y-1">
                  <p className="text-base text-emerald-700 font-bold">
                    تم تقديم الطلب بنجاح! 🎉
                  </p>
                  <p className="text-xs text-emerald-600 font-medium" dir="ltr">
                    (Submitted Successfully)
                  </p>
                </div>
              ) : (
                statusMessage.text
              )}
            </div>
          )}

        </form>

        <footer className="w-full text-center pt-6 mt-6 border-t border-slate-100 text-slate-500 text-xs">
          <p className="text-slate-700 font-medium tracking-wide">
            developed by <strong className="text-blue-700 font-semibold">Reham Hamdy Elsayed Khedr</strong>
          </p>
        </footer>

      </div>
    </main>
  );
}
