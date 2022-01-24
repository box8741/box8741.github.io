import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  background: #fafafa;
  height: 200px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2022 Developer Min, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer
