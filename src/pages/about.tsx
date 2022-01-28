import React, { FunctionComponent } from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from 'components/Common/Layout'
import Title from 'components/Common/Title'
import SubTItle from 'components/Common/SubTitle'
import ExperienceList from 'components/Main/ExperienceList'

const PAGE_METADATA = {
  title: 'About',
  description: '나의 대해',
}

const EXPERIENCE_DATA = [
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

type AboutPageProps = PageProps & {
  data: {
    file: {
      publicURL: string
    }
  }
}

const AboutPage: FunctionComponent<AboutPageProps> = ({
  location: { href },
  data: {
    file: { publicURL },
  },
}) => {
  return (
    <Layout {...PAGE_METADATA} url={href} image={publicURL}>
      <Title>About</Title>
      <SubTItle>Experience</SubTItle>
      <ExperienceList experienceData={EXPERIENCE_DATA} />
    </Layout>
  )
}

export default AboutPage

export const getAboutData = graphql`
  query getAboutData {
    file(name: { eq: "profile-image" }) {
      publicURL
    }
  }
`
