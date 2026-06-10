import Link from 'next/link'
export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center' }}>
      <div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '6rem', fontWeight: 800, color: 'rgba(0,160,160,0.15)', lineHeight: 1 }}>404</div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 12 }}>Page not found</h1>
        <p style={{ fontSize: 14, color: '#7A9BB5', marginBottom: 28 }}>The page you are looking for does not exist.</p>
        <Link href="/" className="btn-primary">Back to home</Link>
      </div>
    </main>
  )
}
