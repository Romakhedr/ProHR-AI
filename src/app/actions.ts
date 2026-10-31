"use server";

import { createClient } from '@supabase/supabase-js';

// استخدام مفاتيح البيئة للاتصال بـ Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

export async function submitApplicationAction(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const file = formData.get("cv") as File;

    if (!email || !phone || !file) {
      return { success: false, message: "يرجى ملء جميع الحقول المطلوبة وإرفاق السيرة الذاتية." };
    }

    // 1. رفع الملف إلى Supabase Storage (Bucket: resumes)
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
    
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('resumes')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error("Supabase Upload Error:", uploadError);
      return { success: false, message: "فشل رفع ملف السيرة الذاتية إلى التخزين. يرجى المحاولة مرة أخرى." };
    }

    // 2. الحصول على الرابط العام (Public URL) للملف
    const { data: urlData } = supabase.storage
      .from('resumes')
      .getPublicUrl(fileName);

    const publicUrl = urlData.publicUrl;

    // 3. التحقق من وجود رابط الـ Webhook في متغيرات البيئة للأمان التام
    const webhookUrl = process.env.MAKEWEBHOOK;

    if (!webhookUrl) {
      console.error("MAKEWEBHOOK environment variable is not defined");
      return { success: false, message: "خطأ في إعدادات الخادم (Webhook URL missing)." };
    }

    const payload = {
      email: email,
      phone: phone,
      cv_url: publicUrl,
      file_name: file.name
    };

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.log("Webhook notice: Background transmission error bypassed.", err);
    }

    return { 
      success: true, 
      message: "Application Submitted Successfully! 🎉" 
    };
    
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, message: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى." };
  }
}
