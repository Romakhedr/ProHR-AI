import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F6F8] text-[#16263D] font-sans selection:bg-[#0F6B5C] selection:text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 bg-white border-b border-[#DCE2EA] sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0F6B5C] to-[#0B1F3A] relative flex items-center justify-center">
            <div className="absolute inset-2 border border-[#E4C98A] rounded-md" />
          </div>
          <span className="font-extrabold text-xl text-[#0B1F3A] tracking-tight">ProHR AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5B6B7F]">
          <a href="#features" className="hover:text-[#0B1F3A] transition-colors">المميزات</a>
          <a href="#about" className="hover:text-[#0B1F3A] transition-colors">عن المنصة</a>
          <a href="#stats" className="hover:text-[#0B1F3A] transition-colors">الإحصائيات</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="px-5 py-2.5 rounded-lg border border-[#DCE2EA] text-[#0B1F3A] font-semibold text-sm hover:border-[#0B1F3A] transition-all"
          >
            تسجيل الدخول
          </Link>
          <Link
            href="/dashboard"
            className="px-5 py-2.5 rounded-lg bg-[#0B1F3A] text-white font-semibold text-sm hover:bg-[#16263D] shadow-md hover:shadow-lg transition-all"
          >
            لوحة التحكم
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6 lg:px-12 bg-gradient-to-b from-[#F5F6F8] via-white to-[#F5F6F8] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7F1EE] border border-[#CFE4DD] text-[#0B5347] text-xs font-mono mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0F6B5C] animate-pulse" />
            الجيل القادم من التوظيف اللامركزي والموارد البشرية الذكية
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0B1F3A] leading-tight mb-6">
            منصة التوظيف اللامركزي والموارد البشرية المدعومة بالذكاء الاصطناعي
          </h1>
          
          <p className="text-lg sm:text-xl text-[#5B6B7F] max-w-2xl mx-auto mb-10 leading-relaxed">
            ربط المواهب بالشركات مباشرة، والتحقق من السجلات والمهارات عبر تقنية البلوكشين لضمان الموثوقية والأمان الكامل.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/screen"
              className="px-8 py-4 rounded-xl bg-[#0B1F3A] text-white font-bold text-base hover:bg-[#16263D] shadow-xl hover:-translate-y-0.5 transition-all"
            >
              استكشف المواهب الواعدة ←
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 rounded-xl border border-[#DCE2EA] bg-white text-[#0B1F3A] font-bold text-base hover:border-[#0B1F3A] transition-all"
            >
              تسجيل حساب جديد
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#0B1F3A] mb-4">مميزات المنصة</h2>
          <p className="text-[#5B6B7F] max-w-xl mx-auto">كل ما تحتاجه للوصول إلى أصحاب العمل المناسبين بأعلى معايير الأمان الرقمي.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-[#DCE2EA] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#E7F1EE] text-[#0F6B5C] flex items-center justify-center font-bold text-xl mb-6">🔒</div>
            <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">التوظيف اللامركزي والعقود الذكية</h3>
            <p className="text-[#5B6B7F] text-sm leading-relaxed">منصة متقدمة تربط المواهب بالشركات مباشرة مع التحقق من السجلات عبر البلوكشين.</p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#DCE2EA] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#E7F1EE] text-[#0F6B5C] flex items-center justify-center font-bold text-xl mb-6">🤖</div>
            <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">فحص السير الذاتية بالذكاء الاصطناعي</h3>
            <p className="text-[#5B6B7F] text-sm leading-relaxed">مواءمة ذكية للمرشحين وتحليل المهارات وأدوات إدارة موارد بشرية متطورة.</p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#DCE2EA] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#E7F1EE] text-[#0F6B5C] flex items-center justify-center font-bold text-xl mb-6">✨</div>
            <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">تكامل شبكة باي (Pi Network)</h3>
            <p className="text-[#5B6B7F] text-sm leading-relaxed">مدفوعات آمنة وسلسة عبر محفظة Pi ودعم كامل للمعاملات الرقمية.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-[#DCE2EA] text-center text-sm text-[#5B6B7F]">
        <p>جميع الحقوق محفوظة © 2026 منصة ProHR AI</p>
      </footer>
    </div>
  );
}
