import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Resources',
  description: "Free tools and technical resources for offshore wind SCADA teams — signal conflict mapper, readiness checklists, and IEC 62443 guides.",
}
const resources = [
  { cat: 'Free Tool', title: 'Signal Conflict Mapper', desc: 'Detect missing signals, type mismatches, direction conflicts and IEC 61850 violations between two SCADA interfaces. No upload, no login, runs in your browser.', type: 'Tool', href: 'https://abdelscadafortis.github.io/signal-mapper/', live: true },
  { cat: 'Technical Note', title: 'SCADA integration in offshore wind', desc: 'A short overview of why SCADA integration should be considered from the early project phases.', type: 'PDF', href: null },
  { cat: 'Insight', title: 'Why interface management matters', desc: 'How unclear interfaces between suppliers can create delays during commissioning.', type: 'Article', href: null },
  { cat: 'Cybersecurity', title: 'IEC 62443 and offshore control systems', desc: 'Key cybersecurity considerations for OT systems in offshore wind environments.', type: 'Guide', href: null },
  { cat: 'Commissioning', title: 'FAT, SAT and SIT explained', desc: 'A simple breakdown of the main testing stages used before handover.', type: 'Explainer', href: null },
  { cat: 'Download', title: 'Company profile', desc: 'A downloadable company profile presenting Scada Fortis, its services, and expertise.', type: 'PDF', href: '/contact' },
]
export default function ResourcesPage() {
  return (
    <main style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <div className="accent-bar" style={{ marginBottom: 16 }}>Resources</div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.1, maxWidth: 560 }}>
            Technical resources for better <span style={{ color: '#00C8C8' }}>SCADA decisions</span>
          </h1>
        </div>

        {/* Featured tool */}
        <div style={{ background: 'rgba(0,30,48,0.7)', border: '1px solid rgba(0,160,160,0.25)', borderRadius: 12, padding: 36, marginBottom: 48 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }} className="two-col">
            <div>
              <div className="accent-bar" style={{ marginBottom: 12 }}>Featured — Free tool</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 12 }}>
                FORTIS CONNECT<br/><span style={{ color: '#00C8C8' }}>Signal Mapper</span>
              </h2>
              <p style={{ fontSize: 14, color: '#7A9BB5', lineHeight: 1.7, marginBottom: 24 }}>
                Paste signal lists from two SCADA interfaces and instantly detect missing signals, type mismatches, direction conflicts, and IEC 61850 logical node violations. Free, no login, no upload.
              </p>
              <a href="https://abdelscadafortis.github.io/signal-mapper/" target="_blank" rel="noreferrer" className="btn-primary">
                Try it free →
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {['Missing signal detection', 'Type mismatch detection', 'IEC 61850 LN validation', 'Per-WTG readiness score'].map(f => (
                <div key={f} style={{ background: 'rgba(0,18,32,0.6)', border: '1px solid rgba(0,160,160,0.12)', borderRadius: 8, padding: '14px 12px' }}>
                  <div style={{ color: '#00C8C8', fontSize: 16, marginBottom: 6 }}>⬡</div>
                  <div style={{ fontSize: 12, color: '#7A9BB5', lineHeight: 1.5 }}>{f}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 56 }} className="res-grid">
          {resources.map(r => (
            <div key={r.title} className="card" style={{ padding: 24, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00A0A0', marginBottom: 12 }}>{r.cat}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: 'white', marginBottom: 10, flex: 1 }}>{r.title}</h3>
              <p style={{ fontSize: 13, color: '#7A9BB5', lineHeight: 1.6, marginBottom: 16 }}>{r.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid rgba(0,160,160,0.08)' }}>
                <span style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", padding: '3px 8px', border: '1px solid rgba(0,160,160,0.15)', borderRadius: 2, color: '#4A6880' }}>{r.type}</span>
                {r.live && r.href ? (
                  <a href={r.href} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: '#00C8C8', textDecoration: 'none', fontFamily: "'IBM Plex Mono', monospace" }}>Try it →</a>
                ) : r.href ? (
                  <Link href={r.href} style={{ fontSize: 12, color: '#00A0A0', textDecoration: 'none', fontFamily: "'IBM Plex Mono', monospace" }}>Request →</Link>
                ) : (
                  <span style={{ fontSize: 11, color: '#2A3A4A', fontStyle: 'italic', fontFamily: "'IBM Plex Mono', monospace" }}>Coming soon</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(0,18,32,0.5)', border: '1px solid rgba(0,160,160,0.12)', borderRadius: 12, padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: 'white', marginBottom: 8 }}>Need a specific document?</h3>
            <p style={{ fontSize: 14, color: '#7A9BB5', maxWidth: 440, lineHeight: 1.6 }}>If your project team needs a specific technical document or company profile, contact us directly.</p>
          </div>
          <Link href="/contact" className="btn-outline" style={{ flexShrink: 0 }}>Request a document</Link>
        </div>
      </div>
      <style>{`@media (max-width: 1024px) { .res-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 640px) { .res-grid, .two-col { grid-template-columns: 1fr !important; } }`}</style>
    </main>
  )
}
