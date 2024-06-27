'use client'

import useNewProjectValues from '@hooks/useNewProjectValues'
import useUploadImage from '@hooks/useUploadImage'
import Image from 'next/image'

export default function NewProjectPage() {
  const {
    newProjectData,
    projectLink,
    summary,
    skills,
    contents,
    contentsLink,
    handleObjectInput,
    ResetInputMap,
    removeObjectInput,
    handleInput,
    handleAddButton,
    handleAddContentsLink,
    handleRemoveContentsLink,
    submitNewProject,
  } = useNewProjectValues()
  const { image, handleInputImg, handleDeleteImg } = useUploadImage('project')

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
      {/* 썸네일 이미지 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="thumbnailImage">썸네일 이미지</label>
        <input
          id="thumbnailImage"
          placeholder="썸네일 이미지를 입력해주세요"
          value={newProjectData.thumbnailImage}
          onChange={handleInput}
          className="rounded-md p-2 outline-green-800"
          type="text"
        />
      </div>
      {/* 프로젝트 링크 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="linkUrl">프로젝트 링크</label>
        <div className="bg-white min-h-[100px] rounded-md p-2">
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
            className="w-full rounded-md p-2 outline-green-800"
            type="text"
          />
          <input
            id="projectLink_url"
            placeholder="프로젝트 링크 url을 입력해주세요"
            value={projectLink.url}
            onChange={handleObjectInput}
            className="w-full rounded-md p-2 outline-green-800"
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
        <label htmlFor="linkUrl">프로젝트 요약</label>
        <div className="bg-white min-h-[100px] overflow-auto rounded-md p-2">
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
            className="w-full rounded-md p-2 outline-green-800"
            type="text"
          />
          <input
            id="summary_description"
            placeholder="요약 설명을 입력해주세요"
            value={summary.description}
            onChange={handleObjectInput}
            className="w-full rounded-md p-2 outline-green-800"
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
        <label htmlFor="linkUrl">기술 스택</label>
        <div className="bg-white min-h-[100px] overflow-auto rounded-md p-2">
          {newProjectData.skills?.map((skill) => (
            <div
              key={skill.name}
              onClick={() => removeObjectInput('skills', skill.name)}
              className="flex flex-col p-2 border rounded-md"
            >
              <div className="flex gap-4">
                <span className="font-bold">기술 스택 이름</span>
                <span>{skill.name}</span>
              </div>
              <div className="flex gap-4">
                <span className="font-bold">기술 스택 이미지</span>
                <span>{skill.src}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <input
            id="skills_name"
            placeholder="기술 스택 이름을 입력해주세요"
            value={skills.name}
            onChange={handleObjectInput}
            className="w-full rounded-md p-2 outline-green-800"
            type="text"
          />
          <input
            id="skills_src"
            placeholder="기술 스택 이미지를 입력해주세요"
            value={skills.src}
            onChange={handleObjectInput}
            className="w-full rounded-md p-2 outline-green-800"
            type="text"
          />
          <button
            name="skills"
            className="w-[160px] bg-green-800 rounded-lg text-white disabled:opacity-40"
            onClick={handleAddButton}
            disabled={skills.name.length === 0 || skills.src.length === 0}
          >
            추가
          </button>
        </div>
      </div>
      {/* 프로젝트 내용 */}
      <div className="flex flex-col gap-2">
        <label htmlFor="description">프로젝트 내용</label>
        <div className="bg-white min-h-[200px] max-h-[300px] overflow-y-scroll rounded-md p-2">
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
        <div className="flex flex-col gap-2 p-4 bg-white min-h-[100px] max-h-[200px] overflow-y-scroll rounded-md">
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
          className="rounded-md p-2 outline-green-800"
          type="text"
        />
        <input
          id="contents_content"
          placeholder="컨텐츠 내용을 입력해주세요"
          value={contents.content}
          onChange={handleObjectInput}
          className="rounded-md p-2 outline-green-800"
          type="text"
        />
        <input
          id="contents_imageUrl"
          placeholder="컨텐츠 이미지를 입력해주세요"
          value={contents.imageUrl}
          onChange={handleObjectInput}
          className="rounded-md p-2 outline-green-800"
          type="text"
        />
        <div className="flex gap-4">
          <input
            id="contentsLink_name"
            placeholder="컨텐츠 링크 제목을 입력해주세요"
            value={contentsLink.name}
            onChange={handleObjectInput}
            className="w-full rounded-md p-2 outline-green-800"
            type="text"
          />
          <input
            id="contentsLink_url"
            placeholder="컨텐츠 링크 URL을 입력해주세요"
            value={contentsLink.url}
            onChange={handleObjectInput}
            className="w-full rounded-md p-2 outline-green-800"
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
        <label htmlFor="image">썸네일 이미지</label>
        <div className="flex gap-4 p-4 w-full min-h-[60px] bg-white rounded-md">
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
          <input id="image" type="file" onChange={handleInputImg} />
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
        <label htmlFor="description">프로젝트 상태</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              id="status_process"
              name="status"
              value="process"
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
              onChange={handleInput}
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
          onClick={ResetInputMap['all']}
        >
          초기화
        </button>
        <button
          className="w-[80px] h-[32px] bg-[#276955] hover:opacity-80 disabled:opacity-40 text-[16px] text-white font-bold rounded-md"
          onClick={submitNewProject}
          disabled={false}
        >
          등록하기
        </button>
      </div>
    </div>
  )
}
