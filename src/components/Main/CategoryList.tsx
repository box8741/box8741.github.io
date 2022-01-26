import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link, GatsbyLinkProps } from 'gatsby'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

type CategoryItemProps = Omit<GatsbyLinkProps<{}>, 'ref'> & {
  active: boolean
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 20px auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

const CategoryItem = styled(({ active, ...props }: CategoryItemProps) => <Link {...props} />)`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = ({ selectedCategory, categoryList }) => {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => {
        return (
          <CategoryItem to={`/blog/?category=${name}`} active={name === selectedCategory} key={name}>
            #{name}({count})
          </CategoryItem>
        )
      })}
    </CategoryListWrapper>
  )
}

export default CategoryList
