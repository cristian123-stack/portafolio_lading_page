import React from 'react'
import SectionLabel from './SectionLabel'

const experiences = [
  {
    date: 'Actualidad',
    title: 'Sales and Support Analyst',
    company: 'Elipse AI · Chile',
    desc: 'Soporte operativo y comercial en proyectos de IA conversacional. Desarrollo e implementación de chatbots utilizando Verbio y Voximplant, integración de modelos LLM y arquitecturas RAG, análisis de datos, generación de reportes SQL y Excel, gestión de clientes y coordinación entre equipos técnicos y comerciales para entornos de PoC y producción.',
    tags: ['LLM', 'RAG', 'SQL', 'Excel', 'Voximplant', 'Verbio', 'Chatbots', 'IA'],
  },
  {
    date: 'Experiencia real',
    title: 'Full Stack Developer',
    company: 'Entorno productivo · Chile',
    desc: 'Desarrollo de funcionalidades backend y frontend en entornos reales. Creación de consultas SQL complejas, consumo e integración de APIs externas, generación de reportes y trabajo colaborativo con equipos técnicos y de negocio.',
    tags: ['Python', 'Django', 'React', 'SQL', 'APIs', 'JavaScript'],
  },
  {
    date: 'Automatización',
    title: 'Automatización de procesos',
    company: 'Proyectos · Chile',
    desc: 'Desarrollo de scripts y aplicaciones para automatización de procesos internos y soporte a sistemas productivos. Reducción de tiempos manuales y mejora de eficiencia operativa.',
    tags: ['Python', 'SQL', 'Reportes'],
  },
]

export default function Experience() {
  return (
    <section id="experiencia" style={{ padding: '80px 40px', maxWidth: '900px', margin: '0 auto' }}>
      <SectionLabel>Experiencia</SectionLabel>
      {experiences.map((exp, i) => (
        <div key={i} style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          gap: '32px',
          padding: '32px 0',
          borderBottom: i < experiences.length - 1 ? '1px solid var(--border)' : 'none',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--muted)', paddingTop: '2px' }}>
            {exp.date}
          </div>
          <div>
            <div style={{ fontSize: '17px', fontWeight: 500, marginBottom: '4px' }}>{exp.title}</div>
            <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '12px' }}>{exp.company}</div>
            <div style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{exp.desc}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
              {exp.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--muted)',
                  border: '1px solid var(--border)', padding: '2px 8px', borderRadius: '4px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
