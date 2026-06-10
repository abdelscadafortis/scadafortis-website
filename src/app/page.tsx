import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Scada Fortis — Independent Owner's Engineer for Offshore Wind",
  description: "Vendor-neutral SCADA, telecom and OT cybersecurity Owner's Engineer. 15+ years across HVDC and HVAC offshore wind projects in Europe.",
}

const services = [
  { title: "Owner's Engineer", desc: "Independent technical oversight of your SCADA and telecom scope — protecting developer interests from FEED through commissioning handover. No vendor, no platform." },
  { title: "SCADA Engineering", desc: "Architecture review, signal register ownership, interface matrix management, and vendor-neutral specification authoring for offshore wind control systems." },
  { title: "Commissioning", desc: "FAT, SAT and SIT coordination, ITP witness, punch list governance, and commissioning documentation across all SCADA and telecom systems." },
  { title: "Interface Management", desc: "Structured management of technical interfaces between SCADA, protection, telecom, and third-party systems — catching conflicts before they become delays." },
  { title: "OT Cybersecurity", desc: "IEC 62443 zone and conduit design, OT network segmentation, NIS2 compliance review, and cybersecurity scope ownership for offshore OT environments." },
  { title: "Telecom & Networks", desc: "Offshore fibre, MPLS, PAGA, private LTE and VSAT satellite backup design and commissioning. OT network architecture and vendor coordination." },
]

const stats = [
  { n: '15+', l: 'Years offshore wind' },
  { n: '10+', l: 'Major projects' },
  { n: '10+ GW', l: 'Capacity delivered' },
  { n: '6', l: 'Developer clients' },
]

