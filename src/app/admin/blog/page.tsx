'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import React, { ChangeEvent, useEffect, useState, KeyboardEvent } from 'react'
import useNewPost from '@/hooks/useNewPost'

export default function NewPostPage() {
  const [index, setIndex] = useState<string>('')
  const [category, setCategory] = useState<string>('')

  const { newPostData, setNewPostData, resetNewPostData, submitNewPost } =
    useNewPost()
  const possibleSubmit =
    newPostData.title.length === 0 && newPostData.category.length === 0

  const handleMarkdown = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewPostData((prev) => ({
      ...prev,
      content: e.target.value,
    }))
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { id, value },
    } = e

    if (id === 'title') {
      setNewPostData((prev) => ({
        ...prev,
        title: value,
      }))
    }

    if (id === 'description') {
      setNewPostData((prev) => ({
        ...prev,
        description: value,
      }))
    }

    if (id === 'category') {
      setCategory(value)
    }

    if (id === 'index') {
      setIndex(value)
    }
  }

  const handleAddCategory = () => {
    const currentCategory = newPostData.category
    setNewPostData((prev) => ({
      ...prev,
      category: [...currentCategory, category],
    }))
    setCategory('')
  }

  const handleAddIndex = () => {
    const currentIndex = newPostData.index
    setNewPostData((prev) => ({ ...prev, index: [...currentIndex, index] }))
    setIndex('')
  }

  const handleDeleteCategory = (deleteCategory: string) => {
    const updatedCategories = newPostData.category.filter(
      (item) => item !== deleteCategory,
    )
    setNewPostData((prev) => ({
      ...prev,
      category: updatedCategories,
    }))
  }

  const handleDeleteIndex = (deleteIndex: string) => {
    const updatedIndex = newPostData.index.filter(
      (item) => item !== deleteIndex,
    )
    setNewPostData((prev) => ({
      ...prev,
      index: updatedIndex,
    }))
  }

  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex flex-col gap-2">
          {/* 제목 */}
          <label htmlFor="title">제목</label>
          <input
            id="title"
            placeholder="포스트 제목을 입력해주세요"
            value={newPostData.title}
            onChange={handleInput}
            className="rounded-md p-2 outline-green-800"
            type="text"
          />
        </div>
        {/* 설명 */}
        <div className="flex flex-col gap-2">
          <label htmlFor="description">설명</label>
          <input
            id="description"
            placeholder="포스트 설명을 입력해주세요"
            value={newPostData.description}
            onChange={handleInput}
            className="rounded-md p-2 outline-green-800"
            type="text"
          />
        </div>
        {/* 내용 */}
        <div className="flex flex-col gap-2">
          <label htmlFor="contents">내용</label>
          <textarea
            id="contents"
            placeholder="포스트 내용을 입력해주세요"
            value={newPostData.content}
            className="w-full h-[600px] resize-none outline-green-800 p-2 rounded-md"
            onChange={handleMarkdown}
          />
        </div>
        {/* 목차 */}
        <div className="flex flex-col gap-2">
          <label htmlFor="index">목차</label>
          <div className="flex flex-wrap gap-2 bg-white min-h-[50px] rounded-md p-2">
            {newPostData.index.map((idx) => (
              <div
                key={idx}
                className="flex px-2 h-[24px] bg-[#276955] rounded-sm text-white text-[14px] items-center cursor-pointer"
                onClick={() => handleDeleteIndex(idx)}
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
              className="w-full rounded-md p-2 outline-green-800"
              type="text"
              onChange={handleInput}
            />
            <button
              className="w-[60px] h-[80%] rounded-lg text-white bg-[#276955]"
              onClick={handleAddIndex}
            >
              추가
            </button>
          </div>
        </div>
        {/* 카테고리 */}
        <div className="flex flex-col gap-2">
          <label htmlFor="category">카테고리</label>
          <div className="flex flex-wrap gap-2 bg-white min-h-[50px] rounded-md p-2">
            {newPostData.category.map((category) => (
              <div
                key={category}
                className="flex px-2 h-[24px] bg-[#276955] rounded-sm text-white text-[14px] items-center cursor-pointer"
                onClick={() => handleDeleteCategory(category)}
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
              className="w-full rounded-md p-2 outline-green-800"
              type="text"
              onChange={handleInput}
            />
            <button
              className="w-[60px] h-[80%] rounded-lg text-white bg-[#276955]"
              onClick={handleAddCategory}
            >
              추가
            </button>
          </div>
        </div>
        {/* 이미지 */}
        <div className="flex flex-col gap-2">
          <label htmlFor="image">이미지</label>
          <input type="file" />
        </div>
        <div className="flex gap-8 justify-center">
          <button
            className="w-[80px] h-[32px] bg-red-500 hover:bg-red-400 text-[16px] text-white font-bold rounded-md"
            onClick={resetNewPostData}
          >
            초기화
          </button>
          <button
            className="w-[80px] h-[32px] bg-green-500 hover:bg-green-400 disabled:bg-green-100 text-[16px] text-white font-bold rounded-md"
            onClick={submitNewPost}
            disabled={possibleSubmit}
          >
            등록하기
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1 h-[800px] overflow-y-scroll gap-4">
        <span className="text-[20px] text-[#276955] font-bold">미리보기</span>
        <ReactMarkdown
          className="prose flex flex-col w-full"
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
  )
}
