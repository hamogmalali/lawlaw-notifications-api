export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.status(200).json({
    service: 'Lawlaw Notifications API',
    status: 'active',
    endpoints: [
      'POST /api/send-notification'
    ],
    timestamp: new Date().toISOString()
  });
}