import Link from "next/link";

export default function Home() {
  return (
    <main 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundColor: '#eef3f9',
        backgroundImage: `
          radial-gradient(circle at 85% 8%, rgba(47,111,176,0.14) 0, transparent 40%),
          radial-gradient(circle at 8% 92%, rgba(47,111,176,0.10) 0, transparent 35%),
          linear-gradient(120deg, transparent 49.4%, rgba(47,111,176,0.07) 49.7%, rgba(47,111,176,0.07) 50%, transparent 50.3%),
          linear-gradient(60deg, transparent 49.4%, rgba(47,111,176,0.05) 49.7%, rgba(47,111,176,0.05) 50%, transparent 50.3%)
        `,
        backgroundSize: 'auto, auto, 90px 90px, 130px 130px',
        fontFamily: "'Tajawal', sans-serif"
      }}
    >

      {/* الشريط العلوي الملون (Topbar) مطابق لصفحة Login */}
      <div 
        className="fixed top-0 right-0 left-0 h-2 z-50"
        style={{ background: 'linear-gradient(90deg, #0e2a4d, #2f6fb0 60%, #5b9bd5)' }}
      />

      {/* الكارت الرئيسي (Card) بنفس التنسيق والظلال تماماً */}
      <div 
        className="w-full max-w-xl overflow-hidden p-6 sm:p-10 transition-all bg-white relative z-10"
        style={{
          borderRadius: '28px',
          boxShadow: '0 12px 40px rgba(14,42,77,0.12), 0 3px 14px rgba(14,42,77,0.06)',
          border: '1px solid rgba(14,42,77,0.06)'
        }}
      >

        {/* الهيدر والشعار (Header) */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-md"
              style={{ background: 'linear-gradient(135deg, #0e2a4d, #2f6fb0)' }}
            >
              P
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: '#0e2a4d' }}>ProHR AI</h1>
              <p className="text-xs" style={{ color: '#5a7086' }}>منصة الموارد البشرية والتوظيف الذكي</p>
            </div>
          </div>
          <span 
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(47,111,176,0.10)', color: '#2f6fb0' }}
          >
            v1.0
          </span>
        </div>

        {/* المحتوى الرئيسي للترحيب */}
        <div className="text-center py-4">
          <span 
            className="inline-block text-xs font-bold px-3.5 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(47,111,176,0.10)', color: '#2f6fb0' }}
          >
            ✨ النظام المتكامل للتوظيف اللامركزي
          </span>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: '#0e2a4d' }}>
            مرحباً بك في مستقبل الموارد البشرية
          </h2>
          
          <p className="text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: '#5a7086' }}>
            منصة ذكية لإدارة شؤون الموظفين، فحص السير الذاتية بالذكاء الاصطناعي، وتوثيق العمليات بأعلى معايير الموثوقية.
          </p>

          {/* أزرار التوجيه (Buttons مطابقة لتصميم login) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/login"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl text-white font-bold text-sm text-center shadow-lg transition-all"
              style={{
                background: 'linear-gradient(90deg, #0e2a4d, #2f6fb0)',
                boxShadow: '0 8px 20px rgba(14,42,77,0.28)'
              }}
            >
              تسجيل الدخول / إنشاء حساب
            </Link>

            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-sm text-center transition-all"
              style={{
                backgroundColor: '#f7f9fc',
                border: '1px solid rgba(14,42,77,0.12)',
                color: '#0e2a4d'
              }}
            >
              استعراض لوحة التحكم
            </Link>
          </div>
        </div>

        {/* تذييل الكارت (Footer) */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs" style={{ color: '#5a7086' }}>
          <span>ProHR AI &copy; 2026</span>
          <a href="#" className="transition-colors hover:text-[#2f6fb0]">مركز المساعدة</a>
        </div>

      </div>

    </main>
  );
}
