import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

export type CareerItemProps = {
  title: string
  contents: string[]
}

const CareerItemWrapper = styled.div`
  width: 768px;
  display: grid;
  grid-template-columns: 240px 1fr;
  padding: 40px 20px;
  border-top: 1px solid black;

  &:last-of-type {
    margin-bottom: 0;
    border-bottom: 1px solid black;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 32px 12px;
  }
`

const Category = styled.span`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 32px;
  }
`

const CategoryItem = styled.div`
  font-size: 16px;
  margin-bottom: 18px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const CareerList: FunctionComponent<CareerItemProps> = ({ title, contents }) => {
  return (
    <CareerItemWrapper>
      <Category>{title}</Category>
      <div>
        {contents.map((str, index) => (
          <CategoryItem key={index}>{str}</CategoryItem>
        ))}
      </div>
    </CareerItemWrapper>
  )
}

export default CareerList
