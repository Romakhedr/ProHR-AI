import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProHR AI",
  description: "Decentralized HR & AI Recruitment Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* إضافة سكريبت مكتبة Pi SDK الرسمية لضمان عمل زر تسجيل الدخول داخل Pi Browser */}
        <Script
          src="https://sdk.minepi.com/pi-sdk.js"
          strategy="beforeInteractive"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('DOMContentLoaded', (event) => {
                if (window.Pi) {
                  window.Pi.init({ version: "2.0", sandbox: true });
                }
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
