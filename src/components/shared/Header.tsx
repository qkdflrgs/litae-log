'use client'

import Image from 'next/image'
import Link from 'next/link'
import LightIcon from '/public/svg/light.svg'
import MoonIcon from '/public/svg/moon.svg'
import MenuIcon from '/public/svg/menu.svg'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Icon from './Icon'
import useDarkMode from '@/hooks/useDarkMode'
import DarkModeButton from './ThemeButton'

export default function Header() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { darkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset')
  }, [isOpen])

  return (
    <header className="bg-light-primary dark:bg-dark-dp00">
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-light-primary dark:bg-dark-dp08 z-50">
          <div className="w-full h-full flex flex-col justify-center items-center gap-12">
            <button
              className="text-white text-[18px] font-semibold"
              onClick={() => {
                router.push('/')
                setIsOpen(false)
              }}
            >
              HOME
            </button>
            <button
              className="text-white text-[18px] font-semibold"
              onClick={() => {
                router.push('/about')
                setIsOpen(false)
              }}
            >
              ABOUT
            </button>
            <button
              className="text-white text-[18px] font-semibold"
              onClick={() => {
                router.push('/project')
                setIsOpen(false)
              }}
            >
              PROJECT
            </button>
            <button
              className="text-white text-[18px] font-semibold"
              onClick={() => {
                router.push('/blog')
                setIsOpen(false)
              }}
            >
              BLOG
            </button>
            <button onClick={() => setIsOpen(false)}>
              <Icon className="fill-white w-[24px] h-[24px]" type="close" />
            </button>
            <DarkModeButton
              isDarkMode={darkMode}
              toggleTheme={toggleDarkMode}
            />
          </div>
        </div>
      )}
      <div className="max-w-[1024px] flex justify-between mx-auto items-center py-2 sm:py-4 px-8">
        <h1>
          <Link href="/">
            <Image
              className="w-14 sm:w-[64px] lg:w-[80px]"
              src="/logo_w.png"
              alt="로고 이미지"
              width={80}
              height={42}
            />
          </Link>
        </h1>
        <div className="hidden lg:flex items-center gap-8">
          <nav>
            <ul className="flex gap-6">
              <li className="flex justify-center w-[80px]">
                <Link
                  className="hover:text-gray-200 hover:font-semibold text-white"
                  href="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="flex justify-center w-[80px]">
                <Link
                  className="hover:text-gray-200 hover:font-semibold text-white"
                  href="/project"
                >
                  PROJECT
                </Link>
              </li>
              <li className="flex justify-center w-[80px]">
                <Link
                  className="hover:text-gray-200 hover:font-semibold text-white"
                  href="/blog"
                >
                  BLOG
                </Link>
              </li>
            </ul>
          </nav>
          <DarkModeButton isDarkMode={darkMode} toggleTheme={toggleDarkMode} />
        </div>
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon fill="white" />
        </button>
      </div>
    </header>
  )
}
