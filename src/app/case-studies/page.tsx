import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: "How Scada Fortis resolved OFTO SCADA compliance on Norfolk Boreas/Vanguard and delivered the full telecom stack on EDF Saint-Nazaire.",
}

const cases = [
  {
    tag: 'OFTO SCADA · UK NIS',
    client: 'Vattenfall / RWE — Norfolk Boreas & Norfolk Vanguard',
    title: 'Closing the OFTO interface gap before it became a commissioning risk',
    challenge: "Norfolk Boreas and Norfolk Vanguard involved a dual-project engagement spanning FEED through commissioning, with SCADA and telecom scope split across two offshore wind projects and an OFTO (Offshore Transmission Owner) boundary. The interface requirements between the wind farm SCADA and the OFTO's systems were not fully defined at FEED stage, creating a real risk that compliance gaps would surface late — during commissioning, when they are expensive and slow to fix. On top of the interface risk, UK NIS cybersecurity requirements needed to be built into the SCADA and telecom architecture from the start, not retrofitted after design freeze.",
    approach: "Working client-side across both projects, the scope covered authoring the SCADA and telecom technical specifications, defining the OFTO interface requirements in detail, and contributing to HAZOP/HAZID sessions to surface risks before they were locked into the design. OT network architecture was reviewed against UK NIS requirements at the design stage, and vendor offers were evaluated against both functional and cybersecurity criteria — not treated as a separate compliance exercise.",
    result: "The OFTO interface requirements were locked down early enough to avoid late-stage rework, and UK NIS compliance was built into the network architecture rather than bolted on. 32 months across both projects, covering the full lifecycle from FEED design engineering through to commissioning.",
    tech: ['IEC 62443', 'OPC UA', 'IEC 61850', 'OFTO Interface', 'UK NIS'],
  },
  {
    tag: 'Telecom Systems Integration',
    client: 'EDF Renewables — Fécamp & Saint-Nazaire',
    title: 'One engineer owning the full offshore telecom stack, end to end',
    challenge: "Offshore wind telecom scope is rarely owned by one person — fibre, radio, and IT/OT networks are usually split across separate contractors, each testing their own layer and assuming the interfaces will just work. On Fécamp and Saint-Nazaire, the telecom stack spanned subsea fibre, TETRA and VHF marine/aviation radio, LTE, VOIP, and the LV interfaces connecting it all to the SCADA and control layer — with grid code compliance and FAT/SAT sign-off riding on every one of those interfaces actually working together, not just in isolation.",
    approach: "Rather than treating fibre, radio, and IT/OT networking as separate workstreams, the scope was owned end to end: SCADA integration and specification, HV protection relay testing, grid code compliance verification, and telecom/OSS interface coordination were run as one continuous thread through FAT and SAT, not handed off between specialists at each stage.",
    result: "Full telecom stack commissioned and signed off across two offshore wind developments, with interface issues caught during FAT rather than discovered during offshore SAT — where they are far more expensive to fix.",
    tech: ['IEC 104', 'Modbus', 'FAT/SAT', 'DNV GL Standards'],
  },
]

export default function CaseStudiesPage() {
  return (
    <main style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <div className="accent-bar" style={{ marginBottom: 16 }}>Case Studies</div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1.1, maxWidth: 640 }}>
            Real projects, <span style={{ color: '#00C8C8' }}>real interfaces, real outcomes</span>
          </h1>
          <p style={{ marginTop: 16, fontSize: 15, color: '#7A9BB5', maxWidth: 560, lineHeight: 1.7 }}>
            Two engagements showing what
