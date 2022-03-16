import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Logo from 'components/Common/Logo'
import ThemeButton from 'components/Common/ThemeButton'

const HeaderWrapper = styled.header`
  min-height: 100px;

  @media (max-width: 768px) {
    min-height: 80px;
    padding: 12px 0;
  }
`

const HeaderContent = styled.div`
  width: 768px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const List = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 8px;
  }
`

const ListItem = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
  color: var(--font);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo>Developer Min</Logo>
        <List>
          <ListItem to="/blog">Blog</ListItem>
          <ThemeButton />
        </List>
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header
