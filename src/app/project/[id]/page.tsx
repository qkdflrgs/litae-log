'use client'

import SkillLogo from '@/components/shared/SkillLogo'
import useProject from '@/hooks/useProject'
import { Project } from '@model/project'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectDetailPageProps {
  params: { id: string }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { data } = useProject(params.id)

  return (
    <div className="flex flex-col gap-[150px] mb-10">
      {/* 타이틀 */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 h-full lg:h-[300px]">
        {/* 타이틀 내용 */}
        <div className="flex flex-col gap-[50px] lg:justify-between lg:flex-1">
          {/* 제목 및 설명 */}
          <div className="flex flex-col gap-6">
            <h1 className="text-light-primary dark:text-dark-primary text-4xl font-bold">
              {data?.title}
            </h1>
            <p className="text-[18px] font-semibold text-gray-600 dark:text-gray-300">
              {data?.description}
            </p>
          </div>
          {/* 이동 버튼 */}
          <div className="flex gap-4">
            {data?.projectLink.map((link) => (
              <Link
                href={link.url}
                className="bg-light-primary dark:bg-dark-primary px-6 py-2 rounded-3xl text-white dark:text-black font-bold text-[14px]"
                target="_blank"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 숫자 */}
          <div className="flex flex-col lg:flex-row">
            {data?.summary.map((item) => (
              <div className="flex lg:flex-col px-2 lg:px-0 py-2 flex-1 justify-between lg:justify-center items-center border-b-2 lg:border-r-2 lg:border-b-0 lg:gap-2 dark:border-dark-dp12 last:border-none">
                <span className="font-bold text-black dark:text-white">
                  {item.title}
                </span>
                <p className="text-[14px] text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 타이틀 이미지 */}
        <div className="lg:flex-1 h-[300px] relative">
          <Image
            className="object-cover rounded-2xl"
            src={data?.thumbnailImage || '/default.webp'}
            alt="프로젝트 이미지"
            fill
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-20">
        <span className="text-[24px] lg:text-[28px] font-bold text-light-primary dark:text-dark-primary">
          Skills
        </span>

        {data?.skills && (
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
              <SkillLogo type={data.skills[0]} />
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
              <SkillLogo type={data.skills[1]} />
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
              <SkillLogo type={data.skills[2]} />
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1">
              <SkillLogo type={data.skills[3]} />
            </div>
            <div className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1">
              <SkillLogo type={data.skills[4]} />
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col items-center gap-[40px]">
        <span className="text-[24px] lg:text-[28px] font-bold text-light-primary dark:text-dark-primary">
          Contents
        </span>
        <div className="w-full flex flex-col gap-14 lg:gap-10">
          {data?.contents.map((content, index) => (
            <div
              className={`lg:h-[400px] flex flex-col-reverse ${index % 2 !== 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12`}
            >
              <div className="w-full flex flex-col flex1 gap-8">
                <span className="text-[20px] text-light-primary dark:text-dark-primary font-bold">
                  {content.title}
                </span>
                <p className="text-dark-dp24 dark:text-gray-300">
                  {content.content}
                </p>
                <div className="flex gap-4">
                  {content.link.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      className="px-4 py-2 bg-light-primary dark:bg-dark-primary rounded-3xl font-semibold text-white dark:text-dark-dp02 text-[12px] sm:text-[14px]"
                      target="_blank"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="w-full h-[300px] lg:h-full flex relative">
                <Image
                  className="rounded-xl object-cover"
                  src={content.imageUrl || '/default.webp'}
                  alt="프로젝트 이미지"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
