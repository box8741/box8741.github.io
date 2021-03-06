import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Github } from '@emotion-icons/bootstrap'

const FooterWrapper = styled.footer``

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 768px;
  margin: 0 auto;
  padding: 40px 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`

const Copyright = styled.span`
  font-size: 16px;
`

const GithubIcon = styled(Github)`
  width: 30px;
  cursor: pointer;
`

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>Copyright 2022. Developer Min</Copyright>
        <Link target={'_blank'} to="https://github.com/box8741" aria-label="github link">
          <GithubIcon />
        </Link>
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer
