import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const html = document.querySelector('html')
    darkMode ? html?.classList.add('dark') : html?.classList.remove('dark')
  }, [darkMode])

  return { darkMode, toggleDarkMode }
}
