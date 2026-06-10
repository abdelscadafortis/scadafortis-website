import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Expertise',
  description: "Technical expertise in SCADA, telecom, OT cybersecurity and commissioning for offshore wind — IEC 61850, IEC 62443, HVDC and HVAC projects.",
}
const expertise = [
  { title: 'SCADA Systems', items: ['SCADA architecture review and validation', 'Signal lists, data mapping and interface matrices', 'HMI and control room interfaces', 'SCADA redundancy: hot / warm / cold standby', 'Vendor platforms: ABB, Siemens, Schneider, GE'] },
  { title: 'Standards & Protocols', items: ['IEC 61850 Ed.2 — GOOSE, MMS, SCL files', 'IEC 61400-25 — wind power SCADA', 'IEC 60870-5-101/104, DNP3', 'OPC UA server/client architecture', 'IEC 62443 OT security — zones, conduits, SL-C 2'] },
  { title: 'Telecom & Networks', items: ['Offshore fibre backbone and MPLS ring design', 'PAGA and emergency communications', 'Private LTE and VSAT satellite backup', 'OT network segmentation and firewall architecture', 'Vendor interface coordination'] },
  { title: 'OT Cybersecurity', items: ['IEC 62443 zone and conduit design', 'NIS2 / UK NIS compliance advisory', 'OT network segmentation review', 'IDS/IPS integration (Nozomi, Claroty)', 'Cybersecurity scope definition for offshore wind'] },
  { title: 'Commissioning', items: ['FAT, SAT and SIT coordination', 'ITP witness and NCR management', 'Punch list governance and close-out', 'Test documentation review', 'Multi-discipline site coordination'] },
  { title: 'Interface Management', items: ['Interface register ownership', 'Supplier coordination across disciplines', 'Technical issue tracking', 'Signal conflict detection and resolution', 'RDS-PP based signal register management'] },
]
export default function ExpertisePage() {
  return (
    <main style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <div className="accent-bar" style={{ marginBottom: 16 }}>Expertise</div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.1, maxWidth: 560 }}>
            Technical expertise where <span style={{ color: '#00C8C8' }}>project risk appears</span>
          </h1>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 64 }} className="exp-grid">
          {expertise.map(e => (
            <div key={e.title} className="card" style={{ padding: 28 }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: 'white', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(0,160,160,0.12)' }}>{e.title}</h3>
              {e.items.map(i => (
                <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <span style={{ color: '#00A0A0', flexShrink: 0, fontSize: 12, marginTop: 2 }}>—</span>
                  <span style={{ fontSize: 13, color: '#7A9BB5', lineHeight: 1.5 }}>{i}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(0,30,48,0.6)', border: '1px solid rgba(0,160,160,0.15)', borderRadius: 12, padding: 32, textAlign: 'center' }}>
          <p style={{ fontSize: 16, color: '#7A9BB5', maxWidth: 560, margin: '0 auto 24px', lineHeight: 1.7 }}>
            <span style={{ color: 'white', fontWeight: 500 }}>SCADA is not only a system.</span> It&apos;s an integration layer. Scada Fortis focuses on keeping this layer visible, controlled, and aligned with the project owner&apos;s interests.
          </p>
          <Link href="/contact" className="btn-primary">Discuss your project</Link>
        </div>
      </div>
      <style>{`@media (max-width: 1024px) { .exp-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 640px) { .exp-grid { grid-template-columns: 1fr !important; } }`}</style>
    </main>
  )
}
