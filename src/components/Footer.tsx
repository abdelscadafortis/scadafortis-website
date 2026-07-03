import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <div className="footer-logo">
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
              <polygon points="14,1.5 25,7.5 25,20.5 14,26.5 3,20.5 3,7.5" fill="none" stroke="rgba(0,160,160,0.2)" strokeWidth="1"/>
              <polygon points="14,5 22,9.5 22,18.5 14,23 6,18.5 6,9.5" fill="rgba(0,160,160,0.08)" stroke="rgba(0,160,160,0.3)" strokeWidth="0.8"/>
              <circle cx="14" cy="14" r="2.5" fill="#00A0A0"/>
            </svg>
            <span className="footer-brand-name">SCADA <span>FORTIS</span></span>
          </div>
          <p className="footer-tagline">Independent Owner&apos;s Engineer for offshore wind SCADA, telecom and OT cybersecurity.</p>
          <p className="footer-slogan">The offshore wind SCADA department<br/>you don&apos;t have to build.</p>
          <a href="https://www.linkedin.com/in/abdelmounaim-errouchi-b4485a20/" target="_blank" rel="noreferrer" className="footer-linkedin">
            LinkedIn
          </a>
        </div>

        <div className="footer-nav-col">
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-list">
              {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/expertise', 'Expertise'], ['/projects', 'Projects'], ['/case-studies', 'Case Studies'], ['/resources', 'Resources'], ['/availability', 'Availability'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}><Link href={href} className="footer-link">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-list">
              {["Owner's Engineer", "SCADA Engineering", "Commissioning", "Interface Management", "OT Cybersecurity"].map(s => (
                <li key={s}><Link href="/services" className="footer-link">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact">
              <a href="mailto:abdel@scadafortis.com" className="footer-link">abdel@scadafortis.com</a>
              <a href="tel:+352661323271" className="footer-link">+352 661 32 32 71</a>
              <span className="footer-text">Luxembourg</span>
              <h4 className="footer-col-title" style={{ marginTop: 16 }}>Legal</h4>
              <Link href="/legal" className="footer-link">Privacy Policy</Link>
              <Link href="/legal" className="footer-link">Terms of Service</Link>
              <Link href="/legal" className="footer-link">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Scada Fortis Engineering Solutions. All rights reserved.</p>
        <p>SCADA · TELECOM · IEC 62443 · OFFSHORE WIND</p>
      </div>

      <style>{`
        .footer { background: #001220; border-top: 1px solid rgba(0,160,160,0.15); margin-top: 80px; }
        .footer-inner { max-width: 1120px; margin: 0 auto; padding: 48px 24px 32px; display: grid; grid-template-columns: 1.4fr 2fr; gap: 48px; }
        .footer-brand-col { display: flex; flex-direction: column; gap: 12px; }
        .footer-logo { display: flex; align-items: center; gap: 8px; }
        .footer-brand-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: white; }
        .footer-brand-name span { color: #00C8C8; }
        .footer-tagline { font-size: 13px; color: #4A6880; line-height: 1.7; max-width: 220px; margin: 0; }
        .footer-slogan { font-size: 12px; color: #4A6880; font-family: 'IBM Plex Mono', monospace; margin: 0; }
        .footer-linkedin { display: inline-flex; align-items: center; font-size: 12px; color: #00A0A0; text-decoration: none; padding: 6px 12px; border: 1px solid rgba(0,160,160,0.25); border-radius: 4px; width: fit-content; }
        .footer-linkedin:hover { color: #00C8C8; border-color: rgba(0,160,160,0.5); }
        .footer-nav-col { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px; }
        .footer-col-title { font-size: 10px; font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.14em; text-transform: uppercase; color: #00C8C8; margin: 0 0 14px 0; }
        .footer-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
        .footer-link { font-size: 13px; color: #4A6880; text-decoration: none; display: block; margin-bottom: 8px; }
        .footer-link:hover { color: #00C8C8; }
        .footer-contact { display: flex; flex-direction: column; }
        .footer-text { font-size: 13px; color: #4A6880; margin-bottom: 8px; }
        .footer-bottom { max-width: 1120px; margin: 0 auto; padding: 20px 24px; border-top: 1px solid rgba(0,160,160,0.08); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
        .footer-bottom p { font-size: 12px; color: #2A3A4A; font-family: 'IBM Plex Mono', monospace; margin: 0; }
        @media (max-width: 768px) { .footer-inner { grid-template-columns: 1fr !important; } .footer-nav-col { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-nav-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
