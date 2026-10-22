"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ScreenPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  
  // State for Form Fields
  const [immediateJoining, setImmediateJoining] = useState("yes");
  const [currentSalary, setCurrentSalary] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);

  // State for Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!email || !phone || !firstName || !lastName || !selectedFile || !agreedTerms) {
      setStatusMessage({ type: 'error', text: 'Please complete all required fields and accept the privacy policy.' });
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
      formData.append('file', selectedFile);

      // رابط الـ Webhook الخاص بك في Make
      const webhookUrl = "https://hook.eu1.make.com/5t0onas7n3z9dp92rjvlvhu4r8jgvz7g";

      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit request.");
      }

      setIsSubmitting(false);
      setStatusMessage({ type: 'success', text: 'Application Submitted Successfully! 🎉' });
      alert("Application Submitted Successfully! 🎉");

      // تفريغ الحقول بعد النجاح
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setCurrentSalary("");
      setExpectedSalary("");
      setSelectedFile(null);
      setSelectedFileName("");
      setAgreedTerms(false);

    } catch (error) {
      console.error("Submission Error:", error);
      setIsSubmitting(false);
      setStatusMessage({ type: 'error', text: 'Something went wrong. Please try submitting again.' });
    }
  };

  return (
    <main 
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative overflow-hidden"
      style={{
        backgroundColor: '#0b223f',
        backgroundImage: `
          radial-gradient(circle at 85% 8%, rgba(47,111,176,0.2) 0, transparent 40%),
          radial-gradient(circle at 8% 92%, rgba(47,111,176,0.15) 0, transparent 35%)
        `,
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Top Bar Accent */}
      <div className="fixed top-0 right-0 left-0 h-2 z-50" style={{ background: 'linear-gradient(90deg, #14335c, #2f6fb0 60%, #5b9bd5)' }} />

      {/* Main Container Card */}
      <div className="w-full max-w-2xl overflow-hidden p-6 sm:p-10 bg-white relative z-10 shadow-2xl rounded-3xl border border-white/10 my-8">
        
        {/* Header with Professional Logo */}
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
              <h1 className="text-xl font-bold text-[#0e2a4d]">AI Resume Screening</h1>
              <p className="text-xs text-slate-500">ProHR Smart Candidate Portal</p>
            </div>
          </div>
          <Link href="/" className="text-xs font-semibold px-4 py-2 rounded-xl bg-blue-50 text-[#2f6fb0] border border-blue-100 hover:bg-blue-100 transition-all">
            ← Home
          </Link>
        </div>

        {/* Application Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Availability Question */}
          <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80">
            <label className="block text-xs font-bold text-[#0e2a4d] mb-3">Are you available for immediate joining?*</label>
            <div className="flex gap-8">
              <label className="flex items-center gap-2.5 text-sm font-semibold text-[#0e2a4d] cursor-pointer">
                <input 
                  type="radio" 
                  name="joining" 
                  value="yes" 
                  checked={immediateJoining === "yes"} 
                  onChange={(e) => setImmediateJoining(e.target.value)}
                  className="w-4 h-4 accent-[#2f6fb0]" 
                /> Yes
              </label>
              <label className="flex items-center gap-2.5 text-sm font-semibold text-[#0e2a4d] cursor-pointer">
                <input 
                  type="radio" 
                  name="joining" 
                  value="no" 
                  checked={immediateJoining === "no"} 
                  onChange={(e) => setImmediateJoining(e.target.value)}
                  className="w-4 h-4 accent-[#2f6fb0]" 
                /> No
              </label>
            </div>
          </div>

          {/* Salary fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0e2a4d] mb-1.5">Current Salary Package (Fixed + Benefits):</label>
              <input 
                type="text" 
                placeholder="e.g. 10,000 AED" 
                value={currentSalary}
                onChange={(e) => setCurrentSalary(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-semibold text-[#0e2a4d] placeholder:text-slate-400 focus:outline-none focus:border-[#2f6fb0] focus:ring-2 focus:ring-[#2f6fb0]/20 focus:bg-white transition-all shadow-sm" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0e2a4d] mb-1.5">Expected Salary:</label>
              <input 
                type="text" 
                placeholder="e.g. 15,000 AED" 
                value={expectedSalary}
                onChange={(e) => setExpectedSalary(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-semibold text-[#0e2a4d] placeholder:text-slate-400 focus:outline-none focus:border-[#2f6fb0] focus:ring-2 focus:ring-[#2f6fb0]/20 focus:bg-white transition-all shadow-sm" 
              />
            </div>
          </div>

          {/* Personal Information Divider */}
          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-xs font-bold text-[#2f6fb0] uppercase tracking-wider bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100">Personal Information</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Name fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0e2a4d] mb-1.5">First name*</label>
              <input 
                type="text" 
                required 
                placeholder="Enter first name" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-semibold text-[#0e2a4d] placeholder:text-slate-400 focus:outline-none focus:border-[#2f6fb0] focus:ring-2 focus:ring-[#2f6fb0]/20 focus:bg-white transition-all shadow-sm" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0e2a4d] mb-1.5">Last name*</label>
              <input 
                type="text" 
                required 
                placeholder="Enter last name" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-semibold text-[#0e2a4d] placeholder:text-slate-400 focus:outline-none focus:border-[#2f6fb0] focus:ring-2 focus:ring-[#2f6fb0]/20 focus:bg-white transition-all shadow-sm" 
              />
            </div>
          </div>

          {/* Contact fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0e2a4d] mb-1.5">Email*</label>
              <input 
                type="email" 
                required 
                placeholder="name@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-semibold text-[#0e2a4d] placeholder:text-slate-400 focus:outline-none focus:border-[#2f6fb0] focus:ring-2 focus:ring-[#2f6fb0]/20 focus:bg-white transition-all shadow-sm" 
                dir="ltr" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0e2a4d] mb-1.5">Phone*</label>
              <input 
                type="tel" 
                required 
                placeholder="+971" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-semibold text-[#0e2a4d] placeholder:text-slate-400 focus:outline-none focus:border-[#2f6fb0] focus:ring-2 focus:ring-[#2f6fb0]/20 focus:bg-white transition-all shadow-sm" 
                dir="ltr" 
              />
            </div>
          </div>

          {/* Upload CV Box (Interactive & Fixed) */}
          <div>
            <label className="block text-xs font-bold text-[#0e2a4d] mb-1.5">Upload CV* (PDF / DOCX)</label>
            
            {/* Hidden File Input */}
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

            {/* Clickable Interactive Upload Box */}
            <div 
              onClick={() => {
                const fileInput = document.getElementById('cvFile') as HTMLInputElement;
                if (fileInput) fileInput.click();
              }}
              className="border-2 border-dashed border-[#2f6fb0]/40 rounded-2xl p-6 text-center bg-blue-50/30 hover:bg-blue-50/70 hover:border-[#2f6fb0] transition-all cursor-pointer group"
            >
              <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">📄</span>
              <span className="text-xs font-semibold text-[#0e2a4d]">
                {selectedFileName ? (
                  <span className="text-[#2f6fb0] font-bold">Selected: {selectedFileName}</span>
                ) : (
                  <>Drop your file here or <span className="text-[#2f6fb0] font-bold underline">browse to upload</span></>
                )}
              </span>
              <p className="text-[10px] text-slate-400 mt-1">Supports PDF, DOCX up to 10MB</p>
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="flex items-start gap-3 bg-slate-50/50 p-3.5 rounded-2xl border border-slate-200/60">
            <input 
              type="checkbox" 
              required 
              checked={agreedTerms}
              onChange={(e) => setAgreedTerms(e.target.checked)}
              className="mt-1 w-4 h-4 accent-[#2f6fb0] rounded cursor-pointer" 
            />
            <p className="text-xs text-slate-600 leading-relaxed">
              By submitting this application, I agree that I have read the <a href="#" className="text-[#2f6fb0] font-bold underline">Privacy Policy</a> and confirm that ProHR AI stores my personal details to process my job application.*
            </p>
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div className={`p-3 rounded-2xl text-xs font-semibold text-center ${
              statusMessage.type === 'success' 
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                : 'bg-rose-50 text-rose-700 border border-rose-200'
            }`}>
              {statusMessage.text}
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl text-white font-bold text-sm shadow-xl transition-all hover:opacity-95 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
            style={{ background: 'linear-gradient(90deg, #0e2a4d, #2f6fb0)' }}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>

        </form>

        {/* Footer / Attribution */}
        <footer className="w-full text-center pt-6 mt-6 border-t border-slate-100 text-slate-500 text-xs">
          <p className="text-slate-700 font-medium tracking-wide">
            developed by <strong className="text-slate-900 font-semibold">Reham Hamdy Elsayed Khedr</strong>
          </p>
        </footer>

      </div>
    </main>
  );
}