export default function HomePage() {
  return (
    <main>

      {/* ── HERO ── */}
      <section style={{ minHeight: '88vh', display: 'flex', alignItems: 'center', padding: '80px 24px 60px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="hero-grid">

            <div>
              <div className="accent-bar" style={{ marginBottom: 20 }}>Independent Owner&apos;s Engineer — Offshore Wind</div>

              <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase', marginBottom: 20 }}>
                Nobody owns your<br/>
                <span style={{ color: '#00C8C8' }}>SCADA integration</span><br/>
                layer. We do.
              </h1>

              <p style={{ fontSize: 16, color: '#7A9BB5', lineHeight: 1.75, maxWidth: 460, marginBottom: 32, fontWeight: 300 }}>
                From day one of design to final commissioning handover. 
                No vendor to protect. No platform to sell. 
                Just independent technical oversight of your SCADA scope.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Request a consultation</Link>
                <Link href="/projects" className="btn-outline">View projects</Link>
              </div>

              {/* Certifications strip */}
              <div style={{ marginTop: 40, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['IEC 61850', 'IEC 62443', 'IEC 61400-25', 'HVDC', 'NIS2'].map(tag => (
                  <span key={tag} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, padding: '3px 10px', border: '1px solid rgba(0,160,160,0.2)', borderRadius: 2, color: '#4A6880', letterSpacing: '0.08em' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div style={{ background: 'rgba(0,30,48,0.7)', border: '1px solid rgba(0,160,160,0.2)', borderRadius: 12, padding: 32 }}>
              {/* Current project badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, padding: '8px 14px', background: 'rgba(0,160,160,0.08)', border: '1px solid rgba(0,160,160,0.2)', borderRadius: 4 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#00C8C8', boxShadow: '0 0 8px #00C8C8', flexShrink: 0, animation: 'pulse 2s infinite' }} />
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#00C8C8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Currently active — Hornsea 3 HVDC</span>
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                {stats.map(s => (
                  <div key={s.n} style={{ background: 'rgba(0,18,32,0.6)', border: '1px solid rgba(0,160,160,0.12)', borderRadius: 8, padding: '16px 14px' }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.8rem', fontWeight: 800, color: '#00C8C8', lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: 11, color: '#4A6880', marginTop: 4, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.04em' }}>{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Projects preview */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { c: 'Ørsted', p: 'Hornsea 3 HVDC', s: 'Active' },
                  { c: 'Vattenfall / RWE', p: 'Norfolk Boreas & Vanguard', s: 'Completed' },
                  { c: 'ENGIE Fabricom', p: 'Veja Mate · Merkur · Baltic Eagle', s: 'Completed' },
                ].map(r => (
                  <div key={r.p} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid rgba(0,160,160,0.06)' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: r.s === 'Active' ? '#00C8C8' : '#4A6880', flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12, fontWeight: 500, color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.p}</div>
                      <div style={{ fontSize: 11, color: '#4A6880', fontFamily: "'IBM Plex Mono', monospace" }}>{r.c}</div>
                    </div>
                    <span style={{ fontSize: 10, color: r.s === 'Active' ? '#00C8C8' : '#4A6880', fontFamily: "'IBM Plex Mono', monospace', flexShrink: 0" }}>{r.s}</span>
                  </div>
                ))}
                <Link href="/projects" style={{ fontSize: 12, color: '#00A0A0', textDecoration: 'none', marginTop: 8, fontFamily: "'IBM Plex Mono', monospace" }}>
                  View all projects →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CHALLENGE / SOLUTION ── */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="accent-bar" style={{ marginBottom: 12 }}>The problem we solve</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              Offshore SCADA gaps are <span style={{ color: '#00C8C8' }}>invisible</span><br/>until delivery is at risk
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="two-col">
            <div style={{ background: 'rgba(0,30,48,0.6)', border: '1px solid rgba(192,57,43,0.2)', borderRadius: 12, padding: 32 }}>
              <div style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E07B00', marginBottom: 16 }}>The challenge</div>
              {[
                'No single owner of the integration layer',
                'Interface failures discovered too late',
                'Vendor interests misaligned with yours',
                'Commissioning pressure creates reactive decisions',
                'Signal list conflicts found during SAT, not FEED',
              ].map(i => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                  <span style={{ color: '#C0392B', flexShrink: 0, marginTop: 2 }}>✕</span>
                  <span style={{ fontSize: 14, color: '#7A9BB5', lineHeight: 1.5 }}>{i}</span>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(0,30,48,0.6)', border: '1px solid rgba(0,160,160,0.2)', borderRadius: 12, padding: 32 }}>
              <div style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.14em', textTransform: 'uppercase', color: '#00C8C8', marginBottom: 16 }}>Our solution</div>
              {[
                'One independent voice owning the integration layer',
                'Interface management from FEED through commissioning',
                'No vendor, no platform — your interests only',
                'IEC 61850, IEC 62443, and IEC 61400-25 expertise',
                'Vendor-neutral signal register and conflict detection',
              ].map(i => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                  <span style={{ color: '#00843D', flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontSize: 14, color: '#7A9BB5', lineHeight: 1.5 }}>{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── SERVICES ── */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <div className="accent-bar" style={{ marginBottom: 12 }}>What we do</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', maxWidth: 480 }}>
              Where Scada Fortis <span style={{ color: '#00C8C8' }}>creates value</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="services-grid">
            {services.map((s, i) => (
              <div key={s.title} className="card" style={{ padding: 24 }}>
                <div style={{ width: 32, height: 32, background: 'rgba(0,160,160,0.1)', border: '1px solid rgba(0,160,160,0.2)', borderRadius: 6, marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#00A0A0', fontSize: 14, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>{String(i+1).padStart(2,'0')}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: 'white', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: '#7A9BB5', lineHeight: 1.65 }}>{s.desc}</p>
                <Link href="/services" style={{ display: 'inline-block', marginTop: 16, fontSize: 12, color: '#00A0A0', textDecoration: 'none', fontFamily: "'IBM Plex Mono', monospace" }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── FORTIS CONNECT TOOL ── */}
      <section style={{ padding: '80px 24px', background: 'rgba(0,18,32,0.5)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="two-col">
            <div>
              <div className="accent-bar" style={{ marginBottom: 12 }}>Free tool</div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 16 }}>
                FORTIS CONNECT<br/><span style={{ color: '#00C8C8' }}>Signal Mapper</span>
              </h2>
              <p style={{ fontSize: 14, color: '#7A9BB5', lineHeight: 1.7, marginBottom: 24 }}>
                Free browser tool to detect signal conflicts between two SCADA interfaces — 
                missing signals, type mismatches, direction conflicts, and IEC 61850 logical node violations. 
                No upload, no login, runs entirely in your browser.
              </p>
              <a href="https://abdelscadafortis.github.io/signal-mapper/" target="_blank" rel="noreferrer" className="btn-primary">
                Try the free tool →
              </a>
            </div>
            <div style={{ background: 'rgba(0,30,48,0.7)', border: '1px solid rgba(0,160,160,0.2)', borderRadius: 12, padding: 28 }}>
              {[
                ['Missing signal detection', 'Signals present in one interface but absent in the other'],
                ['Type mismatch detection', 'Boolean declared Analog — or vice versa'],
                ['Direction conflict detection', 'Both sides declaring OUT with no consumer'],
                ['IEC 61850 LN validation', 'DA compatibility check against 61850-7-4 standard'],
                ['Per-WTG aggregation', 'Interface readiness score per turbine'],
              ].map(([t, d]) => (
                <div key={t} style={{ display: 'flex', gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid rgba(0,160,160,0.06)' }}>
                  <span style={{ color: '#00C8C8', flexShrink: 0, fontSize: 14, marginTop: 1 }}>⬡</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'white', marginBottom: 3 }}>{t}</div>
                    <div style={{ fontSize: 12, color: '#4A6880' }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CTA ── */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div className="accent-bar" style={{ marginBottom: 16, display: 'inline-block' }}>Start the conversation</div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 16 }}>
            Bring independent SCADA oversight<br/>into your <span style={{ color: '#00C8C8' }}>offshore wind project</span>
          </h2>
          <p style={{ fontSize: 15, color: '#7A9BB5', lineHeight: 1.7, marginBottom: 32 }}>
            SCADA and telecom problems found in FEED cost a fraction of what they cost during commissioning. 
            Bring us in early — before the interfaces are locked and the pressure is on.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Request a consultation</Link>
            <Link href="/projects" className="btn-outline">View our projects</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid, .two-col, .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </main>
  )
}
