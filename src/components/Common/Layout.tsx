import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import GlobalStyle from 'components/Common/GlobalStyle'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'

type LayoutProps = {
  title: string
  description: string
  url: string
  image?: string
  children: ReactNode
}

const Content = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const Layout: FunctionComponent<LayoutProps> = ({ title, description, url, image, children }) => {
  return (
    <Content>
      <Helmet>
        <title>{title}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@Min" />
        <meta name="twitter:creator" content="@Min" />

        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </Content>
  )
}

export default Layout
