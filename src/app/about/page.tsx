import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: "Abdelmounaim Errouchi — 15+ years as SCADA Owner's Engineer on offshore wind HVDC and HVAC projects across Europe.",
}

export default function AboutPage() {
  return (
    <main style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Hero */}
        <div style={{ marginBottom: 64 }}>
          <div className="accent-bar" style={{ marginBottom: 16 }}>About</div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', maxWidth: 640, lineHeight: 1.1 }}>
            Independent SCADA engineering for <span style={{ color: '#00C8C8' }}>offshore wind</span>
          </h1>
        </div>

        {/* Person section */}
        <div style={{ background: 'rgba(0,30,48,0.7)', border: '1px solid rgba(0,160,160,0.2)', borderRadius: 12, padding: 40, marginBottom: 48 }}>
          <div className="accent-bar" style={{ marginBottom: 24 }}>The engineer behind it</div>
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 40, alignItems: 'start' }} className="about-grid">

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Avatar */}
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(0,160,160,0.1)', border: '2px solid rgba(0,160,160,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 28, color: '#00C8C8' }}>AE</span>
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600, color: 'white', marginBottom: 4 }}>Abdelmounaim Errouchi</div>
                <div style={{ fontSize: 13, color: '#00C8C8', marginBottom: 4 }}>Founder — Scada Fortis</div>
                <div style={{ fontSize: 12, color: '#4A6880', fontFamily: "'IBM Plex Mono', monospace" }}>Electromechanical Engineer<br/>ECAM Brussels</div>
              </div>
              <a href="https://www.linkedin.com/in/abdelmounaim-errouchi-b4485a20/" target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#00A0A0', textDecoration: 'none', padding: '7px 14px', border: '1px solid rgba(0,160,160,0.3)', borderRadius: 4, fontFamily: "'IBM Plex Mono', monospace", width: 'fit-content' }}>
                LinkedIn →
              </a>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
                {[['15+', 'Years'], ['10+', 'Projects'], ['10+ GW', 'Capacity'], ['6', 'Clients']].map(([n, l]) => (
                  <div key={l} style={{ background: 'rgba(0,18,32,0.6)', border: '1px solid rgba(0,160,160,0.1)', borderRadius: 6, padding: '10px 12px', textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#00C8C8', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: 10, color: '#4A6880', marginTop: 3, fontFamily: "'IBM Plex Mono', monospace" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                "15+ years of experience exclusively in offshore wind — across SCADA integration, telecom, OT cybersecurity, and commissioning on HVDC and HVAC projects throughout Europe. Currently serving as Site Engineer Representative for Ørsted on Hornsea 3, Europe's largest offshore wind project under construction.",
                "Previous engagements include Vattenfall / RWE Norfolk offshore wind cluster, EDF Renewables Fécamp, ENGIE Fabricom on Veja Mate, Merkur and Baltic Eagle, and 50Hertz offshore HVDC grid connection. Every project has been client-side or owner's engineer — no vendor, no platform, no conflict of interest.",
                "Scada Fortis was founded to bring that same independent perspective to developers who need a technically strong, vendor-neutral voice on their SCADA integration scope — from the first specification through final commissioning handover.",
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 14, color: '#7A9BB5', lineHeight: 1.75, margin: 0 }}>{p}</p>
              ))}

              {/* Certifications */}
              <div style={{ marginTop: 8 }}>
                <div style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A6880', marginBottom: 10 }}>Certifications (current)</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['BOSIET', 'HUET', 'GWO Basic Safety', 'Offshore Medical', 'IEC 62443', 'IEC 61850', 'IEC 61400-25'].map(c => (
                    <span key={c} style={{ fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", padding: '3px 10px', border: '1px solid rgba(0,160,160,0.2)', borderRadius: 2, color: '#00A0A0', letterSpacing: '0.04em' }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 64 }} className="three-col">
          {[
            { n: '01', t: 'Owner-side perspective', d: "Scada Fortis works from the project owner's point of view, with no platform or vendor interest behind the recommendation." },
            { n: '02', t: 'Integration first', d: 'The focus is on the interfaces between systems, suppliers and project phases, where most late-stage SCADA issues appear.' },
            { n: '03', t: 'Field-tested judgement', d: 'The approach is based on real commissioning, site coordination and offshore wind delivery experience — not theory.' },
          ].map(v => (
            <div key={v.n} className="card" style={{ padding: 28 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2rem', fontWeight: 800, color: 'rgba(0,160,160,0.2)', lineHeight: 1, marginBottom: 16 }}>{v.n}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: 'white', marginBottom: 10 }}>{v.t}</h3>
              <p style={{ fontSize: 13, color: '#7A9BB5', lineHeight: 1.65 }}>{v.d}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '48px 32px', background: 'rgba(0,18,32,0.5)', border: '1px solid rgba(0,160,160,0.15)', borderRadius: 12 }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 12 }}>
            Because the integration layer <span style={{ color: '#00C8C8' }}>needs an owner</span>
          </h2>
          <p style={{ fontSize: 14, color: '#7A9BB5', maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.7 }}>
            Offshore wind projects involve multiple contractors, control systems, telecom networks, 
            and commissioning activities. Scada Fortis helps you keep control of the integration scope.
          </p>
          <Link href="/contact" className="btn-primary">Start a conversation →</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid, .two-col, .three-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
