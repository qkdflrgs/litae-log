'use client'

import useNewProject from '@/hooks/useNewProject'
import useUploadImage from '@/hooks/useUploadImage'
import { ImageType, LinkType } from '@/model/project'
import { storage } from '@/remote/firebase'
import { deleteObject, ref } from 'firebase/storage'
import { ChangeEvent, useState } from 'react'

export default function NewProjectPage() {
  const {
    newProjectData,
    setNewProjectData,
    resetNewProjectData,
    submitNewProject,
  } = useNewProject()
  const [linkUrl, setLinkUrl] = useState<LinkType>({ name: '', url: '' })
  const [skill, setSkill] = useState<ImageType>({ name: '', src: '' })
  const [image, setImage] = useState<string | null>()
  const { uploadImage } = useUploadImage()

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    setNewProjectData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleLinkInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    if (id === 'linkUrlName') {
      setLinkUrl((prev) => ({
        ...prev,
        name: value,
      }))
    }

    if (id === 'linkUrlUrl') {
      setLinkUrl((prev) => ({
        ...prev,
        url: value,
      }))
    }
  }

  const handleSkillInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    if (id === 'skillName') {
      setSkill((prev) => ({
        ...prev,
        name: value,
      }))
    }

    if (id === 'skillSrc') {
      setSkill((prev) => ({
        ...prev,
        src: value,
      }))
    }
  }

  const handleAddLink = () => {
    const last = newProjectData.projectLink

    setNewProjectData((prev) => ({
      ...prev,
      projectLink: last ? [...last, linkUrl] : [linkUrl],
    }))
    setLinkUrl({ name: '', url: '' })
  }

  const handleAddSkill = () => {
    const last = newProjectData.skills

    setNewProjectData((prev) => ({
      ...prev,
      skills: last ? [...last, skill] : [skill],
    }))
    setSkill({ name: '', src: '' })
  }

  const handleRemoveLink = (name: string) => {
    const removedLink = newProjectData.projectLink.filter(
      (link) => link.name !== name,
    )

    setNewProjectData((prev) => ({
      ...prev,
      projectLink: removedLink,
    }))
  }

  const handleRemoveSkill = (name: string) => {
    const removedLink = newProjectData.skills.filter(
      (link) => link.name !== name,
    )

    setNewProjectData((prev) => ({
      ...prev,
      skills: removedLink,
    }))
  }

  const handleStatus = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setNewProjectData((prev) => ({
      ...prev,
      status: value as 'process' | 'done',
    }))
  }

  const handleInputImg = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      const url = await uploadImage('blog', file)

      setImage(url)
    }
  }

  const handleDeleteImg = async () => {
    if (image != null) {
      await deleteObject(ref(storage, image))
      setImage('')
    }
  }

  return (
    <div className="flex flex-col gap-8">
      {/* 제목 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="title">제목</label>
        <input
          id="title"
          placeholder="프로젝트 제목을 입력해주세요"
          value={newProjectData.title}
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
          placeholder="프로젝트 설명을 입력해주세요"
          value={newProjectData.description}
          onChange={handleInput}
          className="rounded-md p-2 outline-green-800"
          type="text"
        />
      </div>
      {/* 프로젝트 URL */}
      <div className="flex flex-col gap-2">
        <label htmlFor="linkUrl">프로젝트 링크</label>
        <div className="bg-white min-h-[100px] rounded-md p-2">
          {newProjectData.projectLink?.map((link) => (
            <div
              key={link.name}
              className="flex gap-4 p-1"
              onClick={() => handleRemoveLink(link.name)}
            >
              <span>{link.name}</span>|<span>{link.url}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <input
            id="linkUrlName"
            placeholder="프로젝트 링크 이름을 입력해주세요"
            value={linkUrl.name}
            onChange={handleLinkInput}
            className="w-full rounded-md p-2 outline-green-800"
            type="text"
          />
          <input
            id="linkUrlUrl"
            placeholder="프로젝트 링크 url을 입력해주세요"
            value={linkUrl.url}
            onChange={handleLinkInput}
            className="w-full rounded-md p-2 outline-green-800"
            type="text"
          />
          <button
            className="w-[160px] bg-green-800 rounded-lg text-white disabled:opacity-40"
            onClick={handleAddLink}
            disabled={linkUrl.name.length === 0 || linkUrl.url.length === 0}
          >
            추가
          </button>
        </div>
      </div>
      {/* 프로젝트 요약 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="linkUrl">기술 스택</label>
        <div className="bg-white min-h-[100px] overflow-auto rounded-md p-2">
          {newProjectData.skills?.map((skill) => (
            <div
              key={skill.name}
              className="flex gap-4 p-1"
              onClick={() => handleRemoveSkill(skill.name)}
            >
              <span>{skill.name}</span>|<span>{skill.src}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <input
            id="skillName"
            placeholder="기술 스택 이름을 입력해주세요"
            value={skill.name}
            onChange={handleSkillInput}
            className="w-full rounded-md p-2 outline-green-800"
            type="text"
          />
          <input
            id="skillSrc"
            placeholder="기술 스택 이미지를 입력해주세요"
            value={skill.src}
            onChange={handleSkillInput}
            className="w-full rounded-md p-2 outline-green-800"
            type="text"
          />
          <button
            className="w-[160px] bg-green-800 rounded-lg text-white disabled:opacity-40"
            onClick={handleAddSkill}
            disabled={skill.name.length === 0 || skill.src.length === 0}
          >
            추가
          </button>
        </div>
      </div>
      {/* 기술 스택 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="linkUrl">기술 스택</label>
        <div className="bg-white min-h-[100px] overflow-auto rounded-md p-2">
          {newProjectData.skills?.map((skill) => (
            <div
              key={skill.name}
              className="flex gap-4 p-1"
              onClick={() => handleRemoveSkill(skill.name)}
            >
              <span>{skill.name}</span>|<span>{skill.src}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <input
            id="skillName"
            placeholder="기술 스택 이름을 입력해주세요"
            value={skill.name}
            onChange={handleSkillInput}
            className="w-full rounded-md p-2 outline-green-800"
            type="text"
          />
          <input
            id="skillSrc"
            placeholder="기술 스택 이미지를 입력해주세요"
            value={skill.src}
            onChange={handleSkillInput}
            className="w-full rounded-md p-2 outline-green-800"
            type="text"
          />
          <button
            className="w-[160px] bg-green-800 rounded-lg text-white disabled:opacity-40"
            onClick={handleAddSkill}
            disabled={skill.name.length === 0 || skill.src.length === 0}
          >
            추가
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description">내용</label>
        <input
          id="description"
          placeholder="프로젝트 설명을 입력해주세요"
          value={newProjectData.description}
          onChange={handleInput}
          className="rounded-md p-2 outline-green-800"
          type="text"
        />
      </div>
      {/* 이미지 추가 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="image">썸네일 이미지</label>
        <div className="w-full min-h-[36px] bg-white rounded-md">
          <span>{image ? image : ''}</span>
        </div>
        <div className="flex justify-between">
          <input id="image" type="file" onChange={handleInputImg} />
          <button
            className="px-4 py-1 bg-orange-500 text-white rounded-lg"
            onClick={handleDeleteImg}
            disabled={!image}
          >
            삭제
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description">프로젝트 상태</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="project_status"
              value="process"
              onChange={handleStatus}
            />
            진행중
          </label>
          <label>
            <input
              type="radio"
              name="project_status"
              value="done"
              onChange={handleStatus}
            />
            완료
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description">시작일자</label>
        <input id="startedAt" type="date" onChange={handleInput} />
      </div>
      <div className="flex gap-8 justify-center">
        <button
          className="w-[80px] h-[32px] bg-red-500 hover:bg-red-400 text-[16px] text-white font-bold rounded-md"
          onClick={resetNewProjectData}
        >
          초기화
        </button>
        <button
          className="w-[80px] h-[32px] bg-[#276955] hover:opacity-80 disabled:opacity-40 text-[16px] text-white font-bold rounded-md"
          onClick={submitNewProject}
          disabled={true}
        >
          등록하기
        </button>
      </div>
    </div>
  )
}
