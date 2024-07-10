'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import React from 'react'
import usePost from '@hooks/usePost'
import transformDate from '@utils/transformDate'
import useRelatedPost from '@/hooks/useRelatedPost'
import BlogIndex from '@/components/blog/BlogIndex'

interface BlogDetailPageProps {
  params: { id: string }
}

export default function BlogDetail({ params }: BlogDetailPageProps) {
  const { data } = usePost(params.id)
  const { data: related } = useRelatedPost(params.id, data?.category ?? [])

  const handleCopyClipboard = async (title: string) => {
    await navigator.clipboard.writeText(title)
  }

  return (
    <>
      <div>
        <div className="flex lg:gap-[70px] pt-[42px] relative justify-center">
          <section className="flex flex-col gap-[100px] max-w-[650px] w-full">
            <article className="flex flex-col gap-[60px]">
              <div className="w-full flex flex-col gap-8 pb-6 border-b-2 border-light-border dark:border-dark-dp16">
                <span className="text-[14px] font-semibold text-gray-500 dark:text-gray-400">
                  {data && transformDate(data?.createdAt)}
                </span>
                <h1 className="text-light-primary dark:text-dark-primary text-4xl font-bold">
                  {data?.title}
                </h1>
              </div>
              <div className="flex">
                <ReactMarkdown
                  className="prose flex flex-col w-full dark:text-gray-300 blog-post"
                  components={{
                    h2(props) {
                      const { children, node, ...rest } = props
                      const id = React.Children.toArray(children)
                        .join('')
                        .replaceAll(' ', '')

                      return (
                        <h2 id={id} className="group" {...rest}>
                          <a href={`#${id}`} className="no-underline relative">
                            {children}
                            <div
                              onClick={() =>
                                handleCopyClipboard(children as string)
                              }
                              className="absolute -right-[40px] bottom-0 w-[28px] h-[28px] text-white bg-light-primary dark:bg-dark-primary hidden lg:group-hover:flex justify-center items-center rounded-lg"
                            >
                              <svg
                                fill="none"
                                height="16"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
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
                    img(props) {
                      const { src, alt, node, ...rest } = props
                      return (
                        <div className="w-full flex justify-center py-4">
                          <img src={src} alt={alt} {...rest} />
                        </div>
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
            {related && related.length !== 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] font-semibold text-light-primary dark:text-dark-primary">
                  Related Posts
                </h3>
                <div className="flex gap-4">
                  {related.map((item) => (
                    <a
                      key={item.id}
                      href={`/blog/${item.id}`}
                      className="w-full flex flex-col gap-4 max-w-[320px] p-2 text-[14px] bg-white dark:bg-dark-dp06 rounded-md cursor-pointer"
                    >
                      <span className="text-[16px] line-clamp-2 font-bold dark:text-white">
                        {item.title}
                      </span>
                      <div className="flex flex-col gap-2">
                        <p className="line-clamp-2 text-ellipsis text-gray-500 dark:text-gray-400">
                          {item.description}
                        </p>
                        <span className="text-end text-gray-400 dark:text-gray-500">
                          {transformDate(item.createdAt)}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </section>
          {data?.index && <BlogIndex indexData={data.index} />}
          {/* <aside className="w-[240px] p-4 max-h-[400px] h-full hidden sticky top-[30px] mt-[180px] lg:flex flex-col gap-4 border border-light-primary dark:border-dark-primary rounded-lg">
            <span className="text-[18px] font-semibold text-light-primary dark:text-dark-primary">
              INDEX
            </span>

            {data?.index && (
              <ul className="flex flex-col gap-2 text-gray-400 dark:text-gray-400">
                {data.index.map((title, index) => (
                  <li key={title.replaceAll(' ', '')}>
                    <a href={`#${title.replaceAll(' ', '')}`}>
                      <span>{title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </aside> */}
        </div>
      </div>
    </>
  )
}
