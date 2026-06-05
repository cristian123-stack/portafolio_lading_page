import React from 'react'

export default function SectionLabel({ children }) {
  return (
    <div style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
      marginBottom: '40px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    }}>
      {children}
      <span style={{ flex: 1, height: '1px', background: 'var(--border)', maxWidth: '200px' }} />
    </div>
  )
}
