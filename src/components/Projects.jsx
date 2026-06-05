import React, { useEffect, useState } from 'react'
import SectionLabel from './SectionLabel'

const GITHUB_USER = 'cristian123-stack'

const langColors = {
  JavaScript: '#F7DF1E',
  Python: '#3572A5',
  HTML: '#E34C26',
  CSS: '#563D7C',
  TypeScript: '#3178C6',
  PHP: '#777BB4',
  Shell: '#89E051',
  default: '#8B8B8B',
}

function LangDot({ lang }) {
  const color = langColors[lang] || langColors.default
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: 'var(--muted)' }}>
      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, display: 'inline-block', flexShrink: 0 }} />
      {lang}
    </span>
  )
}

function RepoCard({ repo }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'rgba(26,25,23,0.25)' : 'var(--border)'}`,
        borderRadius: '12px',
        padding: '20px',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'border-color 0.2s, transform 0.2s',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
        <span style={{ fontWeight: 500, fontSize: '15px', color: 'var(--text)' }}>{repo.name}</span>
        <span style={{ fontSize: '18px', flexShrink: 0, opacity: hovered ? 1 : 0.5, transition: 'opacity 0.2s' }}>↗</span>
      </div>
      {repo.description && (
        <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
          {repo.description}
        </p>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto', paddingTop: '8px' }}>
        {repo.language && <LangDot lang={repo.language} />}
        {repo.stargazers_count > 0 && (
          <span style={{ fontSize: '12px', color: 'var(--muted)' }}>⭐ {repo.stargazers_count}</span>
        )}
        {repo.forks_count > 0 && (
          <span style={{ fontSize: '12px', color: 'var(--muted)' }}>🍴 {repo.forks_count}</span>
        )}
      </div>
    </a>
  )
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=9&type=owner`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.filter(r => !r.fork).slice(0, 9))
        } else {
          setError(true)
        }
        setLoading(false)
      })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  return (
    <section id="proyectos" style={{ padding: '80px 40px', maxWidth: '900px', margin: '0 auto' }}>
      <SectionLabel>Proyectos</SectionLabel>

      {loading && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} style={{
              height: '140px', background: 'var(--surface)',
              border: '1px solid var(--border)', borderRadius: '12px',
              animation: 'shimmer 1.5s infinite',
            }} />
          ))}
        </div>
      )}

      {error && (
        <div style={{
          padding: '32px', background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: '12px', textAlign: 'center',
        }}>
          <p style={{ color: 'var(--muted)', fontSize: '14px' }}>
            No se pudieron cargar los repositorios.{' '}
            <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer"
              style={{ color: 'var(--text)', fontWeight: 500 }}>
              Ver en GitHub ↗
            </a>
          </p>
        </div>
      )}

      {!loading && !error && repos.length > 0 && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {repos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
          </div>
          <div style={{ marginTop: '28px', textAlign: 'center' }}>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-mono)', fontSize: '13px',
                color: 'var(--muted)', textDecoration: 'none',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '2px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              Ver todos los repositorios en GitHub →
            </a>
          </div>
        </>
      )}

      <style>{`
        @keyframes shimmer {
          0% { opacity: 1 }
          50% { opacity: 0.5 }
          100% { opacity: 1 }
        }
      `}</style>
    </section>
  )
}
