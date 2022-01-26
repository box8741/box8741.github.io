import { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'

const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  width: 768px;
  margin: 90px auto 130px auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    margin: 60px auto 60px auto;
  }
`

const CubeIcon = styled(FontAwesomeIcon)`
  font-size: 60px;
  opacity: 0.4;

  @media (max-width: 768px) {
    width: 40px;
  }
`

const TitleText = styled.span`
  position: absolute;
  left: 20px;
  font-size: 80px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 60px;
  }
`

const Title: FunctionComponent = ({ children }) => {
  return (
    <TitleWrapper>
      <CubeIcon icon={faCube} />
      <TitleText>{children}</TitleText>
    </TitleWrapper>
  )
}

export default Title
