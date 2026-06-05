import React from 'react'
import SectionLabel from './SectionLabel'

const infoItems = [
  { icon: '📍', label: 'Ubicación', value: 'Linares, Chile', href: null },
  { icon: '📞', label: 'Teléfono', value: '+56 9 3582 0014', href: 'tel:+56935820014' },
  { icon: '✉️', label: 'Email', value: 'cristianmunozmendez96@gmail.com', href: 'mailto:cristianmunozmendez96@gmail.com' },
  { icon: '💻', label: 'GitHub', value: 'cristian123-stack', href: 'https://github.com/cristian123-stack' },
]

export default function About() {
  return (
    <section id="sobre-mi" style={{ padding: '80px 40px', maxWidth: '900px', margin: '0 auto' }}>
      <SectionLabel>Sobre mí</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
        <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300 }}>
          Desarrollador Full Stack titulado como Analista Programador, con experiencia real trabajando en backend y frontend,
          creando consultas SQL, consumiendo APIs, generando reportes y colaborando con equipos técnicos y de negocio.
          <br /><br />
          Busco un rol como <strong style={{ fontWeight: 500, color: 'var(--text)' }}>Full Stack Developer Junior</strong> o{' '}
          <strong style={{ fontWeight: 500, color: 'var(--text)' }}>Programador Web</strong> donde pueda seguir creciendo
          y aportar valor real desde el primer día.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {infoItems.map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px' }}>
              <div style={{
                width: '32px', height: '32px',
                background: 'var(--accent-light)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, fontSize: '14px',
              }}>
                {item.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {item.label}
                </span>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    style={{ color: 'var(--text)', fontWeight: 500, fontSize: '14px', textDecoration: 'none', borderBottom: '1px solid var(--border)', wordBreak: 'break-all' }}>
                    {item.value}
                  </a>
                ) : (
                  <span style={{ color: 'var(--text)', fontWeight: 500, fontSize: '14px' }}>{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
