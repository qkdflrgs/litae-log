'use client'

import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const theme = localStorage.getItem('litae-theme')
      if (theme !== null) {
        return theme === 'dark'
      } else if (window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
      }
    }
    return false
  })

  const toggleDarkMode = () => {
    darkMode
      ? localStorage.setItem('litae-theme', 'light')
      : localStorage.setItem('litae-theme', 'dark')
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const html = document.querySelector('html')

    if (darkMode) {
      html?.classList.add('dark')
    } else {
      html?.classList.remove('dark')
    }
  }, [darkMode])

  return { darkMode, toggleDarkMode }
}
