import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact',
  description: "Request a consultation with Scada Fortis — independent SCADA Owner's Engineer for offshore wind developers and EPC contractors.",
}

export default function ContactPage() {
  return (
    <main style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div className="accent-bar" style={{ marginBottom: 16 }}>Contact</div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.1, maxWidth: 520, margin: '0 0 16px' }}>
          Request a <span style={{ color: '#00C8C8' }}>consultation</span>
        </h1>
        <p style={{ fontSize: 15, color: '#7A9BB5', maxWidth: 480, lineHeight: 1.7, marginBottom: 48 }}>Tell us about your project. We will respond within one business day.</p>

        <div className="contact-layout">
          <div className="contact-form-wrap">
            <form action="https://formsubmit.co/abdel@scadafortis.com" method="POST">
              <input type="hidden" name="_subject" value="New contact from scadafortis.com" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.scadafortis.com/contact" />

              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">Full name *</label>
                  <input name="name" required placeholder="Your name" className="form-input" />
                </div>
                <div className="form-field">
                  <label className="form-label">Email address *</label>
                  <input name="email" type="email" required placeholder="you@company.com" className="form-input" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">Company</label>
                  <input name="company" placeholder="Your company" className="form-input" />
                </div>
                <div className="form-field">
                  <label className="form-label">Subject</label>
                  <select name="subject" className="form-input">
                    <option value="">Select a topic</option>
                    <option>Owner&apos;s Engineer Services</option>
                    <option>SCADA Engineering &amp; Design</option>
                    <option>Commissioning Management</option>
                    <option>OT Cybersecurity</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>
              <div className="form-field" style={{ marginBottom: 24 }}>
                <label className="form-label">Message *</label>
                <textarea name="message" required rows={6} placeholder="Describe your project or request..." className="form-input form-textarea" />
              </div>
              <button type="submit" className="btn-primary form-submit">Send message →</button>
            </form>
          </div>

          <div className="contact-info">
            {[
              { label: 'Email', value: 'abdel@scadafortis.com', href: 'mailto:abdel@scadafortis.com' },
              { label: 'Phone', value: '+352 661 32 32 71', href: 'tel:+352661323271' },
              { label: 'Location', value: 'Luxembourg · Belgium · Norway (rotational)', href: null },
              { label: 'LinkedIn', value: 'Abdelmounaim Errouchi', href: 'https://www.linkedin.com/in/abdelmounaim-errouchi-b4485a20/' },
            ].map(c => (
              <div key={c.label} className="contact-info-item">
                <div className="contact-info-label">{c.label}</div>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-info-value contact-link">{c.value}</a>
                ) : (
                  <p className="contact-info-value">{c.value}</p>
                )}
              </div>
            ))}
            <div className="availability-box">
              <strong style={{ color: 'white', fontWeight: 500 }}>Availability:</strong> Currently active on Hornsea 3 (rotational Norway/UK). Available for new Owner&apos;s Engineer mandates from Q3/Q4 2026.
            </div>
          </div>
        </div>

        <div style={{ marginTop: 64 }}>
          <div className="accent-bar" style={{ marginBottom: 24 }}>FAQ</div>
          <div className="faq-grid">
            {[
              { q: 'What type of projects does Scada Fortis support?', a: 'Scada Fortis supports offshore wind projects — SCADA integration, interface management, commissioning, and technical oversight on HVDC and HVAC OSS platforms.' },
              { q: 'Is Scada Fortis a software provider?', a: 'No. Scada Fortis provides independent engineering expertise and project support — not a SCADA platform or vendor product.' },
              { q: 'When should Scada Fortis be involved?', a: 'Ideally from the early design phase, before integration issues become costly during commissioning. The earlier, the cheaper to fix.' },
              { q: 'Who is this service for?', a: "Offshore wind developers, EPC contractors, project directors, technical managers, and procurement teams who need an independent SCADA voice." },
            ].map(f => (
              <div key={f.q} className="faq-item">
                <h3 className="faq-q">{f.q}</h3>
                <p className="faq-a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-layout { display: grid; grid-template-columns: 1.4fr 1fr; gap: 32px; }
        .contact-form-wrap { background: rgba(0,30,48,0.7); border: 1px solid rgba(0,160,160,0.18); border-radius: 12px; padding: 36px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        .form-field { display: flex; flex-direction: column; }
        .form-label { font-size: 11px; font-family: 'IBM Plex Mono', monospace; color: #4A6880; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 6px; }
        .form-input { background: rgba(0,18,32,0.7); border: 1px solid rgba(0,160,160,0.18); border-radius: 4px; color: white; font-size: 14px; padding: 10px 14px; outline: none; font-family: inherit; width: 100%; }
        .form-input:focus { border-color: #00A0A0; }
        .form-textarea { resize: vertical; }
        .form-submit { width: 100%; justify-content: center; font-size: 14px; padding: 12px 24px; }
        .contact-info { display: flex; flex-direction: column; gap: 12px; }
        .contact-info-item { background: rgba(0,30,48,0.5); border: 1px solid rgba(0,160,160,0.12); border-radius: 8px; padding: 16px 18px; }
        .contact-info-label { font-size: 10px; font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.12em; text-transform: uppercase; color: #4A6880; margin-bottom: 6px; }
        .contact-info-value { font-size: 14px; color: white; margin: 0; }
        .contact-link { text-decoration: none; }
        .contact-link:hover { color: #00C8C8; }
        .availability-box { background: rgba(0,160,160,0.06); border: 1px solid rgba(0,160,160,0.18); border-radius: 8px; padding: 16px 18px; font-size: 13px; color: #7A9BB5; line-height: 1.7; }
        .faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .faq-item { background: rgba(0,30,48,0.5); border: 1px solid rgba(0,160,160,0.1); border-radius: 8px; padding: 22px 24px; }
        .faq-q { font-size: 14px; font-weight: 600; color: white; margin: 0 0 10px; line-height: 1.4; }
        .faq-a { font-size: 13px; color: #7A9BB5; line-height: 1.65; margin: 0; }
        @media (max-width: 768px) { .contact-layout, .faq-grid, .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </main>
  )
}
