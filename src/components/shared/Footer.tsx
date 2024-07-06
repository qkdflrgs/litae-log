import Image from 'next/image'
import Link from 'next/link'
import MailIcon from '/public/svg/mail.svg'
import GithubIcon from '/public/svg/github.svg'
import LinkedinIcon from '/public/svg/linkedin.svg'
import LogoIcon from '/public/svg/logo.svg'

export default function Footer() {
  return (
    <footer className="max-w-[960px] h-[150px] flex justify-between mx-6 lg:mx-auto border-t-[1px] border-light-border px-6 lg:px-8 dark:border-dark-dp16">
      <div className="flex flex-col gap-6 justify-center">
        <Link href="/">
          <LogoIcon className="w-14 sm:w-[64px] lg:w-[80px] h-[60px] fill-light-primary dark:fill-dark-primary" />
        </Link>
        <span className="text-[12px] sm:text-[14px] text-[#5D5D5D] dark:text-gray-400">
          ©By LITAE_LOG
        </span>
      </div>
      <nav className="flex flex-col gap-6 justify-center items-end">
        <div className="flex gap-4 sm:gap-8">
          <Link
            className="text-[12px] sm:text-[16px] dark:text-gray-300"
            href="/"
          >
            HOME
          </Link>
          <Link
            className="text-[12px] sm:text-[16px] dark:text-gray-300"
            href="/project"
          >
            PROJECT
          </Link>
          <Link
            className="text-[12px] sm:text-[16px] dark:text-gray-300"
            href="/blog"
          >
            BLOG
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="mailto:qkdflrgs@gmail.com" target="_blank">
            <MailIcon className="w-8 lg:w-10 fill-black dark:fill-dark-primary" />
          </Link>
          <Link href="https://github.com/qkdflrgs" target="_blank">
            <GithubIcon className="w-8 lg:w-10 fill-black dark:fill-dark-primary" />
          </Link>
          <Link href="https://github.com/qkdflrgs" target="_blank">
            <LinkedinIcon className="w-8 lg:w-10 fill-black dark:fill-dark-primary" />
          </Link>
        </div>
      </nav>
    </footer>
  )
}
