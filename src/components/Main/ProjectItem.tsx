import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import { ProjectListItemType } from 'types/ProjectItem.types'

type ProjectListProps = {
  data: ProjectListItemType['node']
  index: number
}

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: 2px 2px 8px #888888;
  border-radius: 6px;
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

const ProjectListItemWrapper = styled(Link)`
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
    type,
    title,
    description,
    thumbnail: { gatsbyImageData },
  },
  index,
}) => {
  return (
    <ProjectListItemWrapper to={`/project/${type}_${index}`}>
      <ThumbnailWrapper>
        <Thumbnail image={gatsbyImageData} alt="thumbnail" />
      </ThumbnailWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ProjectListItemWrapper>
  )
}

export default ProjectList
