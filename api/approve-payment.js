export default async function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ 
      status: 'success', 
      message: 'Payment approved' 
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
