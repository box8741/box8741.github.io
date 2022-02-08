import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type ProjectInfoProps = {
  title: string
  period: string
  description: string
  content: string
}

const ProjectInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 36px;
  width: 768px;
  margin: 0 auto;
`

const ProjectInfoContent = styled.div``

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-top: 36px;
`

const Period = styled.div`
  font-size: 18px;
  color: #999999;
  margin-top: 6px;
`

const Description = styled.div`
  font-size: 16px;
  margin-top: 24px;
  word-break: break-word;
  line-height: 1.6;
`

const Content = styled.div`
  font-size: 16px;
  margin-top: 40px;
  word-break: break-word;
  line-height: 1.6;
`

const ProjectInfo: FunctionComponent<ProjectInfoProps> = ({ title, period, description, content }) => {
  return (
    <ProjectInfoWrapper>
      <ProjectInfoContent>
        <Title>{title}</Title>
        <Period>{period}</Period>
        <Description>{description}</Description>
        <Content>{content}</Content>
      </ProjectInfoContent>
    </ProjectInfoWrapper>
  )
}

export default ProjectInfo
