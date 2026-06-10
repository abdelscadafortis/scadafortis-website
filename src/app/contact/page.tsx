import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact',
  description: "Request a consultation with Scada Fortis — independent SCADA Owner's Engineer for offshore wind developers and EPC contractors.",
}
const faqs = [
  { q: 'What type of projects does Scada Fortis support?', a: 'Scada Fortis supports offshore wind projects — SCADA integration, interface management, commissioning, and technical oversight. Focus is on HVDC and HVAC OSS platforms.' },
  { q: 'Is Scada Fortis a software provider?', a: 'No. Scada Fortis provides independent engineering expertise and project support — not a SCADA platform or vendor product.' },
  { q: 'When should Scada Fortis be involved?', a: 'Ideally from the early design phase, before integration issues become costly during commissioning. The earlier, the cheaper to fix.' },
  { q: 'Who is this service for?', a: 'Offshore wind developers, EPC contractors, project directors, technical managers, and procurement teams who need an independent SCADA voice.' },
]
export default function ContactPage() {
  return (
    <main style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <div className="accent-bar" style={{ marginBottom: 16 }}>Contact</div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.1, maxWidth: 520 }}>
            Request a <span style={{ color: '#00C8C8' }}>consultation</span>
          </h1>
          <p style={{ marginTop: 16, fontSize: 15, color: '#7A9BB5', maxWidth: 480, lineHeight: 1.7 }}>Tell us about your project. We will respond within one business day.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, marginBottom: 64 }} className="contact-grid">

          {/* Form */}
          <div style={{ background: 'rgba(0,30,48,0.7)', border: '1px solid rgba(0,160,160,0.18)', borderRadius: 12, padding: 36 }}>
            <form action="https://formsubmit.co/abdel@scadafortis.com" method="POST">
              <input type="hidden" name="_subject" value="New contact from scadafortis.com" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.scadafortis.com/contact?sent=true" />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", color: '#4A6880', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Full name *</label>
                  <input name="name" required placeholder="Your name" style={{ width: '100%', background: 'rgba(0,18,32,0.7)', border: '1px solid rgba(0,160,160,0.18)', borderRadius: 4, color: 'white', fontSize: 14, padding: '10px 14px', outline: 'none', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", color: '#4A6880', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Email address *</label>
                  <input name="email" type="email" required placeholder="you@company.com" style={{ width: '100%', background: 'rgba(0,18,32,0.7)', border: '1px solid rgba(0,160,160,0.18)', borderRadius: 4, color: 'white', fontSize: 14, padding: '10px 14px', outline: 'none', fontFamily: 'inherit' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", color: '#4A6880', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Company</label>
                  <input name="company" placeholder="Your company" style={{ width: '100%', background: 'rgba(0,18,32,0.7)', border: '1px solid rgba(0,160,160,0.18)', borderRadius: 4, color: 'white', fontSize: 14, padding: '10px 14px', outline: 'none', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", color: '#4A6880', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Subject</label>
                  <select name="subject" style={{ width: '100%', background: 'rgba(0,18,32,0.7)', border: '1px solid rgba(0,160,160,0.18)', borderRadius: 4, color: '#7A9BB5', fontSize: 14, padding: '10px 14px', outline: 'none', fontFamily: 'inherit' }}>
                    <option value="">Select a topic</option>
                    <option>Owner&apos;s Engineer Services</option>
                    <option>SCADA Engineering & Design</option>
                    <option>Commissioning Management</option>
                    <option>OT Cybersecurity</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", color: '#4A6880', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Message *</label>
                <textarea name="message" required rows={6} placeholder="Describe your project or request..." style={{ width: '100%', background: 'rgba(0,18,32,0.7)', border: '1px solid rgba(0,160,160,0.18)', borderRadius: 4, color: 'white', fontSize: 14, padding: '10px 14px', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }} />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 14, padding: '12px 24px' }}>
                Send message →
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { label: 'Email', value: 'abdel@scadafortis.com', href: 'mailto:abdel@scadafortis.com' },
              { label: 'Phone', value: '+352 661 32 32 71', href: 'tel:+352661323271' },
              { label: 'Location', value: 'Luxembourg · Belgium · Norway (rotational)' },
              { label: 'LinkedIn', value: 'Abdelmounaim Errouchi', href: 'https://www.linkedin.com/in/abdelmounaim-errouchi-b4485a20/' },
            ].map(c => (
              <div key={c.label} style={{ background: 'rgba(0,30,48,0.5)', border: '1px solid rgba(0,160,160,0.12)', borderRadius: 8, padding: '18px 20px' }}>
                <div style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A6880', marginBottom: 6 }}>{c.label}</div>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ fontSize: 14, color: 'white', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = '#00C8C8'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = 'white'}
                  >{c.value}</a>
                ) : (
                  <p style={{ fontSize: 14, color: 'white', margin: 0 }}>{c.value}</p>
                )}
              </div>
            ))}

            <div style={{ background: 'rgba(0,160,160,0.06)', border: '1px solid rgba(0,160,160,0.18)', borderRadius: 8, padding: '18px 20px', marginTop: 4 }}>
              <div style={{ fontSize: 12, color: '#7A9BB5', lineHeight: 1.7 }}>
                <strong style={{ color: 'white', fontWeight: 500 }}>Availability:</strong> Currently active on Hornsea 3 (rotational Norway/UK). Available for new Owner&apos;s Engineer mandates from Q3/Q4 2026.
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <div className="accent-bar" style={{ marginBottom: 24 }}>FAQ</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="faq-grid">
            {faqs.map(f => (
              <div key={f.q} style={{ background: 'rgba(0,30,48,0.5)', border: '1px solid rgba(0,160,160,0.1)', borderRadius: 8, padding: '22px 24px' }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 10, lineHeight: 1.4 }}>{f.q}</h3>
                <p style={{ fontSize: 13, color: '#7A9BB5', lineHeight: 1.65, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .contact-grid, .faq-grid { grid-template-columns: 1fr !important; } }`}</style>
    </main>
  )
}
