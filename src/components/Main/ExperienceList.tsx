import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ExperienceItem, { ExperienceItemProps } from 'components/Main/ExperienceItem'

type ExperienceListProps = {
  experienceData: ExperienceItemProps[]
}

const ExperienceListWrapper = styled.ul`
  width: 768px;
  margin: 0 auto;
  padding-left: 20px;
  list-style: none;
  border-left: 2px solid black;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    border-left: none;
  }
`

const ExperienceList: FunctionComponent<ExperienceListProps> = ({ experienceData }) => {
  return (
    <ExperienceListWrapper>
      {experienceData.map((data, index) => (
        <ExperienceItem key={index} {...data} />
      ))}
    </ExperienceListWrapper>
  )
}

export default ExperienceList
