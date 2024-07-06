'use client'

import { deletePost } from '@/remote/post'
import usePosts from '@hooks/usePosts'
import transformDate from '@utils/transformDate'
import Link from 'next/link'

export default function BlogAdminPage() {
  const { data: posts } = usePosts('all')
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-end">
        <Link
          href="/admin/blog/new"
          className="px-4 py-2 bg-light-primary dark:bg-dark-primary hover:opacity-80 justify-center items-center text-white dark:text-black text-[16px] font-bold rounded-lg"
        >
          글 작성하기
        </Link>
      </div>
      <table>
        <caption className="text-start text-[24px] font-bold mb-8 dark:text-white">
          글 목록
        </caption>
        <thead className="h-[30px] bg-green-200 dark:bg-dark-dp00 dark:text-white">
          <tr>
            <th>아이디</th>
            <th>제목</th>
            <th>작성일자</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {posts?.map((post) => (
            <tr key={post.id} className="h-10 dark:text-gray-300">
              <th>{post.id}</th>
              <th>{post.title}</th>
              <th>{transformDate(post.createdAt)}</th>
              <th className="flex gap-2">
                <Link
                  className="px-4 py-1 text-white text-[14px] bg-gray-700 dark:bg-gray-500 hover:bg-gray-600 dark:hover:bg-gray-400 rounded-lg"
                  href={`/admin/blog/${post.id}`}
                >
                  수정
                </Link>
                <button
                  className="px-4 py-1 text-white text-[14px] bg-red-600 hover:bg-red-500 rounded-lg"
                  onClick={() => deletePost(post.id)}
                >
                  삭제
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      {posts?.length === 0 && (
        <div className="w-full flex justify-center items-center text-gray-500">
          <span>게시글이 없습니다.</span>
        </div>
      )}
    </div>
  )
}
