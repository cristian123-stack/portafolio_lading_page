import React from 'react'

export default function Hero() {
  return (
    <section id="inicio" style={{
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      padding: '80px 40px 60px',
      maxWidth: '900px',
      margin: '0 auto',
    }}>
      <div style={{ width: '100%' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--green)',
          background: 'var(--green-bg)',
          padding: '4px 12px',
          borderRadius: '100px',
          marginBottom: '32px',
          fontWeight: 500,
        }}>
          <span style={{
            width: '6px', height: '6px',
            background: 'var(--green)',
            borderRadius: '50%',
            display: 'inline-block',
            animation: 'pulse 2s infinite',
          }} />
          Disponible para trabajar · Linares, Chile
        </div>

        <h1 style={{
          fontSize: 'clamp(40px, 7vw, 72px)',
          fontWeight: 300,
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          color: 'var(--text)',
          marginBottom: '24px',
        }}>
          Hola, soy<br />
          <strong style={{ fontWeight: 600 }}>Cristian Muñoz</strong>
        </h1>

        <p style={{
          fontSize: '18px',
          color: 'var(--muted)',
          maxWidth: '520px',
          lineHeight: 1.65,
          marginBottom: '48px',
          fontWeight: 300,
        }}>
          Full Stack Developer con experiencia en desarrollo web, automatización de procesos y sistemas productivos. Construyo aplicaciones robustas de principio a fin.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#contacto" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--text)', color: '#fff',
            textDecoration: 'none',
            padding: '12px 24px', borderRadius: '8px',
            fontSize: '14px', fontWeight: 500,
            transition: 'opacity 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Contáctame →
          </a>
          <a href="https://github.com/cristian123-stack" target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent', color: 'var(--text)',
            textDecoration: 'none',
            padding: '12px 24px', borderRadius: '8px',
            fontSize: '14px', fontWeight: 500,
            border: '1px solid var(--border)',
            transition: 'background 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-light)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            GitHub ↗
          </a>
        </div>
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </section>
  )
}
