import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import ExperienceItem from 'components/Main/ExperienceItem'

const EXPERIENCE_LIST = [
  { date: '2022.01 ~ ', title: '블로그 개발 시작' },
  { date: '2020.04 ~ 2020.11', title: '수포자는 수학을 포기한 사람의 준말입니다.' },
  { date: '2020.04 ~ 2020.11', title: '1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열' },
  { date: '2020.04 ~ 2020.11', title: 'return 하도록 solution 함수를 작성해주세요.' },
  { date: '2020.04 ~ 2020.11', title: 'answers가 주어졌을 때, 가장 많은 문제를 맞힌 사' },
  { date: '2022.01 ~ ', title: '블로그 개발 시작' },
  { date: '2020.04 ~ 2020.11', title: '수포자는 수학을 포기한 사람의 준말입니다.' },
  { date: '2020.04 ~ 2020.11', title: '1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열' },
  { date: '2020.04 ~ 2020.11', title: 'return 하도록 solution 함수를 작성해주세요.' },
  { date: '2020.04 ~ 2020.11', title: 'answers가 주어졌을 때, 가장 많은 문제를 맞힌 사' },
  { date: '2022.01 ~ ', title: '블로그 개발 시작' },
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
