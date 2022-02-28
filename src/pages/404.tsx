import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { PageProps } from 'gatsby'
import Layout from 'components/Common/Layout'
import PageTemplate from 'components/Common/PageTemplate'

type NotFoundPageProps = PageProps & {}

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 768px;
  margin: 0 auto;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`

const NotFoundText = styled.div`
  font-size: 150px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 100px;
  }
`

const NotFoundTitle = styled.div`
  font-size: 50px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const NotFoundDescription = styled.div`
  font-size: 25px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const NotFoundPage: FunctionComponent<NotFoundPageProps> = () => {
  return (
    <Layout>
      <PageTemplate>
        <NotFoundPageWrapper>
          <NotFoundText>404</NotFoundText>
          <NotFoundTitle>페이지를 찾을 수 없습니다.</NotFoundTitle>
          <NotFoundDescription>올바른 URL을 입력했는지 확인해주세요.</NotFoundDescription>
        </NotFoundPageWrapper>
      </PageTemplate>
    </Layout>
  )
}

export default NotFoundPage
