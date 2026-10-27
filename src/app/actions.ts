// src/app/actions.ts
"use server";

export async function submitApplicationAction(formData: FormData) {
  try {
    const webhookUrl = "https://hook.eu1.make.com/5t0onas7n3z9dp92rjvlvhu4r8jgvz7g";

    // التحقق من وجود أي ملف أو بيانات مرسلة بغض النظر عن اسم الحقل
    let hasFile = false;
    for (const [key, value] of formData.entries()) {
      if (value instanceof File && value.size > 0) {
        hasFile = true;
        break;
      }
    }

    if (!hasFile) {
      return { success: false, message: "الرجاء رفع السيرة الذاتية" };
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      return { success: false, message: "فشل الإرسال إلى السيرفر. يرجى المحاولة مرة أخرى." };
    }

    return { 
      success: true, 
      message: "Application Submitted Successfully! 🎉" 
    };
    
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, message: "حدث خطأ غير متوقع أثناء الإرسال." };
  }
}
