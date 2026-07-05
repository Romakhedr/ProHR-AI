export default async function handler(req, res) {
  // السماح بطلبات POST فقط
  if (req.method === 'POST') {
    console.log("تم استلام الطلب بنجاح، جاري الموافقة...");
    
    // إرسال رد سريع جداً للمتصفح
    return res.status(200).json({ 
      status: 'approved', 
      message: 'Payment approved' 
    });
  }
  
  return res.status(405).json({ message: 'Method not allowed' });
}
