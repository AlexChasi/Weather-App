import { useEffect, useState } from 'react'
import './header.css'

export function ModeButton () {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // si el theme del localstorage es dark o si no hay tema en localstorage y el prefers-color-scheme de el usuario es dark se setea en dark sino no
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (!document) return
    // la forma mas simple es modificar las variables de css para no tener que cambiar el color de cada elemento uno a uno

    const root = document.documentElement
    root.style.setProperty('--background-gradient', `var(--${theme}-gradient)`)
    root.style.setProperty('--card-gradient', `var(--${theme}-gradient-card)`)
    root.style.setProperty('--text-color', `var(--${theme}-text)`)
    root.style.setProperty('--button-color', `var(--${theme}-button-color)`)
  }, [theme])

  const handleClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return <button className='mode-button' onClick={handleClick}>
    <div className={`circle ${theme}`} />
  </button>
}
