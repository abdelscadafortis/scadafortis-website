'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/projects', label: 'Projects' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header style={{ background: 'rgba(0,18,32,0.97)', borderBottom: '1px solid rgba(0,160,160,0.18)', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(12px)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <polygon points="14,1.5 25,7.5 25,20.5 14,26.5 3,20.5 3,7.5" fill="none" stroke="rgba(0,160,160,0.2)" strokeWidth="1"/>
            <polygon points="14,5 22,9.5 22,18.5 14,23 6,18.5 6,9.5" fill="rgba(0,160,160,0.08)" stroke="rgba(0,160,160,0.35)" strokeWidth="0.8"/>
            <polygon points="14,8.5 19,11.5 19,16.5 14,19.5 9,16.5 9,11.5" fill="rgba(0,160,160,0.14)" stroke="#00A0A0" strokeWidth="0.9"/>
            <circle cx="14" cy="14" r="2.5" fill="#00A0A0"/>
            <circle cx="14" cy="14" r="1" fill="#001220"/>
          </svg>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 15, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white', lineHeight: 1 }}>
              SCADA <span style={{ color: '#00C8C8' }}>FORTIS</span>
            </div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 8, letterSpacing: '0.16em', color: '#4A6880', textTransform: 'uppercase', lineHeight: 1, marginTop: 2 }}>
              Engineering Solutions
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden lg:flex">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: '6px 12px',
              fontSize: 13,
              fontWeight: 500,
              color: pathname === l.href ? '#00C8C8' : '#7A9BB5',
              textDecoration: 'none',
              borderRadius: 4,
              transition: 'color 0.15s',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => { if (pathname !== l.href) (e.target as HTMLElement).style.color = 'white' }}
            onMouseLeave={e => { if (pathname !== l.href) (e.target as HTMLElement).style.color = '#7A9BB5' }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ marginLeft: 8, fontSize: 12, padding: '8px 18px' }}>
            Get in touch
          </Link>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 8 }} className="lg:hidden">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <><line x1="4" y1="4" x2="16" y2="16"/><line x1="16" y1="4" x2="4" y2="16"/></> : <><line x1="3" y1="6" x2="17" y2="6"/><line x1="3" y1="10" x2="17" y2="10"/><line x1="3" y1="14" x2="17" y2="14"/></>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(0,18,32,0.98)', borderTop: '1px solid rgba(0,160,160,0.12)', padding: '16px 24px 20px' }} className="lg:hidden">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '10px 0',
              fontSize: 14, fontWeight: 500,
              color: pathname === l.href ? '#00C8C8' : '#7A9BB5',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(0,160,160,0.08)',
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ marginTop: 16, fontSize: 13 }} onClick={() => setOpen(false)}>
            Get in touch
          </Link>
        </div>
      )}
    </header>
  )
}
