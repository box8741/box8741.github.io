import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import CareerItem from 'components/Main/CareerItem'

type CareerListProps = {}

const CAREER_LIST = [
  {
    title: 'Skill',
    contents: ['TypeScript, JavaScript, React, React-Native, Redux, Gatsby, HTML/CSS', 'Android, Java'],
  },
  {
    title: 'Education',
    contents: ['미래능력개발교육원 졸업 (2019.06 ~ 2020.03)'],
  },
]

const CareerListWrapper = styled.div`
  width: 768px;
  margin: 120px auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 12px;
  }
`

const CareerList: FunctionComponent<CareerListProps> = () => {
  return (
    <CareerListWrapper>
      {CAREER_LIST.map((career, index) => (
        <CareerItem key={index} {...career} />
      ))}
    </CareerListWrapper>
  )
}

export default CareerList
