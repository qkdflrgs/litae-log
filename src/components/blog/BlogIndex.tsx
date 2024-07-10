import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface BlogIndexProps {
  indexData: string[]
}

export default function BlogIndex({ indexData }: BlogIndexProps) {
  const [currentTitle, setCurrentTitle] = useState<number>()

  function getElementTopPosition(element: Element) {
    const rect = element.getBoundingClientRect()
    return rect.top
  }

  useEffect(() => {
    const handleScroll = () => {
      const titles = document.querySelectorAll('h2')

      titles.forEach((node, index) => {
        if (
          getElementTopPosition(node) <= 30 &&
          getElementTopPosition(node) > -node.clientHeight
        ) {
          setCurrentTitle(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <aside className="w-[240px] p-4 max-h-[400px] h-full hidden sticky top-[30px] mt-[180px] lg:flex flex-col gap-4 border border-light-primary dark:border-dark-primary rounded-lg">
      <span className="text-[18px] font-semibold text-light-primary dark:text-dark-primary">
        INDEX
      </span>
      <ul className="flex flex-col gap-2 text-[13px] text-gray-400 dark:text-gray-400">
        {indexData.map((title, index) => (
          <li
            key={title.replaceAll(' ', '')}
            className={`group ${currentTitle === index ? 'font-bold text-black dark:text-white' : 'pl-2'}`}
            data-level={index}
          >
            <Link href={`#${title.replaceAll(' ', '')}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
