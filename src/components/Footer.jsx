import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '28px 40px',
      maxWidth: '900px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '13px',
      color: 'var(--muted)',
    }}>
      <span>© {new Date().getFullYear()} Cristian Alejandro Muñoz Méndez</span>
      <a href="https://github.com/cristian123-stack" target="_blank" rel="noreferrer"
        style={{ color: 'var(--text)', textDecoration: 'none', fontWeight: 500 }}>
        GitHub ↗
      </a>
    </footer>
  )
}
