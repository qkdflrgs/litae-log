'use client'

import useProjects from '@hooks/useProjects'
import transformDate from '@utils/transformDate'
import Link from 'next/link'

export default function ProjectAdminPage() {
  const { data: projects } = useProjects()
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-end">
        <Link
          href="/admin/project/new"
          className="px-4 py-2 bg-[#276955] hover:opacity-80 justify-center items-center text-white text-[16px] font-bold rounded-lg"
        >
          프로젝트 작성하기
        </Link>
      </div>
      <table>
        <caption className="text-start text-[24px] font-bold mb-8">
          프로젝트 목록
        </caption>
        <thead className="h-[30px] bg-green-200">
          <tr>
            <th>아이디</th>
            <th>제목</th>
            <th>시작일자</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {projects?.map((project) => (
            <tr key={project.id} className="h-10">
              <th>{project.id}</th>
              <th>{project.title}</th>
              <th>{transformDate(project.startedAt)}</th>
              <th>
                <Link
                  className="px-4 py-1 text-white text-[14px] bg-gray-700 hover:bg-gray-600 rounded-lg"
                  href={`/admin/project/${project.id}`}
                >
                  수정
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      {projects?.length === 0 && (
        <div className="w-full flex justify-center items-center text-gray-500">
          <span>게시글이 없습니다.</span>
        </div>
      )}
    </div>
  )
}
