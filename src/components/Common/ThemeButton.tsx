import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const ThemeButtonWrapper = styled.div<{ active: boolean }>`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: ${({ active }) => (active ? 'var(--shadow-enabled)' : 'var(--shadow-disabled)')};
  cursor: pointer;
`

const ThemeButton = () => {
  const [theme, setTheme] = useState<string | null>()

  useEffect(() => {
    setTheme(localStorage.getItem('theme'))
  }, [])

  const handleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light'
    document.body.className = currentTheme
    localStorage.setItem('theme', currentTheme)
    setTheme(currentTheme)
  }

  return (
    <ThemeButtonWrapper onClick={handleTheme} active={theme === 'light'}>
      {theme === 'dark' ? '🌑' : '🌕'}
    </ThemeButtonWrapper>
  )
}

export default ThemeButton
