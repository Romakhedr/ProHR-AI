"use client";

import { useState } from "react";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

// ────────────────────────────────────────────────────────────
// Supabase client
// Reads keys from environment variables (.env) instead of being
// hardcoded, matching Next.js best practice.
// Add these to your .env file:
//   NEXT_PUBLIC_SUPABASE_URL=https://fpfnhgduyzlgmliuvmqu.supabase.co
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
// ────────────────────────────────────────────────────────────
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

type MessageState = {
  text: string;
  type: "idle" | "loading" | "success" | "error";
};

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<MessageState>({ text: "", type: "idle" });
  const [loading, setLoading] = useState(false);

  const messageColor = {
    idle: "",
    loading: "text-blue-600",
    success: "text-emerald-600",
    error: "text-red-500",
  }[message.type];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "جاري التحقق...", type: "loading" });

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } },
      });
      if (error) {
        setMessage({ text: error.message, type: "error" });
      } else {
        setMessage({ text: "تم إنشاء الحساب بنجاح! جاري التوجيه...", type: "success" });
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage({ text: error.message, type: "error" });
      } else {
        setMessage({ text: "تم تسجيل الدخول بنجاح! جاري التوجيه...", type: "success" });
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    }
    setLoading(false);
  }

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        background:
          "linear-gradient(120deg, transparent 49.4%, rgba(47,111,176,0.07) 49.7%, rgba(47,111,176,0.07) 50%, transparent 50.3%), linear-gradient(60deg, transparent 49.4%, rgba(47,111,176,0.05) 49.7%, rgba(47,111,176,0.05) 50%, transparent 50.3%), radial-gradient(circle at 85% 8%, rgba(47,111,176,0.14) 0, transparent 40%), radial-gradient(circle at 8% 92%, rgba(47,111,176,0.10) 0, transparent 35%), #eef3f9",
        backgroundSize: "90px 90px, 130px 130px, auto, auto, auto",
        fontFamily: "'Tajawal', sans-serif",
      }}
    >
      {/* Top accent bar */}
      <div
        className="fixed top-0 left-0 right-0 h-2 z-50"
        style={{
          background: "linear-gradient(90deg, #0e2a4d, #2f6fb0 60%, #5b9bd5)",
        }}
      />

      {/* Card */}
      <div
        className="w-full max-w-md overflow-hidden p-6 sm:p-8 bg-white rounded-[28px]"
        style={{
          boxShadow:
            "0 12px 40px rgba(14,42,77,0.12), 0 3px 14px rgba(14,42,77,0.06)",
          border: "1px solid rgba(14,42,77,0.06)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ProHR AI"
              width={56}
              height={56}
              className="object-contain"
              style={{ filter: "drop-shadow(0 4px 8px rgba(14,42,77,0.25))" }}
            />
            <div>
              <h1 className="text-xl font-bold" style={{ color: "#0e2a4d" }}>
                ProHR AI
              </h1>
              <p className="text-xs" style={{ color: "#5a7086" }}>
                منصة الموارد البشرية الذكية
              </p>
            </div>
          </div>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ background: "rgba(47,111,176,0.10)", color: "#2f6fb0" }}
          >
            v1.0
          </span>
        </div>

        {/* Tabs */}
        <div
          className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl mb-6"
          style={{ background: "#eef3f9" }}
        >
          <button
            type="button"
            onClick={() => {
              setIsSignUp(false);
              setMessage({ text: "", type: "idle" });
            }}
            className="py-2.5 text-sm font-bold rounded-xl transition-all"
            style={
              !isSignUp
                ? { background: "#fff", color: "#0e2a4d", boxShadow: "0 2px 8px rgba(14,42,77,0.10)" }
                : { color: "#5a7086" }
            }
          >
            تسجيل الدخول
          </button>
          <button
            type="button"
            onClick={() => {
              setIsSignUp(true);
              setMessage({ text: "", type: "idle" });
            }}
            className="py-2.5 text-sm font-bold rounded-xl transition-all"
            style={
              isSignUp
                ? { background: "#fff", color: "#0e2a4d", boxShadow: "0 2px 8px rgba(14,42,77,0.10)" }
                : { color: "#5a7086" }
            }
          >
            إنشاء حساب
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                الاسم الكامل
              </label>
              <div className="relative">
                <input
                  type="text"
                  required={isSignUp}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="أدخلي اسمك الكامل"
                  className="w-full text-sm rounded-2xl p-3.5 pr-10 bg-[#f7f9fc] border border-[rgba(14,42,77,0.12)] text-[#0e2a4d] focus:outline-none focus:border-[#2f6fb0] focus:bg-white focus:shadow-[0_0_0_3px_rgba(47,111,176,0.12)] transition-all"
                />
                <span className="absolute right-3.5 top-3.5 text-slate-400">👤</span>
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <input
                type="email"
                required
                dir="ltr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full text-sm rounded-2xl p-3.5 pr-10 bg-[#f7f9fc] border border-[rgba(14,42,77,0.12)] text-[#0e2a4d] focus:outline-none focus:border-[#2f6fb0] focus:bg-white focus:shadow-[0_0_0_3px_rgba(47,111,176,0.12)] transition-all"
              />
              <span className="absolute right-3.5 top-3.5 text-slate-400">✉️</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5">
              كلمة المرور
            </label>
            <div className="relative">
              <input
                type="password"
                required
                dir="ltr"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-sm rounded-2xl p-3.5 pr-10 bg-[#f7f9fc] border border-[rgba(14,42,77,0.12)] text-[#0e2a4d] focus:outline-none focus:border-[#2f6fb0] focus:bg-white focus:shadow-[0_0_0_3px_rgba(47,111,176,0.12)] transition-all"
              />
              <span className="absolute right-3.5 top-3.5 text-slate-400">🔒</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full text-white font-bold py-3.5 rounded-2xl text-sm mt-2 active:scale-[0.98] transition-all disabled:opacity-60"
            style={{
              background: "linear-gradient(90deg, #0e2a4d, #2f6fb0)",
              boxShadow: "0 8px 20px rgba(14,42,77,0.28)",
            }}
          >
            {isSignUp ? "إنشاء حساب جديد" : "تسجيل الدخول"}
          </button>
        </form>

        {/* Message */}
        <p className={`mt-4 text-center text-xs font-bold min-h-[20px] ${messageColor}`}>
          {message.text}
        </p>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#5a7086]">
          <span>ProHR AI &copy; 2026</span>
          <a href="#" className="hover:text-[#2f6fb0] transition-colors">
            مركز المساعدة
          </a>
        </div>
      </div>
    </div>
  );
}
