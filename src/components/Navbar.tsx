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
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/resources', label: 'Resources' },
  { href: '/availability', label: 'Availability' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <polygon points="14,1.5 25,7.5 25,20.5 14,26.5 3,20.5 3,7.5" fill="none" stroke="rgba(0,160,160,0.2)" strokeWidth="1"/>
            <polygon points="14,5 22,9.5 22,18.5 14,23 6,18.5 6,9.5" fill="rgba(0,160,160,0.08)" stroke="rgba(0,160,160,0.35)" strokeWidth="0.8"/>
            <polygon points="14,8.5 19,11.5 19,16.5 14,19.5 9,16.5 9,11.5" fill="rgba(0,160,160,0.14)" stroke="#00A0A0" strokeWidth="0.9"/>
            <circle cx="14" cy="14" r="2.5" fill="#00A0A0"/>
            <circle cx="14" cy="14" r="1" fill="#001220"/>
          </svg>
          <div>
            <div className="navbar-brand">SCADA <span>FORTIS</span></div>
            <div className="navbar-sub">Engineering Solutions</div>
          </div>
        </Link>

        <nav className="navbar-nav">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? 'nav-link-active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary nav-cta">Get in touch</Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="navbar-burger" aria-label="Menu">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <><line x1="4" y1="4" x2="16" y2="16"/><line x1="16" y1="4" x2="4" y2="16"/></>
              : <><line x1="3" y1="6" x2="17" y2="6"/><line x1="3" y1="10" x2="17" y2="10"/><line x1="3" y1="14" x2="17" y2="14"/></>
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="navbar-mobile">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`mobile-link ${pathname === l.href ? 'mobile-link-active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ marginTop: 12, fontSize: 13, display: 'inline-flex' }} onClick={() => setOpen(false)}>
            Get in touch
          </Link>
        </div>
      )}

      <style>{`
        .navbar { background: rgba(0,18,32,0.97); border-bottom: 1px solid rgba(0,160,160,0.18); position: sticky; top: 0; z-index: 100; backdrop-filter: blur(12px); }
        .navbar-inner { max-width: 1120px; margin: 0 auto; padding: 0 24px; height: 60px; display: flex; align-items: center; justify-content: space-between; }
        .navbar-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .navbar-brand { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase; color: white; line-height: 1; }
        .navbar-brand span { color: #00C8C8; }
        .navbar-sub { font-family: 'IBM Plex Mono', monospace; font-size: 8px; letter-spacing: 0.16em; color: #4A6880; text-transform: uppercase; line-height: 1; margin-top: 2px; }
        .navbar-nav { display: flex; align-items: center; gap: 4px; }
        .nav-link { padding: 6px 12px; font-size: 13px; font-weight: 500; color: #7A9BB5; text-decoration: none; border-radius: 4px; transition: color 0.15s; }
        .nav-link:hover { color: white; }
        .nav-link-active { color: #00C8C8; }
        .nav-cta { margin-left: 8px; font-size: 12px; padding: 8px 18px; }
        .navbar-burger { display: none; background: none; border: none; color: white; cursor: pointer; padding: 8px; }
        .navbar-mobile { background: rgba(0,18,32,0.98); border-top: 1px solid rgba(0,160,160,0.12); padding: 16px 24px 20px; }
        .mobile-link { display: block; padding: 10px 0; font-size: 14px; font-weight: 500; color: #7A9BB5; text-decoration: none; border-bottom: 1px solid rgba(0,160,160,0.08); }
        .mobile-link:hover { color: white; }
        .mobile-link-active { color: #00C8C8; }
        @media (max-width: 1024px) { .navbar-nav { display: none; } .navbar-burger { display: block; } }
        @media (min-width: 1025px) { .navbar-mobile { display: none; } }
      `}</style>
    </header>
  )
}
