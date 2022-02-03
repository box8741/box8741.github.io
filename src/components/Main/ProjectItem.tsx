import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

import { ProjectListItemType } from 'types/ProjectItem.types'

type ProjectListProps = {
  data: ProjectListItemType
}

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`

const Thumbnail = styled(GatsbyImage)`
  width: 100%;
  height: 200px;
  transition: 0.2s ease;
`

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-top: 14px;
  transition: 0.2s ease;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Description = styled.span`
  display: -webkit-box;
  font-size: 15px;
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  transition: 0.2s ease;
`

const ProjectListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover ${Title} {
    opacity: 0.4;
  }
  &:hover ${Thumbnail} {
    transform: scale(1.1);
  }
`

const ProjectList: FunctionComponent<ProjectListProps> = ({
  data: {
    title,
    thumbnail: {
      childImageSharp: { gatsbyImageData },
    },
    description,
  },
}) => {
  return (
    <ProjectListItemWrapper>
      <ThumbnailWrapper>
        <Thumbnail image={gatsbyImageData} alt="thumbnail" />
      </ThumbnailWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ProjectListItemWrapper>
  )
}

export default ProjectList
