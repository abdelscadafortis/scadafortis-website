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
        <div className="accent-bar" style={{ marginBottom: 16 }}>About</div>
        <h1 className="page-title">
          Independent SCADA engineering for <span style={{ color: '#00C8C8' }}>offshore wind</span>
        </h1>

        <div className="about-profile">
          <div className="profile-left">
            <img src="/abdel-headshot.jpg" alt="Abdelmounaim Errouchi" className="profile-photo" />
            <div>
              <div className="profile-name">Abdelmounaim Errouchi</div>
              <div className="profile-role">Founder — Scada Fortis</div>
              <div className="profile-edu">Electromechanical Engineer · ECAM Brussels</div>
            </div>
            <a href="https://www.linkedin.com/in/abdelmounaim-errouchi-b4485a20/" target="_blank" rel="noreferrer" className="profile-linkedin">
              LinkedIn →
            </a>
            <div className="profile-stats">
              {[['15+', 'Years'], ['10+', 'Projects'], ['10+ GW', 'Capacity'], ['6', 'Clients']].map(([n, l]) => (
                <div key={l} className="profile-stat">
                  <div className="profile-stat-num">{n}</div>
                  <div className="profile-stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-right">
            <p className="profile-text">15+ years of experience exclusively in offshore wind — across SCADA integration, telecom, OT cybersecurity, and commissioning on HVDC and HVAC projects throughout Europe. Currently serving as Site Engineer Representative for Ørsted on Hornsea 3, Europe&apos;s largest offshore wind project under construction.</p>
            <p className="profile-text">Previous engagements include Vattenfall / RWE Norfolk offshore wind cluster, EDF Renewables Fécamp, ENGIE Fabricom on Veja Mate, Merkur and Baltic Eagle, and 50Hertz offshore HVDC grid connection. Every project has been client-side or owner&apos;s engineer — no vendor, no platform, no conflict of interest.</p>
            <p className="profile-text">Scada Fortis was founded to bring that same independent perspective to developers who need a technically strong, vendor-neutral voice on their SCADA integration scope — from the first specification through final commissioning handover.</p>
            <div className="profile-certs">
              <div className="cert-label">Certifications (current)</div>
              <div className="cert-tags">
                {['BOSIET', 'HUET', 'GWO Basic Safety', 'Offshore Medical', 'IEC 62443', 'IEC 61850', 'IEC 61400-25'].map(c => (
                  <span key={c} className="cert-tag">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="values-grid">
          {[
            { n: '01', t: 'Owner-side perspective', d: "Scada Fortis works from the project owner's point of view, with no platform or vendor interest behind the recommendation." },
            { n: '02', t: 'Integration first', d: 'The focus is on the interfaces between systems, suppliers and project phases, where most late-stage SCADA issues appear.' },
            { n: '03', t: 'Field-tested judgement', d: 'The approach is based on real commissioning, site coordination and offshore wind delivery experience — not theory.' },
          ].map(v => (
            <div key={v.n} className="card" style={{ padding: 28 }}>
              <div className="value-num">{v.n}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: 'white', marginBottom: 10 }}>{v.t}</h3>
              <p style={{ fontSize: 13, color: '#7A9BB5', lineHeight: 1.65, margin: 0 }}>{v.d}</p>
            </div>
          ))}
        </div>

        <div className="about-cta">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 12 }}>
            Because the integration layer <span style={{ color: '#00C8C8' }}>needs an owner</span>
          </h2>
          <p style={{ fontSize: 14, color: '#7A9BB5', maxWidth: 480, margin: '0 auto 24px', lineHeight: 1.7 }}>
            Offshore wind projects involve multiple contractors, control systems, telecom networks, and commissioning activities. Scada Fortis helps you keep control of the integration scope.
          </p>
          <Link href="/contact" className="btn-primary">Start a conversation →</Link>
        </div>
      </div>

      <style>{`
        .page-title { font-family: 'Barlow Condensed', sans-serif; font-size: clamp(2rem, 5vw, 3.4rem); font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em; max-width: 640px; line-height: 1.1; margin: 0 0 48px; }
        .about-profile { background: rgba(0,30,48,0.7); border: 1px solid rgba(0,160,160,0.2); border-radius: 12px; padding: 40px; margin-bottom: 48px; display: grid; grid-template-columns: 280px 1fr; gap: 40px; align-items: start; }
        .profile-left { display: flex; flex-direction: column; gap: 14px; }
        .profile-photo { width: 96px; height: 96px; border-radius: 50%; object-fit: cover; border: 2px solid rgba(0,160,160,0.35); box-shadow: 0 0 0 4px rgba(0,160,160,0.08); }
        .profile-name { font-size: 18px; font-weight: 600; color: white; margin-bottom: 3px; }
        .profile-role { font-size: 13px; color: #00C8C8; margin-bottom: 3px; }
        .profile-edu { font-size: 12px; color: #4A6880; font-family: 'IBM Plex Mono', monospace; }
        .profile-linkedin { display: inline-flex; align-items: center; font-size: 12px; color: #00A0A0; text-decoration: none; padding: 7px 14px; border: 1px solid rgba(0,160,160,0.3); border-radius: 4px; font-family: 'IBM Plex Mono', monospace; width: fit-content; }
        .profile-linkedin:hover { color: #00C8C8; border-color: rgba(0,160,160,0.5); }
        .profile-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .profile-stat { background: rgba(0,18,32,0.6); border: 1px solid rgba(0,160,160,0.1); border-radius: 6px; padding: 10px 12px; text-align: center; }
        .profile-stat-num { font-family: 'Barlow Condensed', sans-serif; font-size: 1.3rem; font-weight: 800; color: #00C8C8; line-height: 1; }
        .profile-stat-label { font-size: 10px; color: #4A6880; margin-top: 3px; font-family: 'IBM Plex Mono', monospace; }
        .profile-right { display: flex; flex-direction: column; gap: 14px; }
        .profile-text { font-size: 14px; color: #7A9BB5; line-height: 1.75; margin: 0; }
        .profile-certs { margin-top: 8px; }
        .cert-label { font-size: 10px; font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.12em; text-transform: uppercase; color: #4A6880; margin-bottom: 10px; }
        .cert-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .cert-tag { font-size: 11px; font-family: 'IBM Plex Mono', monospace; padding: 3px 10px; border: 1px solid rgba(0,160,160,0.2); border-radius: 2px; color: #00A0A0; }
        .values-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 48px; }
        .value-num { font-family: 'Barlow Condensed', sans-serif; font-size: 2rem; font-weight: 800; color: rgba(0,160,160,0.15); line-height: 1; margin-bottom: 14px; }
        .about-cta { text-align: center; padding: 48px 32px; background: rgba(0,18,32,0.5); border: 1px solid rgba(0,160,160,0.15); border-radius: 12px; }
        @media (max-width: 768px) { .about-profile { grid-template-columns: 1fr !important; } .values-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  )
}
