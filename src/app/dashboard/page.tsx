import Link from "next/link";

export default function DashboardPage() {
  return (
    <main 
      className="min-h-screen p-4 sm:p-8 relative overflow-hidden bg-white text-slate-800"
      style={{
        fontFamily: "'Inter', sans-serif"
      }}
    >
      {/* Top Bar Accent - Royal Blue Gradient */}
      <div 
        className="fixed top-0 right-0 left-0 h-2 z-50"
        style={{ background: 'linear-gradient(90deg, #1d4ed8, #2563eb 60%, #60a5fa)' }}
      />

      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-blue-100">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-blue-900 font-extrabold text-xl shadow-inner bg-blue-50 border border-blue-200">
              📊
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-950">HR Management Dashboard</h1>
              <p className="text-xs text-blue-600 font-medium">ProHR AI Operations Center</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="px-4 py-2 rounded-xl text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all">
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Total Candidates</p>
            <h3 className="text-3xl font-extrabold text-blue-950">1,284</h3>
            <span className="text-xs text-emerald-600 font-semibold mt-2 inline-block">↑ +12% this month</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">AI Screened CVs</p>
            <h3 className="text-3xl font-extrabold text-blue-950">942</h3>
            <span className="text-xs text-blue-600 font-semibold mt-2 inline-block">✨ 98% accuracy rate</span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm hover:shadow-md transition-all">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Active Job Openings</p>
            <h3 className="text-3xl font-extrabold text-blue-950">14</h3>
            <span className="text-xs text-amber-600 font-semibold mt-2 inline-block">⚡ 3 urgent roles</span>
          </div>
        </div>

        {/* Quick Action Navigation */}
        <div className="bg-gradient-to-r from-blue-50/80 to-blue-50/30 p-6 rounded-2xl border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h3 className="font-bold text-blue-950 text-base mb-1">Need to upload or screen a new candidate CV?</h3>
            <p className="text-xs text-slate-600">Use our AI-powered resume scanner and task router to process applications instantly.</p>
          </div>
          <Link href="/screen" className="px-6 py-3 rounded-xl text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-center cursor-pointer">
            Go to AI Resume Upload →
          </Link>
        </div>

      </div>
    </main>
  );
}
