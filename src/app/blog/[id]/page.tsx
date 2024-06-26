'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import React from 'react'
import usePost from '@/hooks/usePost'
import transformDate from '@/utils/transformDate'

interface BlogDetailPageProps {
  params: { id: string }
}

export default function BlogDetail({ params }: BlogDetailPageProps) {
  const { data } = usePost(params.id)

  const handleCopyClipboard = async (title: string) => {
    await navigator.clipboard.writeText(title)
  }

  return (
    <>
      <div className="flex lg:gap-[70px] pt-[42px] relative justify-center">
        <section className="flex flex-col gap-12 max-w-[650px] w-full">
          <article className="flex flex-col gap-[60px]">
            <div className="w-full flex flex-col gap-8 pb-6 border-b-2">
              <span className="text-[14px] font-semibold text-[#667085]">
                {data && transformDate(data?.createdAt)}
              </span>
              <h1 className="text-green-800 text-4xl font-bold">
                {data?.title}
              </h1>
            </div>
            <div className="blog-post flex">
              <ReactMarkdown
                className="prose flex flex-col w-full"
                components={{
                  h2(props) {
                    const { children, node, ...rest } = props
                    const id = React.Children.toArray(children)
                      .join('')
                      .replaceAll(' ', '')

                    return (
                      <h2 id={id} className="group" {...rest}>
                        <a href={`#${id}`} className="no-underline  relative">
                          {children}
                          <div
                            onClick={() =>
                              handleCopyClipboard(children as string)
                            }
                            className="absolute -right-[40px] bottom-0 w-[28px] h-[28px] text-white bg-green-800 hidden lg:group-hover:flex justify-center items-center rounded-lg"
                          >
                            <svg
                              fill="none"
                              height="16"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                              width="16"
                            >
                              <rect
                                height="13"
                                rx="2"
                                ry="2"
                                width="13"
                                x="9"
                                y="9"
                              />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                          </div>
                        </a>
                      </h2>
                    )
                  },
                }}
                rehypePlugins={[rehypeHighlight]}
                remarkPlugins={[remarkGfm]}
              >
                {data?.content}
              </ReactMarkdown>
            </div>
          </article>
          <div className="text-[24px] font-semibold text-green-800">
            <h3>Related Posts</h3>
          </div>
        </section>
        <aside className="w-[240px] p-4 max-h-[400px] h-full hidden sticky top-[30px] mt-[180px] lg:flex flex-col gap-4 border border-green-800 rounded-lg">
          <span className="text-[18px] font-semibold text-green-800">
            INDEX
          </span>
          {data?.index && (
            <ul className="flex flex-col gap-2 text-gray-400">
              {data.index.map((title) => (
                <li key={title.replaceAll(' ', '')}>
                  <a href={`#${title.replaceAll(' ', '')}`}>
                    <span>{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </div>
    </>
  )
}
