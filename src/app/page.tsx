import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Scada Fortis — Independent Owner's Engineer for Offshore Wind",
  description: "Vendor-neutral SCADA, telecom and OT cybersecurity Owner's Engineer. 15+ years across HVDC and HVAC offshore wind projects in Europe.",
}

const services = [
  { title: "Owner's Engineer", desc: "Independent technical oversight of your SCADA and telecom scope — protecting developer interests from FEED through commissioning handover." },
  { title: "SCADA Engineering", desc: "Architecture review, signal register ownership, interface matrix management, and vendor-neutral specification authoring." },
  { title: "Commissioning", desc: "FAT, SAT and SIT coordination, ITP witness, punch list governance, and commissioning documentation across all SCADA and telecom systems." },
  { title: "Interface Management", desc: "Structured management of technical interfaces between SCADA, protection, telecom, and third-party systems — catching conflicts before they become delays." },
  { title: "OT Cybersecurity", desc: "IEC 62443 zone and conduit design, OT network segmentation, NIS2 compliance review, and cybersecurity scope ownership for offshore OT environments." },
  { title: "Telecom & Networks", desc: "Offshore fibre, MPLS, PAGA, private LTE and VSAT satellite backup design and commissioning. OT network architecture and vendor coordination." },
]

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="accent-bar">Independent Owner&apos;s Engineer — Offshore Wind</div>
            <h1 className="hero-title">
              Nobody owns your<br/>
              <span className="hero-accent">SCADA integration</span><br/>
              layer. We do.
            </h1>
            <p className="hero-sub">
              From day one of design to final commissioning handover.
              No vendor to protect. No platform to sell.
              Just independent technical oversight of your SCADA scope.
            </p>
            <div className="hero-btns">
              <Link href="/contact" className="btn-primary">Request a consultation</Link>
              <Link href="/projects" className="btn-outline">View projects</Link>
            </div>
            <div className="hero-tags">
              {['IEC 61850', 'IEC 62443', 'IEC 61400-25', 'HVDC', 'NIS2'].map(tag => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <div className="active-badge">
                <div className="pulse-dot" />
                <span>Currently active — Hornsea 3 HVDC</span>
              </div>
              <div className="stats-grid">
                {[['15+', 'Years offshore wind'], ['10+', 'Major projects'], ['10+ GW', 'Capacity delivered'], ['6', 'Developer clients']].map(([n, l]) => (
                  <div key={l} className="stat-box">
                    <div className="stat-num">{n}</div>
                    <div className="stat-label">{l}</div>
                  </div>
                ))}
              </div>
              <div className="projects-preview">
                {[
                  { c: 'Ørsted', p: 'Hornsea 3 HVDC', s: true },
                  { c: 'Vattenfall / RWE', p: 'Norfolk Boreas & Vanguard', s: false },
                  { c: 'ENGIE Fabricom', p: 'Veja Mate · Merkur · Baltic Eagle', s: false },
                ].map(r => (
                  <div key={r.p} className="project-row">
                    <div className={`project-dot ${r.s ? 'project-dot-active' : ''}`} />
                    <div className="project-info">
                      <div className="project-name">{r.p}</div>
                      <div className="project-client">{r.c}</div>
                    </div>
                    <span className={`project-status ${r.s ? 'project-status-active' : ''}`}>{r.s ? 'Active' : 'Done'}</span>
                  </div>
                ))}
                <Link href="/projects" className="view-all-link">View all projects →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="challenge-section">
        <div className="section-inner">
          <div className="section-header">
            <div className="accent-bar">The problem we solve</div>
            <h2 className="section-title">
              Offshore SCADA gaps are <span className="text-teal">invisible</span><br/>until delivery is at risk
            </h2>
          </div>
          <div className="two-col">
            <div className="challenge-card">
              <div className="card-label" style={{ color: '#E07B00' }}>The challenge</div>
              {['No single owner of the integration layer', 'Interface failures discovered too late', 'Vendor interests misaligned with yours', 'Commissioning pressure creates reactive decisions', 'Signal conflicts found during SAT, not FEED'].map(i => (
                <div key={i} className="check-row">
                  <span className="check-x">✕</span>
                  <span className="check-text">{i}</span>
                </div>
              ))}
            </div>
            <div className="solution-card">
              <div className="card-label" style={{ color: '#00C8C8' }}>Our solution</div>
              {['One independent voice owning the integration layer', 'Interface management from FEED through commissioning', 'No vendor, no platform — your interests only', 'IEC 61850, IEC 62443, and IEC 61400-25 expertise', 'Vendor-neutral signal register and conflict detection'].map(i => (
                <div key={i} className="check-row">
                  <span className="check-ok">✓</span>
                  <span className="check-text">{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="services-section">
        <div className="section-inner">
          <div className="section-header-left">
            <div className="accent-bar">What we do</div>
            <h2 className="section-title-left">Where Scada Fortis <span className="text-teal">creates value</span></h2>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.title} className="service-card card">
                <div className="service-num">{String(i+1).padStart(2,'0')}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <Link href="/services" className="service-link">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="tool-section">
        <div className="section-inner">
          <div className="two-col">
            <div>
              <div className="accent-bar">Free tool</div>
              <h2 className="section-title-left" style={{ marginTop: 12 }}>
                FORTIS CONNECT<br/><span className="text-teal">Signal Mapper</span>
              </h2>
              <p className="tool-desc">
                Free browser tool to detect signal conflicts between two SCADA interfaces —
                missing signals, type mismatches, direction conflicts, and IEC 61850 logical node violations.
                No upload, no login, runs entirely in your browser.
              </p>
              <a href="https://abdelscadafortis.github.io/signal-mapper/" target="_blank" rel="noreferrer" className="btn-primary">
                Try the free tool →
              </a>
            </div>
            <div className="tool-features">
              {[
                ['Missing signal detection', 'Signals present on one side but absent on the other'],
                ['Type mismatch detection', 'Boolean declared Analog — or vice versa'],
                ['Direction conflict detection', 'Both sides declaring OUT with no consumer'],
                ['IEC 61850 LN validation', 'DA compatibility check against 61850-7-4'],
                ['Per-WTG aggregation', 'Interface readiness score per turbine'],
              ].map(([t, d]) => (
                <div key={t} className="tool-feature-row">
                  <span className="tool-hex">⬡</span>
                  <div>
                    <div className="tool-feat-title">{t}</div>
                    <div className="tool-feat-desc">{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      <section className="cta-section">
        <div className="cta-inner">
          <div className="accent-bar" style={{ display: 'inline-block', marginBottom: 16 }}>Start the conversation</div>
          <h2 className="cta-title">
            Bring independent SCADA oversight<br/>into your <span className="text-teal">offshore wind project</span>
          </h2>
          <p className="cta-sub">
            SCADA and telecom problems found in FEED cost a fraction of what they cost during commissioning.
            Bring us in early — before the interfaces are locked and the pressure is on.
          </p>
          <div className="cta-btns">
            <Link href="/contact" className="btn-primary">Request a consultation</Link>
            <Link href="/projects" className="btn-outline">View our projects</Link>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section { min-height: 88vh; display: flex; align-items: center; padding: 80px 24px 60px; }
        .hero-inner { max-width: 1120px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .hero-left { display: flex; flex-direction: column; gap: 0; }
        .hero-title { font-family: 'Barlow Condensed', sans-serif; font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 800; line-height: 1.0; letter-spacing: 0.01em; text-transform: uppercase; margin: 16px 0 20px; }
        .hero-accent { color: #00C8C8; }
        .hero-sub { font-size: 16px; color: #7A9BB5; line-height: 1.75; max-width: 460px; margin-bottom: 32px; font-weight: 300; }
        .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 32px; }
        .hero-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .tech-tag { font-family: 'IBM Plex Mono', monospace; font-size: 10px; padding: 3px 10px; border: 1px solid rgba(0,160,160,0.2); border-radius: 2px; color: #4A6880; letter-spacing: 0.08em; }
        .hero-right { }
        .hero-card { background: rgba(0,30,48,0.7); border: 1px solid rgba(0,160,160,0.2); border-radius: 12px; padding: 28px; }
        .active-badge { display: flex; align-items: center; gap: 8px; margin-bottom: 24px; padding: 8px 14px; background: rgba(0,160,160,0.08); border: 1px solid rgba(0,160,160,0.2); border-radius: 4px; }
        .pulse-dot { width: 7px; height: 7px; border-radius: 50%; background: #00C8C8; box-shadow: 0 0 8px #00C8C8; flex-shrink: 0; animation: pulse 2s infinite; }
        .active-badge span { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: #00C8C8; letter-spacing: 0.1em; text-transform: uppercase; }
        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
        .stat-box { background: rgba(0,18,32,0.6); border: 1px solid rgba(0,160,160,0.12); border-radius: 8px; padding: 14px; }
        .stat-num { font-family: 'Barlow Condensed', sans-serif; font-size: 1.8rem; font-weight: 800; color: #00C8C8; line-height: 1; }
        .stat-label { font-size: 11px; color: #4A6880; margin-top: 4px; font-family: 'IBM Plex Mono', monospace; }
        .projects-preview { display: flex; flex-direction: column; }
        .project-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid rgba(0,160,160,0.06); }
        .project-dot { width: 6px; height: 6px; border-radius: 50%; background: #4A6880; flex-shrink: 0; }
        .project-dot-active { background: #00C8C8; }
        .project-info { flex: 1; min-width: 0; }
        .project-name { font-size: 12px; font-weight: 500; color: white; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .project-client { font-size: 11px; color: #4A6880; font-family: 'IBM Plex Mono', monospace; }
        .project-status { font-size: 10px; color: #4A6880; font-family: 'IBM Plex Mono', monospace; flex-shrink: 0; }
        .project-status-active { color: #00C8C8; }
        .view-all-link { font-size: 12px; color: #00A0A0; text-decoration: none; margin-top: 10px; font-family: 'IBM Plex Mono', monospace; }
        .view-all-link:hover { color: #00C8C8; }
        .challenge-section, .services-section, .tool-section, .cta-section { padding: 80px 24px; }
        .tool-section { background: rgba(0,18,32,0.5); }
        .section-inner { max-width: 1120px; margin: 0 auto; }
        .section-header { text-align: center; margin-bottom: 48px; }
        .section-header-left { margin-bottom: 48px; }
        .section-title { font-family: 'Barlow Condensed', sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em; margin-top: 12px; }
        .section-title-left { font-family: 'Barlow Condensed', sans-serif; font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em; max-width: 480px; margin-top: 12px; }
        .text-teal { color: #00C8C8; }
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .challenge-card { background: rgba(0,30,48,0.6); border: 1px solid rgba(192,57,43,0.2); border-radius: 12px; padding: 32px; }
        .solution-card { background: rgba(0,30,48,0.6); border: 1px solid rgba(0,160,160,0.2); border-radius: 12px; padding: 32px; }
        .card-label { font-size: 10px; font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 20px; }
        .check-row { display: flex; gap: 10px; margin-bottom: 12px; }
        .check-x { color: #C0392B; flex-shrink: 0; margin-top: 2px; }
        .check-ok { color: #00843D; flex-shrink: 0; margin-top: 2px; }
        .check-text { font-size: 14px; color: #7A9BB5; line-height: 1.5; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .service-card { padding: 24px; }
        .service-num { font-family: 'IBM Plex Mono', monospace; font-size: 10px; font-weight: 600; color: #00A0A0; background: rgba(0,160,160,0.1); border: 1px solid rgba(0,160,160,0.2); border-radius: 4px; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }
        .service-title { font-size: 16px; font-weight: 600; color: white; margin-bottom: 10px; }
        .service-desc { font-size: 13px; color: #7A9BB5; line-height: 1.65; margin-bottom: 16px; }
        .service-link { font-size: 12px; color: #00A0A0; text-decoration: none; font-family: 'IBM Plex Mono', monospace; }
        .service-link:hover { color: #00C8C8; }
        .tool-desc { font-size: 14px; color: #7A9BB5; line-height: 1.7; margin: 16px 0 24px; }
        .tool-features { display: flex; flex-direction: column; gap: 0; background: rgba(0,30,48,0.7); border: 1px solid rgba(0,160,160,0.2); border-radius: 12px; padding: 24px; }
        .tool-feature-row { display: flex; gap: 12px; padding-bottom: 14px; margin-bottom: 14px; border-bottom: 1px solid rgba(0,160,160,0.06); }
        .tool-feature-row:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }
        .tool-hex { color: #00C8C8; font-size: 14px; flex-shrink: 0; margin-top: 1px; }
        .tool-feat-title { font-size: 13px; font-weight: 500; color: white; margin-bottom: 3px; }
        .tool-feat-desc { font-size: 12px; color: #4A6880; }
        .cta-section { padding: 80px 24px; }
        .cta-inner { max-width: 700px; margin: 0 auto; text-align: center; }
        .cta-title { font-family: 'Barlow Condensed', sans-serif; font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em; margin-bottom: 16px; margin-top: 0; }
        .cta-sub { font-size: 15px; color: #7A9BB5; line-height: 1.7; margin-bottom: 32px; }
        .cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 1024px) { .services-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 768px) { .hero-inner, .two-col { grid-template-columns: 1fr !important; } .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  )
}
