import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'

type LayoutProps = {
  title?: string
  description?: string
  url?: string
  image?: string
  children: ReactNode
}

const TemplateWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const Content = styled.main`
  @media (max-width: 768px) {
    overflow: auto;
  }
`

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <TemplateWrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </TemplateWrapper>
  )
}

export default Layout
