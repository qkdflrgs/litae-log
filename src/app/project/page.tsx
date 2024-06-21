import Title from '@/components/shared/Title'
import Link from 'next/link'

export default function ProjectPage() {
  return (
    <>
      <Title title="My Projects" description="프로젝트를 기록하는 공간" />

      <div className="mt-[60px] grid sm:grid-cols-2 gap-[30px] justify-center">
        <Link
          href=""
          className="h-[360px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[360px] before:bg-gray-500 before:opacity-40 hover:before:opacity-60 before:rounded-md"
        >
          <img
            className="h-full object-cover rounded-md"
            src="14.png"
            alt="이미지"
          />
          <div className="absolute bottom-[72px] left-5 text-[12px] text-black bg-white font-semibold px-2 py-1 rounded-3xl">
            Team Project
          </div>
          <span className="absolute bottom-[24px] left-5 text-[28px] text-white font-bold">
            배달 앱 쿠폰 서비스
          </span>
        </Link>
        <Link
          href=""
          className="h-[360px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[360px] before:bg-gray-500 before:opacity-40 hover:before:opacity-60 before:rounded-md"
        >
          <img
            className="h-full object-cover rounded-md"
            src="1412.png"
            alt="이미지"
          />
          <div className="absolute bottom-[72px] left-5 text-[12px] text-black bg-white font-semibold px-2 py-1 rounded-3xl">
            Team Project
          </div>
          <span className="absolute bottom-[24px] left-5 text-[28px] text-white font-bold">
            수박마켓
          </span>
        </Link>
        <Link
          href=""
          className="h-[360px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[360px] before:bg-gray-500 before:opacity-40 hover:before:opacity-60 before:rounded-md"
        >
          <img
            className="h-full object-cover rounded-md"
            src="14.png"
            alt="이미지"
          />
          <div className="absolute bottom-[72px] left-5 text-[12px] text-black bg-white font-semibold px-2 py-1 rounded-3xl">
            Team Project
          </div>
          <span className="absolute bottom-[24px] left-5 text-[28px] text-white font-bold">
            배달 앱 쿠폰 서비스
          </span>
        </Link>
        <Link
          href=""
          className="h-[360px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[360px] before:bg-gray-500 before:opacity-40 hover:before:opacity-60 before:rounded-md"
        >
          <img
            className="h-full object-cover rounded-md"
            src="14.png"
            alt="이미지"
          />
          <div className="absolute bottom-[72px] left-5 text-[12px] text-black bg-white font-semibold px-2 py-1 rounded-3xl">
            Team Project
          </div>
          <span className="absolute bottom-[24px] left-5 text-[28px] text-white font-bold">
            배달 앱 쿠폰 서비스
          </span>
        </Link>
        <Link
          href=""
          className="h-[360px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[360px] before:bg-gray-500 before:opacity-40 hover:before:opacity-60 before:rounded-md"
        >
          <img
            className="h-full object-cover rounded-md"
            src="1412.png"
            alt="이미지"
          />
          <div className="absolute bottom-[72px] left-5 text-[12px] text-black bg-white font-semibold px-2 py-1 rounded-3xl">
            Team Project
          </div>
          <span className="absolute bottom-[24px] left-5 text-[28px] text-white font-bold">
            수박마켓
          </span>
        </Link>
        <Link
          href=""
          className="h-[360px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[360px] before:bg-gray-500 before:opacity-40 hover:before:opacity-60 before:rounded-md"
        >
          <img
            className="h-full object-cover rounded-md"
            src="14.png"
            alt="이미지"
          />
          <div className="absolute bottom-[72px] left-5 text-[12px] text-black bg-white font-semibold px-2 py-1 rounded-3xl">
            Team Project
          </div>
          <span className="absolute bottom-[24px] left-5 text-[28px] text-white font-bold">
            배달 앱 쿠폰 서비스
          </span>
        </Link>
      </div>
    </>
  )
}
