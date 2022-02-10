import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Logo from 'components/Common/Logo'

const HeaderWrapper = styled.header`
  background: #333333;
  min-height: 80px;

  @media (max-width: 768px) {
    min-height: auto;
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
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0 20px;
  }
`

const List = styled.ul`
  display: flex;

  @media (max-width: 768px) {
    margin-top: 8px;
  }
`

const ListItem = styled(Link)`
  font-size: 18px;
  font-weight: 400;
  margin-right: 20px;
  color: white;
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: white;
    opacity: 0.7;
  }
  &.active {
    font-weight: 800;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo>Developer Min</Logo>
        <List>
          <ListItem to="/" activeClassName="active">
            Home
          </ListItem>
          <ListItem to="/project" activeClassName="active">
            Project
          </ListItem>
          <ListItem to="/blog" activeClassName="active">
            Blog
          </ListItem>
        </List>
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header
