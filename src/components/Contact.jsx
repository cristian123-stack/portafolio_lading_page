import React from 'react'
import SectionLabel from './SectionLabel'

const WA_LINK =
  'https://wa.me/56935820014?text=Hola%20Cristian%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactarte'

const contacts = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'cristianmunozmendez96@gmail.com',
    href: 'mailto:cristianmunozmendez96@gmail.com',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+56 9 3582 0014',
    href: WA_LINK,
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'cristian123-stack',
    href: 'https://github.com/cristian123-stack',
  },
  {
    icon: '📍',
    label: 'Ubicación',
    value: 'Linares, Chile',
    href: null,
  },
]

export default function Contact() {
  return (
    <section
      id="contacto"
      style={{
        padding: '80px 40px',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <SectionLabel>Contacto</SectionLabel>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '32px',
        }}
      >
        {contacts.map((c) => (
          <div
            key={c.label}
            style={{
              background: 'var(--surface)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ fontSize: '20px' }}>{c.icon}</span>

            <span
              style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--muted)',
              }}
            >
              {c.label}
            </span>

            {c.href ? (
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  textDecoration: 'none',
                  wordBreak: 'break-all',
                  borderBottom: '1px solid transparent',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor = 'var(--border)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent'
                }}
              >
                {c.value}
              </a>
            ) : (
              <span style={{ fontSize: '14px', fontWeight: 500 }}>
                {c.value}
              </span>
            )}
          </div>
        ))}
      </div>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--text)',
          color: '#fff',
          textDecoration: 'none',
          padding: '12px 28px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 500,
          transition: 'opacity 0.2s, transform 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.85'
          e.currentTarget.style.transform = 'translateY(-1px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        Escribir por WhatsApp →
      </a>
    </section>
  )
}