import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type SubTitleProps = {}

const SubTitleWrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const SubTitleText = styled.span`
  font-size: 36px;
  font-weight: bold;
  border-bottom: 3px solid black;
  padding-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

const SubTitle: FunctionComponent<SubTitleProps> = ({ children }) => {
  return (
    <SubTitleWrapper>
      <SubTitleText>{children}</SubTitleText>
    </SubTitleWrapper>
  )
}

export default SubTitle
