import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type ExperienceItemProps = {
  date: string
  title: string
}

const ExperienceItemWrapper = styled.li`
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  margin-bottom: 14px;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const Date = styled.span`
  font-size: 18px;
  color: #999999;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: black;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const ExperienceItem: FunctionComponent<ExperienceItemProps> = ({ date, title }) => {
  return (
    <ExperienceItemWrapper>
      <Date>{date}</Date>
      <Title>{title}</Title>
    </ExperienceItemWrapper>
  )
}

export default ExperienceItem
