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
  const [skills, setSkills] = useState<ImageType>({
    name: '',
    src: '',
  })
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
    skills: () => setSkills({ name: '', src: '' }),
    contents: () =>
      setContents({ title: '', content: '', imageUrl: '', link: [] }),
    contentsLink: () => setContentsLink({ name: '', url: '' }),
  }

  const removeObjectInput = (
    name: 'projectLink' | 'summary' | 'skills' | 'contents',
    value: string,
  ) => {
    const removed =
      name === 'projectLink' || name === 'skills'
        ? newProjectData[name].filter((item) => item.name !== value)
        : newProjectData[name].filter((item) => item.title !== value)

    setNewProjectData((prev) => ({
      ...prev,
      [name]: removed,
    }))
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    const name = id.split('_')[0]

    if (name === 'status') {
      setNewProjectData((prev) => ({
        ...prev,
        [name]: value as 'process' | 'done',
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

    if (type === 'skills') {
      setSkills((prev) => ({
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
    skills: skills,
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

  const handleRemoveContentsLink = (name: string) => {
    const removed = contents.link.filter((item) => item.name !== name)

    setContents((prev) => ({
      ...prev,
      link: removed,
    }))
  }

  const handleStatusInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
  }

  const submitNewProject = async () => {
    const statedAtData = newProjectData.startedAt
    const projectData = {
      ...newProjectData,
      startedAt: new Date(statedAtData).getTime(),
    }

    await addDoc(collection(store, COLLECTION.PROJECT), projectData)
  }

  return {
    newProjectData,
    projectLink,
    summary,
    skills,
    contents,
    contentsLink,
    setNewProjectData,
    handleObjectInput,
    removeObjectInput,
    ResetInputMap,
    handleInput,
    handleAddButton,
    handleAddContentsLink,
    handleRemoveContentsLink,
    submitNewProject,
  }
}
