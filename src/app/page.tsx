'use client'

import ProjectItem from '@components/project/ProjectItem'
import useRecent from '@hooks/useRecent'
import RecentPosts from '@components/blog/RecentPosts'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const { posts, projects } = useRecent()

  return (
    <div className="flex flex-col gap-[200px]">
      <div className="lg:h-[400px] flex flex-col-reverse lg:flex-row lg:justify-between gap-4 lg:gap-0">
        <div className="flex flex-col justify-end">
          <span className="text-[36px] lg:text-[48px] font-bold text-light-primary dark:text-white">
            프론트엔드 개발자
          </span>
          <span className="text-[36px] lg:text-[48px] font-bold text-light-primary dark:text-white">
            이태곤입니다
          </span>
        </div>
        <div className="w-full h-[300px] lg:h-full lg:w-[400px] relative">
          <Image
            className="rounded-3xl object-cover"
            src="/profile.webp"
            alt="프로필 사진"
            fill
          />
        </div>
      </div>
      <section className="flex flex-col items-center gap-[40px]">
        <h3 className="text-[32px] sm:text-[42px] text-light-primary dark:text-dark-primary font-bold">
          Recent Posts
        </h3>
        {posts && <RecentPosts posts={posts} />}
        <Link
          href="/blog"
          className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white dark:text-black rounded-lg text-[14px] font-bold"
        >
          VIEW MORE
        </Link>
      </section>
      <section className="flex flex-col items-center gap-[60px]">
        <h3 className="text-[32px] sm:text-[42px] text-light-primary dark:text-dark-primary font-bold">
          Recent Projects
        </h3>
        <div className="w-full grid lg:grid-cols-3 gap-[30px]">
          {projects &&
            projects.map((project) => (
              <ProjectItem
                key={project.id}
                id={project.id}
                tag={project.status}
                title={project.title}
                description={project.description}
                thumbnailImage={project.thumbnailImage}
              />
            ))}
        </div>
        <Link
          href="/project"
          className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white dark:text-black rounded-lg text-[14px] font-bold"
        >
          VIEW MORE
        </Link>
      </section>
    </div>
  )
}
