import Image from 'next/image'
import Link from 'next/link'
import Icon from './Icon'

export default function Header() {
  return (
    <header>
      <div className="max-w-[1024px] flex justify-between mx-auto items-center py-[24px] px-8">
        <h1>
          <Link href="/">
            <Image src="/logo.png" alt="로고 이미지" width={80} height={42} />
          </Link>
        </h1>
        <div className="hidden sm:flex items-center gap-8">
          <nav>
            <ul className="flex gap-6">
              <li className="flex justify-center w-[80px]">
                <Link
                  className="hover:text-green-800 hover:font-semibold"
                  href="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="flex justify-center w-[80px]">
                <Link
                  className="hover:text-green-800 hover:font-semibold"
                  href="/project"
                >
                  PROJECT
                </Link>
              </li>
              <li className="flex justify-center w-[80px]">
                <Link
                  className="hover:text-green-800 hover:font-semibold"
                  href="/blog"
                >
                  BLOG
                </Link>
              </li>
            </ul>
          </nav>
          <div className="w-[72px] h-[32px] bg-green-800 rounded-3xl relative">
            <button className="w-[24px] h-[24px] bg-white rounded-full absolute top-[4px] left-[16px]"></button>
          </div>
        </div>
        <button className="sm:hidden"></button>
      </div>
    </header>
  )
}
