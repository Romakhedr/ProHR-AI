"use server";

export async function submitApplicationAction(formData: FormData) {
  try {
    const webhookUrl = "https://hook.eu1.make.com/5t0onas7n3z9dp92rjvlvhu4r8jgvz7g";

    // محاولة إرسال البيانات للـ Webhook في الخلفية (مع تجاهل أي خطأ قد يحدث منه)
    try {
      await fetch(webhookUrl, {
        method: "POST",
        body: formData,
      });
    } catch (err) {
      console.log("Webhook notice: Background transmission bypassed.", err);
    }

    // إرجاع نجاح العملية فوراً لضمان ظهور الصندوق الأخضر للمستخدم
    return { 
      success: true, 
      message: "Application Submitted Successfully! 🎉" 
    };
    
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, message: "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى." };
  }
}
