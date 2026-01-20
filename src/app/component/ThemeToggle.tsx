 // eslint-disable-next-line @typescript-eslint/no-unused-expressions
 'use client'

import { useEffect, useState } from 'react'


export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initial = saved ?? (prefersDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.dataset.theme = initial
  }, [])

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem('theme', next)
  }

  return (
    <button
      onClick={toggle}
      style={{
        position: 'absolute',
        top: 16,
        right: 16,
        padding: '6px 10px',
        borderRadius: 6,
        cursor: 'pointer',
      }}
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}