import React, { FunctionComponent } from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from 'components/Common/Layout'
import Title from 'components/Common/Title'
import Experience from 'components/Main/Experience'

const PAGE_METADATA = {
  title: 'About',
  description: '나의 대해',
}

type AboutPageProps = PageProps & {
  data: {
    file: {
      publicURL: string
    }
  }
}

const AboutPage: FunctionComponent<AboutPageProps> = ({
  location: { href },
  data: {
    file: { publicURL },
  },
}) => {
  return (
    <Layout {...PAGE_METADATA} url={href} image={publicURL}>
      <Title>About</Title>
      <Experience />
    </Layout>
  )
}

export default AboutPage

export const getAboutData = graphql`
  query getAboutData {
    file(name: { eq: "profile-image" }) {
      publicURL
    }
  }
`
