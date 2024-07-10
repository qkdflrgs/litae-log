'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import React from 'react'
import useUploadImage from '@hooks/useUploadImage'
import useNewPostValues from '@hooks/useNewPostValues'

export default function NewPostPage() {
  const { image, handleInputImg, handleDeleteImg } = useUploadImage('blog')
  const {
    newPostData,
    index,
    category,
    handleInput,
    handleArrayInput,
    handleAddButton,
    handleRemoveIndex,
    handleRemoveCategory,
    ResetValueMap,
    submitNewPost,
  } = useNewPostValues()

  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-4">
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex flex-col gap-2">
            {/* 제목 */}
            <label htmlFor="title" className="dark:text-white">
              제목
            </label>
            <input
              id="title"
              placeholder="포스트 제목을 입력해주세요"
              value={newPostData.title}
              onChange={handleInput}
              className="rounded-md p-2 outline-light-primary dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
              type="text"
            />
          </div>
          {/* 설명 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="dark:text-white">
              설명
            </label>
            <input
              id="description"
              placeholder="포스트 설명을 입력해주세요"
              value={newPostData.description}
              onChange={handleInput}
              className="rounded-md p-2 outline-light-primary dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            {/* 썸네일 */}
            <label htmlFor="thumbnailImage" className="dark:text-white">
              썸네일 이미지
            </label>
            <input
              id="thumbnailImage"
              placeholder="썸네일 이미지 주소를 입력해주세요"
              value={newPostData.thumbnailImage}
              onChange={handleInput}
              className="rounded-md p-2 outline-light-primary dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
              type="text"
            />
          </div>
          {/* 내용 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="content" className="dark:text-white">
              내용
            </label>
            <textarea
              id="content"
              placeholder="포스트 내용을 입력해주세요"
              value={newPostData.content}
              className="w-full h-[600px] resize-none outline-light-primary dark:outline-dark-primary p-2 rounded-md dark:bg-dark-dp12 dark:text-gray-300"
              onChange={handleInput}
            />
          </div>
          {/* 목차 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="index" className="dark:text-white">
              목차
            </label>
            <div className="flex flex-wrap gap-2 bg-white min-h-[50px] rounded-md p-2 dark:bg-dark-dp12 dark:text-gray-300">
              {newPostData.index.map((idx) => (
                <div
                  key={idx}
                  className="flex px-2 h-[24px] bg-light-primary dark:bg-dark-primary rounded-sm text-white dark:text-black text-[14px] items-center cursor-pointer"
                  onClick={() => handleRemoveIndex(idx)}
                >
                  <span>{idx}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 items-center">
              <input
                id="index"
                placeholder="목차를 입력해주세요"
                value={index}
                className="w-full rounded-md p-2 outline-light-primary dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
                type="text"
                onChange={handleArrayInput}
              />
              <button
                name="index"
                className="w-[60px] h-[80%] rounded-lg text-white bg-light-primary dark:bg-dark-primary dark:text-black"
                onClick={handleAddButton}
              >
                추가
              </button>
            </div>
          </div>
          {/* 카테고리 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="dark:text-white">
              카테고리
            </label>
            <div className="flex flex-wrap gap-2 bg-white dark:bg-dark-dp12 min-h-[50px] rounded-md p-2">
              {newPostData.category.map((category) => (
                <div
                  key={category}
                  className="flex px-2 h-[24px] bg-light-primary dark:bg-dark-primary rounded-sm text-white text-[14px] items-center cursor-pointer dark:text-black"
                  onClick={() => handleRemoveCategory(category)}
                >
                  <span>{category}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 items-center">
              <input
                id="category"
                placeholder="카테고리를 입력해주세요"
                value={category}
                className="w-full rounded-md p-2 outline-light-primary dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
                type="text"
                onChange={handleArrayInput}
              />
              <button
                name="category"
                className="w-[60px] h-[80%] rounded-lg text-white bg-light-primary dark:bg-dark-primary dark:text-black"
                onClick={handleAddButton}
              >
                추가
              </button>
            </div>
          </div>
          {/* 이미지 추가 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="dark:text-white">
              이미지 추가
            </label>
            <div className="w-full min-h-[36px] bg-white dark:bg-dark-dp12 rounded-md">
              <span>{image ? image : ''}</span>
            </div>
            <div className="flex justify-between">
              <input
                id="image"
                type="file"
                onChange={handleInputImg}
                className="dark:text-gray-300"
              />
              <button
                className="px-4 py-1 bg-orange-500 text-white rounded-lg"
                onClick={handleDeleteImg}
                disabled={!image}
              >
                삭제
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 h-[1200px] overflow-y-scroll gap-4">
          <span className="text-[20px] text-light-primary dark:text-white font-bold">
            미리보기
          </span>
          <ReactMarkdown
            className="prose flex flex-col w-full dark:text-white blog-post"
            components={{
              h2(props) {
                const { children, node, ...rest } = props
                const id = React.Children.toArray(children)
                  .join('')
                  .replaceAll(' ', '')

                return (
                  <h2 id={id} {...rest}>
                    {children}
                  </h2>
                )
              },
            }}
            rehypePlugins={[rehypeHighlight]}
            remarkPlugins={[remarkGfm]}
          >
            {newPostData.content}
          </ReactMarkdown>
        </div>
      </div>
      <div className="flex gap-8 justify-center">
        <button
          className="w-[80px] h-[32px] bg-red-500 hover:bg-red-400 text-[16px] text-white font-bold rounded-md"
          onClick={ResetValueMap['all']}
        >
          초기화
        </button>
        <button
          className="w-[80px] h-[32px] bg-light-primary dark:bg-dark-primary hover:opacity-80 disabled:opacity-40 text-[16px] text-white font-bold rounded-md"
          onClick={submitNewPost}
        >
          등록하기
        </button>
      </div>
    </div>
  )
}
