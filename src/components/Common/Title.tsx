import { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const TitleWrapper = styled.div`
  display: flex;
  width: 768px;
  margin: 40px auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    margin: 20px auto;
  }
`

const TitleText = styled.span`
  left: 12px;
  font-size: 80px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 60px;
    left: 32px;
  }
`

const Title: FunctionComponent = ({ children }) => {
  return (
    <TitleWrapper>
      <TitleText>{children}</TitleText>
    </TitleWrapper>
  )
}

export default Title
