import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: "Proven track record across Ørsted, Vattenfall, RWE, EDF Renewables and ENGIE Fabricom — HVDC and HVAC offshore wind projects across Europe.",
}

const projects = [
  {
    title: 'Hornsea 3 HVDC',
    client: 'Ørsted',
    year: 'Jul 2025 - Sep 2026',
    status: 'Active',
    type: 'HVDC · OCS',
    desc: "Europe's largest offshore wind project under construction. Site Engineer Representative and Electrical Site Coordinator for the Link 2 Offshore Converter Station.",
    scope: ['SER and Electrical Site Coordinator on OCS platform', 'ITP witness coordination and punch list governance', 'GPS / IEC 104 timestamp validation', 'SCS network architecture review', 'IEC 61850 Edition 2 verification', 'Nozomi IDS integration and OT architecture review'],
    tech: ['IEC 61850', 'Hitachi Energy HVDC', 'IEC 104', 'FortiGate', 'Nozomi', 'MicroSCADA'],
  },
  {
    title: 'Norfolk Boreas & Norfolk Vanguard',
    client: 'Vattenfall / RWE',
    year: '2022 – 2025',
    status: 'Completed',
    type: 'FEED + Commissioning',
    desc: 'Dual-project engagement covering FEED design engineering and commissioning phases for two major UK offshore wind projects.',
    scope: ['SCADA and telecom specification authoring', 'OFTO interface requirements', 'HAZOP/HAZID contribution', 'OT network architecture design', 'Vendor offer evaluation'],
    tech: ['IEC 62443', 'OPC UA', 'IEC 61850', 'OFTO Interface'],
  },
  {
    title: 'Veja Mate · Merkur · Baltic Eagle',
    client: 'ENGIE Fabricom',
    year: '2015 – 2021',
    status: 'Completed',
    type: 'HVDC · Commissioning',
    desc: 'Three HVDC offshore wind projects across the North Sea and Baltic Sea — QA/QC Commissioning Manager across construction, installation and commissioning phases.',
    scope: ['QA/QC Commissioning Manager on HVDC platforms', 'Contractor oversight during offshore construction', 'Quality control plan and inspection test plans', 'HSE oversight and permit-to-work authority', 'SCADA and protection system commissioning'],
    tech: ['IEC 61850', 'HVDC', 'FAT/SAT', 'QA/QC'],
  },
  {
    title: 'Borssele 01/02 & Borkum Riffgrund 2',
    client: 'Ørsted',
    year: '2017 – 2021',
    status: 'Completed',
    type: 'SCADA · Commissioning',
    desc: 'OSS SCADA commissioning on two major Ørsted offshore wind projects — offshore North Sea platforms.',
    scope: ['OSS SCADA system commissioning', 'IEC 61850 GOOSE and MMS verification', 'Telecom infrastructure commissioning', 'FAT/SAT witness and punch list management'],
    tech: ['IEC 61850', 'MicroSCADA', 'IEC 104', 'FAT/SAT'],
  },
  {
    title: 'Offshore HVDC Grid Connection',
    client: '50Hertz',
    year: '2025',
    status: 'Completed',
    type: 'HVDC · TSO . FEED',
    desc: 'FEED-phase SCADA and telecom specification for a German TSO offshore HVDC grid connection.',
    scope: ['SCADA and telecom functional specification', 'FEED design basis review', 'IEC 61850 architecture input', 'TSO interface requirements definition'],
    tech: ['IEC 61850', 'MPLS-TP', 'SDH', 'TSO Interface'],
  },
  {
    title: 'Fécamp & Saint-Nazaire',
    client: 'EDF Renewables',
    year: 'Sep 2021 - May 2022',
    status: 'Completed',
    type: 'SCADA · Commissioning',
    desc: 'SCADA and telecom engineering and commissioning on two French offshore wind developments.',
    scope: ['SCADA integration and specification', 'HV protection relay testing', 'Grid code compliance verification', 'FAT/SAT supervision', 'Telecom and OSS interface coordination'],
    tech: ['IEC 104', 'Modbus', 'FAT/SAT', 'DNV GL Standards'],
  },
]

export default function ProjectsPage() {
  return (
    <main style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        <div style={{ marginBottom: 56 }}>
          <div className="accent-bar" style={{ marginBottom: 16 }}>Projects</div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.1, maxWidth: 600 }}>
            Proven experience across <span style={{ color: '#00C8C8' }}>European offshore wind</span>
          </h1>
          <p style={{ marginTop: 16, fontSize: 15, color: '#7A9BB5', maxWidth: 560, lineHeight: 1.7 }}>
            15+ years delivering SCADA, telecom and OT cybersecurity scope on HVDC and HVAC offshore wind projects for major European developers.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 56 }} className="stats-grid">
          {[['15+', 'Years offshore wind'], ['10+', 'Major projects'], ['10+ GW', 'Capacity represented'], ['6', 'Developer clients']].map(([n, l]) => (
            <div key={l} style={{ background: 'rgba(0,30,48,0.6)', border: '1px solid rgba(0,160,160,0.15)', borderRadius: 8, padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2rem', fontWeight: 800, color: '#00C8C8', lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 11, color: '#4A6880', marginTop: 6, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '0.04em' }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Projects grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 64 }} className="proj-grid">
          {projects.map(p => (
            <div key={p.title} className="card" style={{ padding: 28, borderColor: p.status === 'Active' ? 'rgba(0,160,160,0.3)' : undefined }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 11, fontFamily: "'IBM Plex Mono', monospace", color: '#4A6880', marginBottom: 6 }}>{p.client}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: 'white', lineHeight: 1.3 }}>{p.title}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5, flexShrink: 0 }}>
                  <span style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", padding: '3px 8px', background: p.status === 'Active' ? 'rgba(0,160,160,0.15)' : 'rgba(0,48,87,0.6)', border: `1px solid ${p.status === 'Active' ? 'rgba(0,160,160,0.3)' : 'rgba(0,160,160,0.1)'}`, borderRadius: 2, color: p.status === 'Active' ? '#00C8C8' : '#4A6880' }}>
                    {p.status}
                  </span>
                  <span style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", color: '#4A6880' }}>{p.year}</span>
                </div>
              </div>

              <p style={{ fontSize: 13, color: '#7A9BB5', lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>

              <div style={{ marginBottom: 16 }}>
                {p.scope.slice(0, 3).map(s => (
                  <div key={s} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                    <span style={{ color: '#00A0A0', flexShrink: 0, fontSize: 12 }}>—</span>
                    <span style={{ fontSize: 12, color: '#4A6880' }}>{s}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', paddingTop: 14, borderTop: '1px solid rgba(0,160,160,0.08)' }}>
                {p.tech.map(t => (
                  <span key={t} style={{ fontSize: 10, fontFamily: "'IBM Plex Mono', monospace", padding: '2px 8px', border: '1px solid rgba(0,160,160,0.15)', borderRadius: 2, color: '#4A6880', letterSpacing: '0.04em' }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '48px 32px', background: 'rgba(0,18,32,0.5)', border: '1px solid rgba(0,160,160,0.15)', borderRadius: 12 }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 12 }}>
            Bring us in early. <span style={{ color: '#00C8C8' }}>It&apos;s cheaper.</span>
          </h2>
          <p style={{ fontSize: 14, color: '#7A9BB5', maxWidth: 440, margin: '0 auto 24px', lineHeight: 1.7 }}>
            SCADA and telecom problems found in FEED cost less to fix than the same problems discovered during commissioning.
          </p>
          <Link href="/contact" className="btn-primary">Start a conversation</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .proj-grid, .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
