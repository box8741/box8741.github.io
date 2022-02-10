import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Github } from '@emotion-icons/bootstrap'

const FooterWrapper = styled.footer`
  background: #333333;
`

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
  color: white;
`

const GithubIcon = styled(Github)`
  width: 30px;
  color: white;
  cursor: pointer;
`

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>Copyright 2022. Developer Min</Copyright>
        <Link target={'_blank'} to="https://github.com/box8741">
          <GithubIcon />
        </Link>
      </FooterContent>
    </FooterWrapper>
  )
}

export default Footer
