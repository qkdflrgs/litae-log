'use client'

import useProject from '@hooks/useProject'
import { updateProject } from '@remote/project'
import useNewProjectValues from '@hooks/useNewProjectValues'
import useUploadImage from '@hooks/useUploadImage'
import Image from 'next/image'
import { useEffect } from 'react'
import { SkillMap } from '@/components/shared/SkillLogo'

interface EditProjectPageProps {
  params: { id: string }
}

export default function EditProjectPage({ params }: EditProjectPageProps) {
  const { data } = useProject(params.id)

  const {
    newProjectData,
    projectLink,
    summary,
    skill,
    contents,
    contentsLink,
    setNewProjectData,
    handleObjectInput,
    removeObjectInput,
    handleSkillInput,
    ResetInputMap,
    handleInput,
    handleAddButton,
    handleAddSkill,
    handleAddContentsLink,
    handleRemoveContentsLink,
    handleDeleteSkill,
  } = useNewProjectValues()
  const { image, handleInputImg, handleDeleteImg } = useUploadImage('project')

  useEffect(() => {
    if (data) setNewProjectData(data)
  }, [data])

  return (
    <div className="flex flex-col gap-8">
      {/* 제목 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="dark:text-white">
          제목
        </label>
        <input
          id="title"
          placeholder="프로젝트 제목을 입력해주세요"
          value={newProjectData.title}
          onChange={handleInput}
          className="rounded-md p-2 outline-green-800 dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
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
          placeholder="프로젝트 설명을 입력해주세요"
          value={newProjectData.description}
          onChange={handleInput}
          className="rounded-md p-2 outline-green-800 dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
          type="text"
        />
      </div>
      {/* 썸네일 이미지 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="thumbnailImage" className="dark:text-white">
          썸네일 이미지
        </label>
        <input
          id="thumbnailImage"
          placeholder="썸네일 이미지를 입력해주세요"
          value={newProjectData.thumbnailImage}
          onChange={handleInput}
          className="rounded-md p-2 outline-green-800 dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
          type="text"
        />
      </div>
      {/* 프로젝트 링크 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="linkUrl" className="dark:text-white">
          프로젝트 링크
        </label>
        <div className="bg-white dark:bg-dark-dp12 dark:text-white min-h-[100px] rounded-md p-2">
          {newProjectData.projectLink?.map((item) => (
            <div
              key={item.name}
              onClick={() => removeObjectInput('projectLink', item.name)}
              className="flex flex-col p-2 border rounded-md"
            >
              <div className="flex gap-4">
                <span className="font-bold">링크 제목</span>
                <span>{item.name}</span>
              </div>
              <div className="flex gap-4">
                <span className="font-bold">링크 URL</span>
                <span>{item.url}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <input
            id="projectLink_name"
            placeholder="프로젝트 링크 이름을 입력해주세요"
            value={projectLink.name}
            onChange={handleObjectInput}
            className="w-full rounded-md p-2 outline-green-800 dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
            type="text"
          />
          <input
            id="projectLink_url"
            placeholder="프로젝트 링크 url을 입력해주세요"
            value={projectLink.url}
            onChange={handleObjectInput}
            className="w-full rounded-md p-2 outline-green-800 dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
            type="text"
          />
          <button
            name="projectLink"
            className="w-[160px] bg-green-800 rounded-lg text-white disabled:opacity-40"
            onClick={handleAddButton}
            disabled={
              projectLink.name.length === 0 || projectLink.url.length === 0
            }
          >
            추가
          </button>
        </div>
      </div>
      {/* 프로젝트 요약 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="linkUrl" className="dark:text-white">
          프로젝트 요약
        </label>
        <div className="bg-white dark:bg-dark-dp12 dark:text-white min-h-[100px] overflow-auto rounded-md p-2">
          {newProjectData.summary?.map((item) => (
            <div
              key={item.title}
              onClick={() => removeObjectInput('summary', item.title)}
              className="flex flex-col p-2 border rounded-md"
            >
              <div className="flex gap-4">
                <span className="font-bold">요약 제목</span>
                <span>{item.title}</span>
              </div>
              <div className="flex gap-4">
                <span className="font-bold">요약 설명</span>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <input
            id="summary_title"
            placeholder="요약 타이틀을 입력해주세요"
            value={summary.title}
            onChange={handleObjectInput}
            className="w-full rounded-md p-2 outline-green-800 dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
            type="text"
          />
          <input
            id="summary_description"
            placeholder="요약 설명을 입력해주세요"
            value={summary.description}
            onChange={handleObjectInput}
            className="w-full rounded-md p-2 outline-green-800 dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
            type="text"
          />
          <button
            name="summary"
            className="w-[160px] bg-green-800 rounded-lg text-white disabled:opacity-40"
            onClick={handleAddButton}
            disabled={
              summary.title.length === 0 || summary.description.length === 0
            }
          >
            추가
          </button>
        </div>
      </div>
      {/* 기술 스택 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="linkUrl" className="dark:text-white">
          기술 스택
        </label>
        <div className="bg-white dark:bg-dark-dp12 dark:text-white min-h-[100px] overflow-auto rounded-md p-2">
          {newProjectData.skills?.map((skill) => (
            <div
              key={skill}
              onClick={() => handleDeleteSkill(skill)}
              className="flex flex-col p-2 border rounded-md"
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <select
            id="skill"
            onChange={handleSkillInput}
            className="dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
          >
            {Object.keys(SkillMap).map((skill) => (
              <option value={skill}>{skill}</option>
            ))}
          </select>
          <button
            name="skill"
            className="w-[100px] h-[30px] bg-green-800 rounded-lg text-white disabled:opacity-40"
            onClick={handleAddSkill}
            disabled={skill.length === 0}
          >
            추가
          </button>
        </div>
      </div>
      {/* 프로젝트 내용 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="dark:text-white">
          프로젝트 내용
        </label>
        <div className="bg-white dark:bg-dark-dp12 dark:text-white min-h-[200px] max-h-[300px] overflow-y-scroll rounded-md p-2">
          {newProjectData.contents?.map((contents) => (
            <div
              key={contents.title}
              className="flex flex-col gap-2 px-4 py-2 border rounded-md"
              onClick={() => removeObjectInput('contents', contents.title)}
            >
              <div className="flex gap-4">
                <span className="font-bold">제목</span>
                <span>{contents.title}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold">내용</span>
                <p>{contents.content}</p>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">이미지 URL</span>
                <span>{contents.imageUrl}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold">링크</span>
                {contents.link.map((item) => (
                  <div className="flex gap-4">
                    <span>{item.name}</span>
                    <span>{item.url}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 p-4 bg-white dark:bg-dark-dp12 dark:text-white min-h-[100px] max-h-[200px] overflow-y-scroll rounded-md">
          {contents.link.map((item) => (
            <div
              key={item.name}
              onClick={() => handleRemoveContentsLink(item.name)}
              className="flex flex-col p-2 border rounded-md"
            >
              <div className="flex gap-4">
                <span className="font-bold">링크 제목</span>
                <span>{item.name}</span>
              </div>
              <div className="flex gap-4">
                <span className="font-bold">링크 URL</span>
                <span>{item.url}</span>
              </div>
            </div>
          ))}
        </div>
        <input
          id="contents_title"
          placeholder="컨텐츠 타이틀을 입력해주세요"
          value={contents.title}
          onChange={handleObjectInput}
          className="rounded-md p-2 outline-green-800 dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
          type="text"
        />
        <input
          id="contents_content"
          placeholder="컨텐츠 내용을 입력해주세요"
          value={contents.content}
          onChange={handleObjectInput}
          className="rounded-md p-2 outline-green-800 dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
          type="text"
        />
        <input
          id="contents_imageUrl"
          placeholder="컨텐츠 이미지를 입력해주세요"
          value={contents.imageUrl}
          onChange={handleObjectInput}
          className="rounded-md p-2 outline-green-800 dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
          type="text"
        />
        <div className="flex gap-4">
          <input
            id="contentsLink_name"
            placeholder="컨텐츠 링크 제목을 입력해주세요"
            value={contentsLink.name}
            onChange={handleObjectInput}
            className="w-full rounded-md p-2 outline-green-800 dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
            type="text"
          />
          <input
            id="contentsLink_url"
            placeholder="컨텐츠 링크 URL을 입력해주세요"
            value={contentsLink.url}
            onChange={handleObjectInput}
            className="w-full rounded-md p-2 outline-green-800 dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
            type="text"
          />
          <button
            className="w-[160px] bg-green-800 rounded-lg text-white disabled:opacity-40"
            onClick={handleAddContentsLink}
            disabled={
              contentsLink.name.length === 0 || contentsLink.url.length === 0
            }
          >
            링크 추가
          </button>
        </div>
        <button
          name="contents"
          onClick={handleAddButton}
          className="w-full h-[40px] bg-green-800 rounded-lg text-white disabled:opacity-40"
        >
          컨텐츠 추가
        </button>
      </div>
      {/* 이미지 추가 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="image" className="dark:text-white">
          썸네일 이미지
        </label>
        <div className="flex gap-4 p-4 w-full min-h-[60px] bg-white dark:bg-dark-dp12 dark:text-white rounded-md">
          {image && (
            <>
              <div className="w-[100px] relative">
                <Image src={image ?? ''} alt="미리보기 이미지" fill />
              </div>
              <span>{image ? image : ''}</span>
            </>
          )}
        </div>
        <div className="flex justify-between">
          <input
            id="image"
            type="file"
            className="dark:text-white"
            onChange={handleInputImg}
          />
          <button
            className="px-4 py-1 bg-orange-500 disabled:bg-orange-300 text-white rounded-lg"
            onClick={handleDeleteImg}
            disabled={!image}
          >
            삭제
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="dark:text-white">
          프로젝트 상태
        </label>
        <div className="flex gap-4 dark:text-white">
          <label>
            <input
              type="radio"
              id="status_process"
              name="status"
              value="process"
              checked={newProjectData.status === 'process'}
              onChange={handleInput}
            />
            진행중
          </label>
          <label>
            <input
              type="radio"
              id="status_done"
              name="status"
              value="done"
              checked={newProjectData.status === 'done'}
              onChange={handleInput}
            />
            완료
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="startedAt" className="dark:text-white">
          시작일자
        </label>
        <input
          id="startedAt"
          type="date"
          className="dark:outline-dark-primary dark:bg-dark-dp12 dark:text-gray-300"
          onChange={handleInput}
        />
      </div>
      <div className="flex gap-8 justify-center">
        <button
          className="w-[80px] h-[32px] bg-red-500 hover:bg-red-400 text-[16px] text-white font-bold rounded-md"
          onClick={ResetInputMap['all']}
        >
          초기화
        </button>
        <button
          className="w-[80px] h-[32px] bg-light-primary hover:opacity-80 disabled:opacity-40 text-[16px] text-white font-bold rounded-md"
          onClick={() => updateProject(params.id, newProjectData)}
          disabled={false}
        >
          수정하기
        </button>
      </div>
    </div>
  )
}
