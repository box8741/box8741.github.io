import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProjectInfoProps = {
  title: string
  skill: string[]
  period: string
  description: string
  content: string
  extraImage: [{ gatsbyImageData: IGatsbyImageData }]
}

const ProjectInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  width: 768px;
  margin: 0 auto 80px auto;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-row-gap: 24px;
    padding: 0 20px;
  }
`

const ProjectInfoContent = styled.div`
  margin: 60px 0;

  @media (max-width: 768px) {
    margin: 40px 0;
  }
`

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-top: 36px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Skill = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: white;
  background: black;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const Period = styled.div`
  font-size: 18px;
  color: #999999;
  margin-top: 6px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const Description = styled.div`
  font-size: 16px;
  margin-top: 24px;
  word-break: keep-all;
  line-height: 1.6;
`

const Content = styled.div`
  font-size: 16px;
  margin-top: 40px;
  word-break: keep-all;
  line-height: 1.6;
`

const ExtraImage = styled(GatsbyImage)`
  border-radius: 8px;
  box-shadow: 2px 2px 12px #888888;
`

const ProjectInfo: FunctionComponent<ProjectInfoProps> = ({
  title,
  skill,
  period,
  description,
  content,
  extraImage,
}) => {
  return (
    <ProjectInfoWrapper>
      <ProjectInfoContent>
        {skill.map(item => (
          <Skill>{item}</Skill>
        ))}
        <Title>{title}</Title>
        <Period>{period}</Period>
        <Description>{description}</Description>
        <Content>{content}</Content>
      </ProjectInfoContent>
      <div />
      {extraImage.map(item => (
        <ExtraImage image={item.gatsbyImageData} alt={'extra img'} />
      ))}
    </ProjectInfoWrapper>
  )
}

export default ProjectInfo
