'use client'

import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

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
