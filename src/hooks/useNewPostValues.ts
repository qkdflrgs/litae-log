import { COLLECTION } from '@constants/collection'
import { Post } from '@model/blog'
import { store } from '@remote/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { ChangeEvent, MouseEvent, useState } from 'react'

export default function useNewPostValues() {
  const [newPostData, setNewPostData] = useState<
    Omit<Post, 'id' | 'createdAt'>
  >({
    title: '',
    description: '',
    thumbnailImage: '',
    content: '',
    category: [],
    index: [],
  })
  const [index, setIndex] = useState<string>('')
  const [category, setCategory] = useState<string>('')

  const handleInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target

    setNewPostData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleArrayInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target

    if (id === 'index') {
      setIndex(value)
    }

    if (id === 'category') {
      setCategory(value)
    }
  }

  const handleAddButton = (e: MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name

    if (name === 'index') {
      const last = newPostData[name]

      setNewPostData((prev) => ({
        ...prev,
        [name]: [...last, index],
      }))

      ResetValueMap[name]()
    }

    if (name === 'category') {
      const last = newPostData[name]

      setNewPostData((prev) => ({
        ...prev,
        [name]: [...last, category],
      }))

      ResetValueMap[name]()
    }
  }

  const handleRemoveIndex = (name: string) => {
    const removed = newPostData.index.filter((item) => item !== name)

    setNewPostData((prev) => ({
      ...prev,
      index: removed,
    }))
  }

  const handleRemoveCategory = (name: string) => {
    const removed = newPostData.category.filter((item) => item !== name)

    setNewPostData((prev) => ({
      ...prev,
      category: removed,
    }))
  }

  const ResetValueMap = {
    all: () =>
      setNewPostData({
        title: '',
        description: '',
        thumbnailImage: '',
        content: '',
        category: [],
        index: [],
      }),
    index: () => setIndex(''),
    category: () => setCategory(''),
  }

  const submitNewPost = async () => {
    const postData = {
      ...newPostData,
      createdAt: Date.now(),
    }

    await addDoc(collection(store, COLLECTION.BLOG), postData)

    alert('글이 작성되었습니다')
    ResetValueMap['all']()
  }

  return {
    newPostData,
    index,
    category,
    setNewPostData,
    handleInput,
    handleArrayInput,
    handleAddButton,
    handleRemoveIndex,
    handleRemoveCategory,
    ResetValueMap,
    submitNewPost,
  }
}
