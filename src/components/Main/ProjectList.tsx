import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ProjectItem from 'components/Main/ProjectItem'
import { ProjectListItemType } from 'types/ProjectItem.types'

type ProjectListProps = {
  list: ProjectListItemType[]
}

const ProjectListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 36px;
  grid-row-gap: 50px;
  width: 768px;
  margin: 0 auto 80px auto;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 60px;
    padding: 0 20px;
  }
`

const ProjectList: FunctionComponent<ProjectListProps> = ({ list }) => {
  return (
    <ProjectListWrapper>
      {list.map(({ node }, index) => (
        <ProjectItem data={node} key={node.id} index={index} />
      ))}
    </ProjectListWrapper>
  )
}

export default ProjectList
