import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Title from 'components/Common/Title'

const HeaderWrapper = styled.header`
  width: 768px;
  min-height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 60px;
    padding: 0 20px;
  }
`

const List = styled.ul`
  display: flex;
  margin-left: auto;
`

const ListItem = styled(Link)`
  margin-right: 20px;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Developer Min</Title>
      <List>
        <ListItem to="/">Home</ListItem>
        <ListItem to="/about">About</ListItem>
        <ListItem to="/blog">Blog</ListItem>
      </List>
    </HeaderWrapper>
  )
}

export default Header
