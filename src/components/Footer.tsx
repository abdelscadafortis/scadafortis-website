'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#001220', borderTop: '1px solid rgba(0,160,160,0.15)', marginTop: 80 }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '48px 24px 32px', display: 'grid', gap: 40 }} className="footer-grid">
        
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <polygon points="14,1.5 25,7.5 25,20.5 14,26.5 3,20.5 3,7.5" fill="none" stroke="rgba(0,160,160,0.2)" strokeWidth="1"/>
              <polygon points="14,5 22,9.5 22,18.5 14,23 6,18.5 6,9.5" fill="rgba(0,160,160,0.08)" stroke="rgba(0,160,160,0.3)" strokeWidth="0.8"/>
              <circle cx="14" cy="14" r="2.5" fill="#00A0A0"/>
            </svg>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              SCADA <span style={{ color: '#00C8C8' }}>FORTIS</span>
            </div>
          </div>
          <p style={{ fontSize: 13, color: '#4A6880', lineHeight: 1.7, maxWidth: 220 }}>
            Independent Owner&apos;s Engineer for offshore wind SCADA, telecom and OT cybersecurity.
          </p>
          <p style={{ fontSize: 12, color: '#4A6880', marginTop: 12, fontFamily: "'IBM Plex Mono', monospace" }}>
            The offshore wind SCADA department<br/>you don&apos;t have to build.
          </p>
          <div style={{ marginTop: 20 }}>
            <a href="https://www.linkedin.com/in/abdelmounaim-errouchi-b4485a20/" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#00A0A0', textDecoration: 'none', padding: '6px 12px', border: '1px solid rgba(0,160,160,0.25)', borderRadius: 4 }}>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4 style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.14em', textTransform: 'uppercase', color: '#00C8C8', marginBottom: 16 }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/expertise', 'Expertise'], ['/projects', 'Projects'], ['/resources', 'Resources'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}><Link href={href} style={{ fontSize: 13, color: '#4A6880', textDecoration: 'none' }} className="footer-link">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.14em', textTransform: 'uppercase', color: '#00C8C8', marginBottom: 16 }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {["Owner's Engineer", "SCADA Engineering", "Commissioning", "Interface Management", "OT Cybersecurity"].map(s => (
                <li key={s}><Link href="/services" style={{ fontSize: 13, color: '#4A6880', textDecoration: 'none' }} className="footer-link">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.14em', textTransform: 'uppercase', color: '#00C8C8', marginBottom: 16 }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="mailto:abdel@scadafortis.com" style={{ fontSize: 13, color: '#4A6880', textDecoration: 'none' }} className="footer-link">abdel@scadafortis.com</a>
              <a href="tel:+352661323271" style={{ fontSize: 13, color: '#4A6880', textDecoration: 'none' }} className="footer-link">+352 661 32 32 71</a>
              <p style={{ fontSize: 13, color: '#4A6880', margin: 0 }}>Luxembourg</p>
              <div style={{ marginTop: 8 }}>
                <h4 style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.14em', textTransform: 'uppercase', color: '#00C8C8', marginBottom: 10 }}>Legal</h4>
                {[['Privacy Policy', '/legal'], ['Terms of Service', '/legal'], ['Cookie Policy', '/legal']].map(([label, href]) => (
                  <div key={label} style={{ marginBottom: 8 }}>
                    <Link href={href} style={{ fontSize: 12, color: '#4A6880', textDecoration: 'none' }} className="footer-link">{label}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '20px 24px', borderTop: '1px solid rgba(0,160,160,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
        <p style={{ fontSize: 12, color: '#2A3A4A', fontFamily: "'IBM Plex Mono', monospace" }}>
          © 2026 Scada Fortis Engineering Solutions. All rights reserved.
        </p>
        <p style={{ fontSize: 11, color: '#2A3A4A', fontFamily: "'IBM Plex Mono', monospace" }}>
          SCADA · TELECOM · IEC 62443 · OFFSHORE WIND
        </p>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 1.4fr 2fr; }
        .footer-links { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px; }
        .footer-link:hover { color: #00C8C8 !important; }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-links { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-links { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
