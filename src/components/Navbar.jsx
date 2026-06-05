import React, { useState, useEffect } from 'react'

const navStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0,
  zIndex: 100,
  background: 'rgba(248,247,244,0.88)',
  backdropFilter: 'blur(12px)',
  borderBottom: '1px solid rgba(26,25,23,0.1)',
  padding: '0 40px',
  height: '56px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#educacion', label: 'Educación' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{ ...navStyle, boxShadow: scrolled ? '0 1px 0 rgba(26,25,23,0.08)' : 'none' }}>
      <a href="#inicio" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500, textDecoration: 'none', color: 'var(--text)' }}>
        CM /
      </a>
      <ul style={{ display: 'flex', gap: '28px', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', fontWeight: 400, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
