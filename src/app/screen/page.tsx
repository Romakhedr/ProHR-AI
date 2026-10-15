import Link from "next/link";

export default function ScreenPage() {
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
      {/* Top Bar */}
      <div className="fixed top-0 right-0 left-0 h-2 z-50" style={{ background: 'linear-gradient(90deg, #14335c, #2f6fb0 60%, #5b9bd5)' }} />

      {/* Main Container Card */}
      <div className="w-full max-w-2xl overflow-hidden p-6 sm:p-10 bg-white relative z-10 shadow-2xl rounded-3xl border border-white/10">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-md"
                 style={{ background: 'linear-gradient(135deg, #0e2a4d, #2f6fb0)' }}>
              ✨
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#0e2a4d]">AI Resume Screening</h1>
              <p className="text-xs text-slate-500">ProHR Smart Candidate Portal</p>
            </div>
          </div>
          <Link href="/" className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-[#2f6fb0] border border-blue-100 hover:bg-blue-100 transition-all">
            Home
          </Link>
        </div>

        {/* Application Form */}
        <form className="space-y-6">
          
          {/* Availability Question */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            <label className="block text-xs font-bold text-slate-700 mb-2">Are you available for immediate joining?*</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input type="radio" name="joining" value="yes" defaultChecked className="accent-[#2f6fb0]" /> Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                <input type="radio" name="joining" value="no" className="accent-[#2f6fb0]" /> No
              </label>
            </div>
          </div>

          {/* Salary fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Current Salary Package (Fixed + Benefits):</label>
              <input type="text" placeholder="e.g. 10,000 AED" className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#2f6fb0] focus:bg-white transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Expected Salary:</label>
              <input type="text" placeholder="e.g. 15,000 AED" className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#2f6fb0] focus:bg-white transition-all" />
            </div>
          </div>

          {/* Personal Information Divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Personal information</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          {/* Name fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">First name*</label>
              <input type="text" required placeholder="Enter first name" className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#2f6fb0] focus:bg-white transition-all" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Last name*</label>
              <input type="text" required placeholder="Enter last name" className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#2f6fb0] focus:bg-white transition-all" />
            </div>
          </div>

          {/* Contact fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Email*</label>
              <input type="email" required placeholder="name@example.com" className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#2f6fb0] focus:bg-white transition-all" dir="ltr" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone*</label>
              <input type="tel" required placeholder="+971 50 123 4567" className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#2f6fb0] focus:bg-white transition-all" dir="ltr" />
            </div>
          </div>

          {/* Upload CV Box */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Upload CV* (PDF / DOCX)</label>
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer">
              <span className="text-2xl block mb-1">📁</span>
              <span className="text-xs font-semibold text-slate-700">Drop your file here or <span className="text-[#2f6fb0] underline">browse to upload</span></span>
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="flex items-start gap-3">
            <input type="checkbox" required className="mt-1 accent-[#2f6fb0]" />
            <p className="text-xs text-slate-600 leading-relaxed">
              By submitting this application, I agree that I have read the <a href="#" className="text-[#2f6fb0] underline">Privacy Policy</a> and confirm that ProHR AI stores my personal details to process my job application.*
            </p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full py-4 rounded-2xl text-white font-bold text-sm shadow-lg transition-all hover:opacity-95"
                  style={{ background: 'linear-gradient(90deg, #0e2a4d, #2f6fb0)' }}>
            Submit application
          </button>

        </form>

      </div>
    </main>
  );
}
