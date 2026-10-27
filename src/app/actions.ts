// src/app/actions.ts
"use server";

export async function submitApplicationAction(formData: FormData) {
  try {
    const webhookUrl = "https://hook.eu1.make.com/5t0onas7n3z9dp92rjvlvhu4r8jgvz7g"; // ضعي رابط الـ Webhook الخاص بك هنا

    const response = await fetch(webhookUrl, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      return { success: false, message: "فشل الإرسال إلى السيرفر" };
    }

    return { success: true };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, message: "حدث خطأ غير متوقع أثناء الإرسال" };
  }
}
