import { useState, useMemo, MutableRefObject, useRef, useEffect } from 'react'
import { PostListItemType } from 'types/PostItem.types'

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: PostListItemType[]
}

const NUMBER_OF_ITEMS_PER_PAGE = 10

const useInfiniteScroll = (selectedCategory: string, posts: PostListItemType[]): useInfiniteScrollType => {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)

  const [count, setCount] = useState<number>(1)

  const postListByCategory = useMemo<PostListItemType[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }) => (selectedCategory !== 'All' ? categories.includes(selectedCategory) : true),
      ),
    [selectedCategory],
  )

  const observer: IntersectionObserver = new IntersectionObserver(([entries], observer) => {
    if (!entries.isIntersecting) return
    observer.unobserve(entries.target)
    setCount(value => value + 1)
  })

  useEffect(() => setCount(1), [selectedCategory])

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current?.children.length === 0 ||
      containerRef.current === null
    )
      return

    observer.observe(containerRef.current?.children[containerRef.current.children.length - 1])
    return () => observer.disconnect()
  }, [count, selectedCategory])

  return { containerRef, postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE) }
}

export default useInfiniteScroll
