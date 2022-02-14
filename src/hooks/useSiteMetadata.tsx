import { useStaticQuery, graphql } from 'gatsby'

type useSiteMetadataType = {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
    }
  }
}

export const useSiteMetadata = () => {
  const { site }: useSiteMetadataType = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `,
  )

  return site.siteMetadata
}
