import Image from 'next/image'
import Link from 'next/link'

export default function ProjectDetailPage() {
  return (
    <div className="flex flex-col gap-[150px]">
      {/* 타이틀 */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 h-full lg:h-[300px]">
        {/* 타이틀 내용 */}
        <div className="flex flex-col gap-[50px] lg:justify-between lg:flex-1">
          {/* 제목 및 설명 */}
          <div className="flex flex-col gap-6">
            <h1 className="text-[#276955] text-4xl font-bold">
              배달앱 쿠폰 프로젝트
            </h1>
            <p className="text-[14px] font-semibold text-[#667085]">
              배달 앱의 쿠폰 시스템을 학습하고 발전시키기 위한 프로젝트입니다.
              대규모 접속 처리와 이벤트 등 다양한 경험을 하였습니다. 배달 앱의
              쿠폰 시스템을 학습하고 발전시키기 위한 프로젝트입니다. 대규모 접속
              처리와 이벤트 등 다양한 경험을 하였습니다.
            </p>
          </div>
          {/* 이동 버튼 */}
          <div className="flex gap-4">
            <Link
              href="https://github.com/masters2023-project-06-second-hand/second-hand-fe"
              className="bg-[#276955] px-6 py-2 rounded-3xl text-white font-bold text-[14px]"
              target="_blank"
            >
              Github Repository
            </Link>
            <Link
              href=""
              className="bg-[#276955] px-6 py-2 rounded-3xl text-white font-bold text-[14px]"
              target="_blank"
            >
              배포 링크
            </Link>
          </div>
          {/* 숫자 */}
          <div className="flex flex-col lg:flex-row">
            <div className="flex lg:flex-col px-2 lg:px-0 py-2 flex-1 justify-between lg:justify-center items-center border-b-2 lg:border-r-2 lg:border-b-0 lg:gap-2">
              <span className="font-bold">5명의 팀원</span>
              <p className="text-[12px] text-gray-500">프론트엔드 2명</p>
            </div>
            <div className="flex lg:flex-col px-2 lg:px-0 py-2 flex-1 justify-between lg:justify-center items-center border-b-2 lg:border-r-2 lg:border-b-0 lg:gap-2">
              <span className="font-bold">3개월</span>
              <p className="text-[12px] text-gray-500">2024. 06. 03 - 07. 02</p>
            </div>
            <div className="flex lg:flex-col px-2 lg:px-0 py-2 flex-1 justify-between lg:justify-center items-center gap-2">
              <span className="font-bold">2가지 프로세스</span>
              <p className="text-[12px] text-gray-500">앱과 아아아</p>
            </div>
          </div>
        </div>

        {/* 타이틀 이미지 */}
        <div className="lg:flex-1 h-[300px] relative">
          <Image className="object-cover" src="/1412.png" alt="프로젝트" fill />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[24px] font-bold text-[#276955]">Skills</span>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-110"
            src="/svg/html.webp"
            alt="Transistor"
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-110"
            src="/svg/css.webp"
            alt="Reform"
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 hover:scale-110"
            src="/svg/react.webp"
            alt="Tuple"
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 hover:scale-110"
            src="/svg/ts.svg"
            alt="SavvyCal"
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 hover:scale-110"
            src="/svg/nextjs.svg"
            alt="Statamic"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-[40px]">
        <span className="text-[24px] font-bold text-[#276955]">Contents</span>
        <div className="w-full flex flex-col gap-10">
          <div className="h-[400px] flex flex-col-reverse lg:flex-row gap-6">
            <div className="w-full flex flex-col flex1 gap-8">
              <span className="text-[20px] text-[#276955] font-bold">
                useFunnel을 사용한 퍼널 패턴
              </span>
              <p className="text-gray-500">
                useFunnel을 사용한 퍼널 패턴 useFunnel을 사용한 퍼널 패턴
                useFunnel을 사용한 퍼널 패턴 useFunnel을 사용한 퍼널 패턴
                useFunnel을 사용한 퍼널 패턴 useFunnel을 사용한 퍼널 패턴
                useFunnel을 사용한 퍼널 패턴 useFunnel을 사용한 퍼널 패턴
                useFunnel을 사용한 퍼널 패턴 useFunnel을 사용한 퍼널 패턴
                useFunnel을 사용한 퍼널 패턴 useFunnel을 사용한 퍼널 패턴
              </p>
              <div></div>
            </div>
            <div className="w-full h-[300px] lg:h-full flex1 relative">
              <Image className="rounded-xl" src="/back.jpg" alt="" fill />
            </div>
          </div>
          <div className="h-[400px] flex flex-col-reverse lg:flex-row-reverse gap-6">
            <div className="w-full flex flex-col flex1 gap-8">
              <span className="text-[20px] text-[#276955] font-bold">
                useFunnel을 사용한 퍼널 패턴
              </span>
              <p className="text-gray-500">
                useFunnel을 사용한 퍼널 패턴 useFunnel을 사용한 퍼널 패턴
                useFunnel을 사용한 퍼널 패턴 useFunnel을 사용한 퍼널 패턴
                useFunnel을 사용한 퍼널 패턴 useFunnel을 사용한 퍼널 패턴
                useFunnel을 사용한 퍼널 패턴 useFunnel을 사용한 퍼널 패턴
                useFunnel을 사용한 퍼널 패턴 useFunnel을 사용한 퍼널 패턴
                useFunnel을 사용한 퍼널 패턴 useFunnel을 사용한 퍼널 패턴
              </p>
              <div></div>
            </div>
            <div className="w-full h-[300px] lg:h-full flex1 relative">
              <Image className="rounded-xl" src="/back.jpg" alt="" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[24px] font-bold text-[#276955]">
          Project Images
        </span>
        <div></div>
      </div>
    </div>
  )
}
