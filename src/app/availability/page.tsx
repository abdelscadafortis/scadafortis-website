import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Availability',
  description: "Current engagement status and upcoming availability for Owner's Engineer and SCADA/telecom advisory missions.",
}

export default function AvailabilityPage() {
  return (
    <main style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div className="accent-bar" style={{ margin: '0 auto 16px' }}>Availability</div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.1, marginBottom: 24 }}>
          Currently <span style={{ color: '#00C8C8' }}>engaged</span>
        </h1>

        <div className="card" style={{ padding: 40, textAlign: 'left', marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00C8C8', display: 'inline-block' }} />
            <span style={{ fontSize: 12, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00C8C8' }}>Active engagement</span>
          </div>
          <p style={{ fontSize: 15, color: '#7A9BB5', lineHeight: 1.8, margin: 0 }}>
            Scada Fortis is currently engaged on a long-term Owner&apos;s Engineer mission on a major European offshore HVDC converter station project. The next availability window is expected to open in Q3 2026.
          </p>
        </div>

        <div className="card" style={{ padding: 40, textAlign: 'left', marginBottom: 40 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, color: 'white', marginBottom: 12 }}>Planning ahead?</h3>
          <p style={{ fontSize: 14, color: '#7A9BB5', lineHeight: 1.75, margin: 0 }}>
            For missions starting further out, or for advisory and Owner&apos;s Engineer engagements that can run alongside a current commitment (specification review, interface governance, SAT/commissioning support on a defined scope), get in touch to discuss timing and fit.
          </p>
        </div>

        <Link href="/contact" className="btn-primary">Discuss a future mission →</Link>
      </div>
    </main>
  )
}
