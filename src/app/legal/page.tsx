import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Legal',
  description: 'Privacy Policy, Terms of Service and Cookie Policy for Scada Fortis Engineering Solutions.',
}
export default function LegalPage() {
  return (
    <main style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div className="accent-bar" style={{ marginBottom: 16 }}>Legal</div>
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2.4rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 48 }}>Privacy & Legal</h1>

        {[
          { title: 'Privacy Policy', items: [
            ['Information Collection', 'Scada Fortis may collect personal information submitted through the contact form, including name, email address, company information, and project-related enquiries.'],
            ['Use of Information', 'Information submitted through the website is used only to respond to professional enquiries and project-related communication. Data is not sold or distributed to third parties.'],
            ['Analytics', 'This website uses Google Analytics to understand visitor behaviour. Data collected is anonymised and used only for website improvement purposes.'],
            ['Cookie Consent', 'This website uses Secure Privacy for cookie consent management in compliance with GDPR and ePrivacy Directive requirements.'],
            ['Data Protection', 'Scada Fortis takes reasonable measures to protect submitted information in accordance with GDPR (Regulation EU 2016/679).'],
            ['Contact', 'For any privacy-related request, contact abdel@scadafortis.com'],
          ]},
          { title: 'Terms of Service', items: [
            ['Use of Website', 'This website is provided for informational purposes. The content is subject to change without notice.'],
            ['Intellectual Property', 'All content on this website is the property of Scada Fortis Engineering Solutions unless otherwise stated.'],
            ['Limitation of Liability', 'Scada Fortis makes no warranties regarding the accuracy or completeness of the information provided on this website.'],
          ]},
          { title: 'Cookie Policy', items: [
            ['Essential Cookies', 'Required for the website to function properly. Cannot be disabled.'],
            ['Analytics Cookies', 'Used by Google Analytics to understand how visitors use the website. Can be declined through the cookie consent banner.'],
            ['Managing Cookies', 'You can manage cookie preferences through the consent banner or your browser settings.'],
          ]},
        ].map(section => (
          <div key={section.title} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.4rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#00C8C8', marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid rgba(0,160,160,0.15)' }}>{section.title}</h2>
            {section.items.map(([subtitle, text]) => (
              <div key={subtitle} style={{ marginBottom: 16 }}>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: 'white', marginBottom: 6 }}>{subtitle}</h3>
                <p style={{ fontSize: 13, color: '#7A9BB5', lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        ))}

        <div style={{ background: 'rgba(0,30,48,0.5)', border: '1px solid rgba(0,160,160,0.12)', borderRadius: 8, padding: '20px 24px', fontSize: 13, color: '#4A6880', lineHeight: 1.7 }}>
          Scada Fortis Engineering Solutions · Luxembourg · abdel@scadafortis.com · Last updated June 2026
        </div>
      </div>
    </main>
  )
}
