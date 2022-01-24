import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

type TitleProps = {}

const Logo = styled.h2`
  font-weight: 900;
`

const Title: FunctionComponent<TitleProps> = ({ children }) => {
  return <Logo>{children}</Logo>
}

export default Title
