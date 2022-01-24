import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

type TitleProps = {}

const Logo = styled(Link)`
  font-size: 26px;
  font-weight: 900;
`

const Title: FunctionComponent<TitleProps> = ({ children }) => {
  return <Logo to="/">{children}</Logo>
}

export default Title
