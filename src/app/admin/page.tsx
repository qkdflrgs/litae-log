import Title from '@shared/Title'
import Link from 'next/link'

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-8">
      <Title title="Blog Admin" description="블로그를 관리하는 페이지입니다" />
      <div className="flex gap-4 justify-center">
        <Link
          href="/admin/project"
          className="flex w-[200px] h-[80px] bg-blue-400 hover:bg-blue-300 justify-center items-center text-white text-[16px] font-bold rounded-lg"
        >
          프로젝트 작성하기
        </Link>
        <Link
          href="/admin/blog"
          className="flex w-[200px] h-[80px] bg-red-400 hover:bg-red-300 justify-center items-center text-white text-[16px] font-bold rounded-lg"
        >
          블로그 작성하기
        </Link>
      </div>
    </div>
  )
}
