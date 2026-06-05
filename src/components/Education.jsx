import React from 'react'
import SectionLabel from './SectionLabel'

const education = [
  {
    degree: 'Desarrollador Full Stack JavaScript',
    school: 'Desafío Latam',
    period: '2025 – 2026',
    status: 'En curso',
  },
  {
    degree: 'Analista Programador',
    school: 'INACAP',
    period: '2023 – 2024',
    status: 'Titulado',
  },
  {
    degree: 'Técnico Superior en Administración de Empresas',
    school: 'Universidad de Talca',
    period: null,
    status: 'Titulado',
  },
]

const statusColors = {
  'En curso': { bg: '#EAF3DE', color: '#3B6D11' },
  'Titulado': { bg: '#F0EEE8', color: '#5A574F' },
}

export default function Education() {
  return (
    <section id="educacion" style={{ padding: '80px 40px', maxWidth: '900px', margin: '0 auto' }}>
      <SectionLabel>Educación</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {education.map((edu, i) => (
          <div key={i} style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '24px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '4px' }}>{edu.degree}</div>
              <div style={{ fontSize: '14px', color: 'var(--muted)' }}>{edu.school}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px', flexShrink: 0 }}>
              {edu.period && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--muted)' }}>
                  {edu.period}
                </span>
              )}
              <span style={{
                fontSize: '11px', fontWeight: 500, padding: '3px 10px',
                borderRadius: '100px',
                background: statusColors[edu.status]?.bg || '#F0EEE8',
                color: statusColors[edu.status]?.color || '#5A574F',
                fontFamily: 'var(--font-mono)',
              }}>
                {edu.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
