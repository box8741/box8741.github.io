import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const ThemeButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: red;
  border-radius: 50%;
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

  return <ThemeButtonWrapper onClick={handleTheme}></ThemeButtonWrapper>
}

export default ThemeButton
