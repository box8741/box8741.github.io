import { IGatsbyImageData } from 'gatsby-plugin-image'

export type ProjectListItemType = {
  node: {
    id: string
    type: string
    title: string
    description: string
    period: string
    content: string
    // thumbnail: {
    //   childImageSharp: {
    //     gatsbyImageData: IGatsbyImageData
    //   }
    // }
    thumbnail: string
  }
}
