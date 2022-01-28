import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import SubTitle from 'components/Common/SubTitle'
import ExperienceList from 'components/Main/ExperienceList'

type ExperienceProps = {}

const ExperienceWrapper = styled.div``

const Experience: FunctionComponent<ExperienceProps> = () => {
  return (
    <ExperienceWrapper>
      <SubTitle>Experience</SubTitle>
      <ExperienceList />
    </ExperienceWrapper>
  )
}

export default Experience
