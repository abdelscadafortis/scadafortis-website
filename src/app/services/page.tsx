// SERVICES
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Services',
  description: "Independent SCADA Owner's Engineer services for offshore wind — FEED support, tendering, commissioning, interface management and OT cybersecurity.",
}
export default function ServicesPage() {
  const phases = [
    { n: '01', phase: 'FEED & Tendering', items: ['Basis of design and system architecture', 'Vendor-neutral SCADA & telecom specifications', 'Technical scope drafting and bid evaluation', 'Independent contractor selection support'] },
    { n: '02', phase: "Owner's Engineer", items: ['Independent technical oversight', 'Protecting developer and TSO interests', 'Interface management across disciplines', 'No vendor, no platform bias'] },
    { n: '03', phase: 'SCADA Engineering', items: ['Architecture review and signal register ownership', 'Interface matrix management', 'IEC 61850, IEC 61400-25, OPC UA', 'HMI and control room interface review'] },
    { n: '04', phase: 'Commissioning', items: ['FAT, SAT and SIT coordination', 'ITP witness and punch list governance', 'Commissioning documentation management', 'Multi-discipline site coordination'] },
    { n: '05', phase: 'OT Cybersecurity', items: ['IEC 62443 zone and conduit design', 'OT network segmentation review', 'NIS2 compliance advisory', 'OT security architecture for offshore environments'] },
    { n: '06', phase: 'Telecom & Networks', items: ['Offshore fibre backbone and MPLS design', 'PAGA, private LTE, VSAT satellite backup', 'OT network architecture and firewall design', 'Vendor coordination and technical review'] },
  ]
  return (
    <main style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <div className="accent-bar" style={{ marginBottom: 16 }}>Services</div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.1, maxWidth: 560 }}>
            Independent SCADA support from <span style={{ color: '#00C8C8' }}>design to operations</span>
          </h1>
          <p style={{ marginTop: 16, fontSize: 15, color: '#7A9BB5', maxWidth: 520, lineHeight: 1.7 }}>
            A focused engineering offer built around integration ownership, delivery risk reduction, and technical clarity across the full project lifecycle.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 64 }} className="srv-grid">
          {phases.map(p => (
            <div key={p.n} className="card" style={{ padding: 28 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: 'rgba(0,160,160,0.15)', lineHeight: 1, marginBottom: 12 }}>{p.n}</div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'white', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(0,160,160,0.12)' }}>{p.phase}</h3>
              {p.items.map(i => (
                <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  <span style={{ color: '#00A0A0', flexShrink: 0, fontSize: 12, marginTop: 2 }}>—</span>
                  <span style={{ fontSize: 13, color: '#7A9BB5', lineHeight: 1.5 }}>{i}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(0,18,32,0.5)', border: '1px solid rgba(0,160,160,0.15)', borderRadius: 12, padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 8 }}>No vendor to protect. <span style={{ color: '#00C8C8' }}>No platform to sell.</span></h2>
            <p style={{ fontSize: 14, color: '#7A9BB5', maxWidth: 480, lineHeight: 1.6 }}>Scada Fortis acts as an independent engineering partner for project owners. The objective is to keep control of the SCADA integration layer from the beginning of the project.</p>
          </div>
          <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>Request a consultation</Link>
        </div>
      </div>
      <style>{`@media (max-width: 1024px) { .srv-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 640px) { .srv-grid { grid-template-columns: 1fr !important; } }`}</style>
    </main>
  )
}
