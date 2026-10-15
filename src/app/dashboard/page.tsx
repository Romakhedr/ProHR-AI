import Link from "next/link";

export default function DashboardPage() {
  return (
    <main 
      className="min-h-screen p-4 sm:p-8 relative overflow-hidden text-slate-800"
      style={{
        backgroundColor: '#0b223f',
        backgroundImage: `
          radial-gradient(circle at 85% 8%, rgba(47,111,176,0.2) 0, transparent 40%),
          radial-gradient(circle at 8% 92%, rgba(47,111,176,0.15) 0, transparent 35%)
        `,
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-md"
                 style={{ background: 'linear-gradient(135deg, #0e2a4d, #2f6fb0)' }}>
              📊
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#0e2a4d]">HR Management Dashboard</h1>
              <p className="text-xs text-slate-500">ProHR AI Operations Center</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="px-4 py-2 rounded-xl text-xs font-bold text-[#2f6fb0] bg-blue-50 hover:bg-blue-100 border border-blue-100 transition-all">
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Total Candidates</p>
            <h3 className="text-3xl font-extrabold text-[#0e2a4d]">1,284</h3>
            <span className="text-xs text-emerald-600 font-semibold mt-2 inline-block">↑ +12% this month</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">AI Screened CVs</p>
            <h3 className="text-3xl font-extrabold text-[#0e2a4d]">942</h3>
            <span className="text-xs text-blue-600 font-semibold mt-2 inline-block">✨ 98% accuracy rate</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Active Job Openings</p>
            <h3 className="text-3xl font-extrabold text-[#0e2a4d]">14</h3>
            <span className="text-xs text-amber-600 font-semibold mt-2 inline-block">⚡ 3 urgent roles</span>
          </div>
        </div>

        {/* Quick Action Navigation */}
        <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-2xl border border-blue-100/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-[#0e2a4d] text-base mb-1">Need to upload or screen a new candidate CV?</h3>
            <p className="text-xs text-slate-600">Use our AI-powered resume scanner and task router to process applications instantly.</p>
          </div>
          <Link href="/screen" className="px-6 py-3 rounded-xl text-white font-bold text-xs shadow-md transition-all whitespace-nowrap"
                style={{ background: 'linear-gradient(90deg, #0e2a4d, #2f6fb0)' }}>
            Go to AI Resume Upload →
          </Link>
        </div>

      </div>
    </main>
  );
}
