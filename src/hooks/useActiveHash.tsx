import { MutableRefObject, useEffect, useRef, useState } from 'react'

const useActiveHash = (itemIds: string[]) => {
  const observer: MutableRefObject<IntersectionObserver | null> = useRef(null)
  const [activeId, setActiveId] = useState<string>('')
  const tempRef: MutableRefObject<Element | null> = useRef(null)

  useEffect(() => {
    observer.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -90% 0%` },
    )

    if (observer.current === null) return

    itemIds.forEach(id => {
      tempRef.current = document.getElementById(id)
      if (tempRef.current) observer.current?.observe(tempRef.current)
    })

    return () => {
      itemIds.forEach(id => {
        tempRef.current = document.getElementById(id)
        if (tempRef.current) observer.current?.unobserve(tempRef.current)
      })
    }
  }, [])

  return activeId
}

export default useActiveHash
