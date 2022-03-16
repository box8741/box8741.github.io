import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

type LogoProps = {}

const LogoWrapper = styled(Link)`
  font-size: 26px;
  font-weight: 900;
  color: var(--font);
`

const Logo: FunctionComponent<LogoProps> = ({ children }) => {
  return <LogoWrapper to="/">{children}</LogoWrapper>
}

export default Logo
