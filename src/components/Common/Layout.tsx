import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import GlobalStyle from 'components/Common/GlobalStyle'
import { useSiteMetadata } from 'hooks/useSiteMetadata'

type LayoutProps = {
  title?: string
  description?: string
  url?: string
  image?: string
  children: ReactNode
}

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background: var(--bg);
  color: var(--font);
`

// title, description, url, image, children
const Layout: FunctionComponent<LayoutProps> = ({ children, ...args }) => {
  const siteMetadata = useSiteMetadata()

  const { title, description, url, image } = {
    title: args?.title || siteMetadata.title,
    description: args?.description || siteMetadata.description,
    url: args?.url || siteMetadata.siteUrl,
    image: args?.image || undefined,
  }

  return (
    <LayoutWrapper>
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

        <meta name="google-site-verification" content="ZmiMQRLe6kmsVx-jccgpxXcGHOhZTzQ_mAJ9Kb7zNUI" />
        <meta name="naver-site-verification" content="19f7ee702bcdcf8425e0485d876461ee8b337991" />

        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      {children}
    </LayoutWrapper>
  )
}

export default Layout
