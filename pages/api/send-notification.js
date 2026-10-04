import admin from 'firebase-admin';

// تهيئة Firebase Admin SDK (مرة واحدة فقط)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // استبدال \\n بـ \n في المفتاح الخاص
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\\\n/g, '\\n'),
    }),
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token, title, body, data } = req.body;

  if (!token || !title || !body) {
    return res.status(400).json({ error: 'Missing required fields: token, title, body' });
  }

  try {
    const message = {
      token,
      notification: { title, body },
      data: data || {},
      android: {
        notification: {
          channelId: 'lawlaw_channel',
          priority: 'high',
          sound: 'default',
        },
        priority: 'high',
      },
    };

    const response = await admin.messaging().send(message);
    console.log('FCM sent successfully:', response);
    return res.status(200).json({ success: true, messageId: response });
  } catch (error) {
    console.error('FCM error:', error);
    return res.status(500).json({ error: error.message });
  }
}