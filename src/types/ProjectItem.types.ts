import { IGatsbyImageData } from 'gatsby-plugin-image'

export type ProjectListItemType = {
  content: string
  period: string
  description: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  title: string
}

export type ProjectListType = {
  node: {
    childStaticJson: {
      app: ProjectListItemType[]
      web: ProjectListItemType[]
    }
  }
}
