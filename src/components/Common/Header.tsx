import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Logo from 'components/Common/Logo'

const HeaderWrapper = styled.header`
  width: 768px;
  min-height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 60px;
    padding: 0 20px;
  }
`

const List = styled.ul`
  display: flex;
  margin-left: auto;
`

const ListItem = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  margin-right: 20px;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    opacity: 0.7;
  }
  &.active {
    font-weight: 800;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Developer Min</Logo>
      <List>
        <ListItem to="/" activeClassName="active">
          Home
        </ListItem>
        <ListItem to="/about" activeClassName="active">
          About
        </ListItem>
        <ListItem to="/blog" activeClassName="active">
          Blog
        </ListItem>
      </List>
    </HeaderWrapper>
  )
}

export default Header
