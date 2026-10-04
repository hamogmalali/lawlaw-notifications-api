export default function Home() {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1>🔔 Lawlaw Notifications API</h1>
      <p>API for sending FCM notifications to Lawlaw chat app</p>
      <p>Status: <span style={{ color: 'green' }}>✅ Active</span></p>
      <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
        <p>Endpoints:</p>
        <ul style={{ listStyle: 'none' }}>
          <li>POST /api/send-notification</li>
        </ul>
      </div>
    </div>
  )
}