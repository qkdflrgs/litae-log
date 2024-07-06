'use client'

import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  const toggleDarkMode = () => {
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
