import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="max-w-[960px] h-[150px] flex justify-between mx-auto border-t-[1px] border-black px-8">
      <div className="flex flex-col gap-6 justify-center">
        <Link href="/">
          <Image src="/logo.png" alt="로고 이미지" width={80} height={42} />
        </Link>
        <span className="text-[14px] text-[#5D5D5D]">©By LITAE_LOG</span>
      </div>
      <nav className="flex flex-col gap-6 justify-center items-end">
        <div className="flex gap-8">
          <Link href="/">HOME</Link>
          <Link href="/project">PROJECT</Link>
          <Link href="/blog">BLOG</Link>
        </div>
        <div className="flex gap-4"></div>
      </nav>
    </footer>
  )
}
