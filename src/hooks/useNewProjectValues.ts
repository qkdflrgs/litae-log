import { SkillType } from '@/components/shared/SkillLogo'
import { COLLECTION } from '@constants/collection'
import {
  ContentsType,
  ImageType,
  LinkType,
  Project,
  SummaryType,
} from '@model/project'
import { store } from '@remote/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { ChangeEvent, MouseEvent, useState } from 'react'

export default function useNewProjectValues() {
  const [newProjectData, setNewProjectData] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    projectLink: [],
    thumbnailImage: '',
    summary: [],
    skills: [],
    contents: [],
    images: [],
    status: 'process',
    startedAt: '',
  })
  const [projectLink, setProjectLink] = useState<LinkType>({
    name: '',
    url: '',
  })
  const [summary, setSummary] = useState<SummaryType>({
    title: '',
    description: '',
  })
  const [skill, setSkill] = useState<SkillType>('html')
  const [contents, setContents] = useState<ContentsType>({
    title: '',
    content: '',
    imageUrl: '',
    link: [],
  })
  const [contentsLink, setContentsLink] = useState<LinkType>({
    name: '',
    url: '',
  })

  const ResetInputMap: { [key: string]: any } = {
    all: () =>
      setNewProjectData({
        title: '',
        description: '',
        thumbnailImage: '',
        projectLink: [],
        summary: [],
        skills: [],
        contents: [],
        images: [],
        status: 'process',
        startedAt: '',
      }),
    projectLink: () => setProjectLink({ name: '', url: '' }),
    summary: () => setSummary({ title: '', description: '' }),
    contents: () =>
      setContents({ title: '', content: '', imageUrl: '', link: [] }),
    contentsLink: () => setContentsLink({ name: '', url: '' }),
  }

  const removeObjectInput = (
    name: 'projectLink' | 'summary' | 'contents',
    value: string,
  ) => {
    const removed =
      name === 'projectLink'
        ? newProjectData[name].filter((item) => item.name !== value)
        : newProjectData[name].filter((item) => item.title !== value)

    setNewProjectData((prev) => ({
      ...prev,
      [name]: removed,
    }))
  }

  const handleSkillInput = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target

    setSkill(value as SkillType)
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    const name = id.split('_')[0]

    if (name === 'status') {
      setNewProjectData((prev) => ({
        ...prev,
        [name]: value as 'process' | 'done',
      }))
    } else if (name === 'startedAt') {
      const dateObject = new Date(value)

      setNewProjectData((prev) => ({
        ...prev,
        [id]: dateObject.getTime(),
      }))
    } else {
      setNewProjectData((prev) => ({
        ...prev,
        [id]: value,
      }))
    }
  }

  const handleObjectInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    const [type, key] = id.split('_')

    if (type === 'projectLink') {
      setProjectLink((prev) => ({
        ...prev,
        [key]: value,
      }))
    }

    if (type === 'summary') {
      setSummary((prev) => ({
        ...prev,
        [key]: value,
      }))
    }

    if (type === 'contents') {
      setContents((prev) => ({
        ...prev,
        [key]: value,
      }))
    }

    if (type === 'contentsLink') {
      setContentsLink((prev) => ({
        ...prev,
        [key]: value,
      }))
    }
  }

  const DataMap: { [key: string]: any } = {
    projectLink: projectLink,
    summary: summary,
    contents: contents,
  }

  const handleAddButton = (e: MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name as keyof Omit<
      Project,
      'id' | 'title' | 'description' | 'thumbnailImage' | 'status' | 'startedAt'
    >
    const last = newProjectData[name]

    setNewProjectData((prev) => ({
      ...prev,
      [name]: [...last, DataMap[name]],
    }))

    ResetInputMap[name]()
  }

  const handleAddContentsLink = () => {
    const last = contents.link

    setContents((prev) => ({
      ...prev,
      link: [...last, contentsLink],
    }))

    ResetInputMap['contentsLink']()
  }

  const handleAddSkill = () => {
    setNewProjectData((prev) => ({
      ...prev,
      skills: [...newProjectData.skills, skill],
    }))
  }

  const handleRemoveContentsLink = (name: string) => {
    const removed = contents.link.filter((item) => item.name !== name)

    setContents((prev) => ({
      ...prev,
      link: removed,
    }))
  }

  const submitNewProject = async () => {
    const statedAtData = newProjectData.startedAt
    const projectData = {
      ...newProjectData,
      startedAt: new Date(statedAtData).getTime(),
    }

    await addDoc(collection(store, COLLECTION.PROJECT), projectData)
  }

  const handleDeleteSkill = (name: SkillType) => {
    const filtered = newProjectData.skills.filter((skill) => skill !== name)

    setNewProjectData((prev) => ({
      ...prev,
      skills: filtered,
    }))
  }

  return {
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
    submitNewProject,
  }
}
