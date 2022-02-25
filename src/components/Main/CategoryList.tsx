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
  margin-right: 14px;
  padding: 3px 12px;
  font-size: 14px;
  font-weight: bold;
  color: var(--font-gray);
  cursor: pointer;
  border-radius: 50px;
  box-shadow: ${({ active }) => (active ? 'var(--shadow-btn-enabled)' : 'var(--shadow-btn-disabled)')};

  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: var(--font-gray);
    box-shadow: ${({ active }) => !active && 'var(--shadow-btn-hover)'};
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = ({ selectedCategory, categoryList }) => {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => {
        return (
          <CategoryItem to={`/blog/?category=${name}`} active={name === selectedCategory} key={name}>
            {name}({count})
          </CategoryItem>
        )
      })}
    </CategoryListWrapper>
  )
}

export default CategoryList
