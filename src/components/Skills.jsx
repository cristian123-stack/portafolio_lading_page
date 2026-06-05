import React from 'react'
import SectionLabel from './SectionLabel'

const skillGroups = [
  { title: 'Backend', tags: ['Python', 'Django', 'Express', 'REST APIs', 'PHP'] },
  { title: 'Frontend', tags: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Datos', tags: ['SQL', 'Consultas', 'Reportes'] },
  { title: 'Herramientas', tags: ['Git', 'GitHub', 'Control de versiones'] },
]

export default function Skills() {
  return (
    <section id="habilidades" style={{ padding: '80px 40px', maxWidth: '900px', margin: '0 auto' }}>
      <SectionLabel>Stack técnico</SectionLabel>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1px',
        background: 'var(--border)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        {skillGroups.map(group => (
          <div key={group.title} style={{ background: 'var(--surface)', padding: '24px' }}>
            <div style={{
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '16px',
            }}>
              {group.title}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {group.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  background: 'var(--accent-light)',
                  color: 'var(--text)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
