import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ExperienceItem from 'components/Main/ExperienceItem'

const EXPERIENCE_LIST = [
  { date: '2019.06 ~ ', title: '개발 시작' },
  { date: '2020.07 ~ 2020.12', title: '먼슬리키친 애플리케이션 개발' },
  { date: '2020.12 ~ 2021.04', title: '스탠다드 패스 애플리케이션 개발' },
  // { date: '2021.08 ~ 2021.09', title: '개인 포트폴리오 웹 애플리케이션 개발' },
  { date: '2021.10 ~ ', title: '코딩테스트 관련 알고리즘 공부' },
  { date: '2022.01 ~ ', title: '개인 블로그 개발' },
]

type ExperienceListProps = {}

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

const ExperienceList: FunctionComponent<ExperienceListProps> = ({}) => {
  return (
    <ExperienceListWrapper>
      {EXPERIENCE_LIST.map((data, index) => (
        <ExperienceItem key={index} {...data} />
      ))}
    </ExperienceListWrapper>
  )
}

export default ExperienceList
