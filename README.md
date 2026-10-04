# Lawlaw Notifications API

Vercel API لإرسال إشعارات FCM لتطبيق لاولاو.

## خطوات النشر على Vercel:

### 1. الحصول على Firebase Service Account Key
1. افتح Firebase Console → Project Settings → Service accounts
2. اضغط "Generate new private key"
3. احفظ ملف JSON المُنزَّل

### 2. النشر على Vercel
```bash
npm install -g vercel
vercel login
vercel --prod
```

### 3. إعداد المتغيرات السرية في Vercel
بعد النشر، اذهب لـ Vercel Dashboard → Settings → Environment Variables وأضف:
- FIREBASE_PROJECT_ID: من ملف JSON (حقل project_id)
- FIREBASE_CLIENT_EMAIL: من ملف JSON (حقل client_email)
- FIREBASE_PRIVATE_KEY: من ملف JSON (حقل private_key) - انسخه كاملاً مع الـ \n

### 4. تحديث رابط API في Flutter
بعد النشر، حدّث _notificationApiUrl في:
d:/lawlaw/lib/services/notification_service.dart