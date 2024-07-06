'use client'

import Title from '@shared/Title'
import SkillLogo from '@shared/SkillLogo'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div>
      <Title title="About" description="FRONT-END DEVELOPER / LEE TAEGON" />
      <div className="flex flex-col gap-[200px] py-12 sm:py-16">
        <div className="w-full min-h-[200px] flex justify-between">
          <div className="flex flex-col justify-end">
            <p className="text-[36px] dark:text-white">싸움이 무서운</p>
            <p className="text-[36px] dark:text-white underline decoration-dark-primary">
              프론트엔드 개발자
            </p>
            <span className="text-[36px] dark:text-white">이태곤</span>
          </div>
          <div className="w-full lg:w-[400px] h-[300px] relative">
            <Image
              src="/about.webp"
              alt="프로필 이미지"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="mx-auto w-full">
          <h2 className="text-[36px] font-semibold text-light-primary dark:text-dark-primary text-center">
            Skills
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
              <SkillLogo type="html" />
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
              <SkillLogo type="css" />
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
              <SkillLogo type="react" />
            </div>
            <div className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1">
              <SkillLogo type="typescript" />
            </div>
            <div className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1">
              <SkillLogo type="nextjs" />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-[200px] lg:gap-8">
          <div className="w-full flex flex-col gap-8">
            <h2 className="text-[36px] text-center lg:text-start text-light-primary dark:text-dark-primary font-bold">
              Education
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between border-b-2 pb-4 dark:border-dark-dp24">
                <div>
                  <a
                    href="https://codesquad.kr/masters/"
                    className="text-dark-dp03 dark:text-gray-200 text-[16px] sm:text-[18px] lg:text-[24px] font-bold after:content-['_↗']"
                  >
                    코드스쿼스
                  </a>
                  <p className="text-gray-400 lg:text-[16px] sm:text-[14px] text-[12px]">
                    2023 마스터즈 맥스 프론트엔드 과정
                  </p>
                </div>
                <div className="flex items-end">
                  <li className="text-gray-500">2023</li>
                </div>
              </div>
              <div className="flex justify-between border-b-2 pb-4 dark:border-dark-dp24">
                <div>
                  <span className="text-dark-dp03 dark:text-gray-200 text-[16px] sm:text-[18px] lg:text-[24px] font-bold">
                    전북대학교
                  </span>
                  <p className="text-gray-400 lg:text-[16px] sm:text-[14px] text-[12px]">
                    무역학과
                  </p>
                </div>
                <div className="flex items-end">
                  <li className="text-gray-500">2014-2018</li>
                </div>
              </div>
              <div className="flex justify-between border-b-2 pb-4 dark:border-dark-dp24">
                <div>
                  <span className="text-dark-dp03 dark:text-gray-200 text-[16px] sm:text-[18px] lg:text-[24px] font-bold">
                    전북외국어고등학교
                  </span>
                  <p className="text-gray-400 lg:text-[16px] sm:text-[14px] text-[12px]">
                    영어중국어과
                  </p>
                </div>
                <div className="flex items-end">
                  <li className="text-gray-500">2010-2013</li>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-8">
            <h2 className="text-[36px] text-center lg:text-start text-light-primary dark:text-dark-primary font-bold">
              Project Experience
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between border-b-2 pb-4 dark:border-dark-dp24">
                <div>
                  <a
                    href="https://codesquad.kr/masters/"
                    className="text-dark-dp03 dark:text-gray-200 text-[16px] sm:text-[18px] lg:text-[24px] font-bold after:content-['_↗']"
                  >
                    삼일히어로
                  </a>
                  <p className="text-gray-400 lg:text-[16px] sm:text-[14px] text-[12px]">
                    삼일교회 선교 관리 프로그램
                  </p>
                </div>
                <div className="flex items-end">
                  <li className="text-gray-500">진행중</li>
                </div>
              </div>
              <div className="flex justify-between border-b-2 pb-4 dark:border-dark-dp24">
                <div>
                  <span className="text-dark-dp03 dark:text-gray-200 text-[16px] sm:text-[18px] lg:text-[24px] font-bold">
                    나만의 블로그 만들기
                  </span>
                  <p className="text-gray-400 lg:text-[16px] sm:text-[14px] text-[12px]">
                    무역학과
                  </p>
                </div>
                <div className="flex items-end">
                  <li className="text-gray-500">2014-2018</li>
                </div>
              </div>
              <div className="flex justify-between border-b-2 pb-4 dark:border-dark-dp24">
                <div>
                  <span className="text-dark-dp03 dark:text-gray-200 text-[16px] sm:text-[18px] lg:text-[24px] font-bold">
                    배달 앱 쿠폰 서비스
                  </span>
                  <p className="text-gray-400 lg:text-[16px] sm:text-[14px] text-[12px]">
                    영어중국어과
                  </p>
                </div>
                <div className="flex items-end">
                  <li className="text-gray-500">2010-2013</li>
                </div>
              </div>
              <div className="flex justify-between border-b-2 pb-4 dark:border-dark-dp24">
                <div>
                  <span className="text-dark-dp03 dark:text-gray-200 text-[16px] sm:text-[18px] lg:text-[24px] font-bold">
                    중고 거래 앱
                  </span>
                  <p className="text-gray-400 lg:text-[16px] sm:text-[14px] text-[12px]">
                    영어중국어과
                  </p>
                </div>
                <div className="flex items-end">
                  <li className="text-gray-500">2010-2013</li>
                </div>
              </div>
              <div className="flex justify-between border-b-2 pb-4 dark:border-dark-dp24">
                <div>
                  <span className="text-dark-dp03 dark:text-gray-200 text-[16px] sm:text-[18px] lg:text-[24px] font-bold">
                    이슈 트래커
                  </span>
                  <p className="text-gray-400 lg:text-[16px] sm:text-[14px] text-[12px]">
                    영어중국어과
                  </p>
                </div>
                <div className="flex items-end">
                  <li className="text-gray-500">2010-2013</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
