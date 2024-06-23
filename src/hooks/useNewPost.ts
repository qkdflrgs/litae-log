import { COLLECTION } from '@/constants/collection'
import { Post } from '@/model/blog'
import { store } from '@/remote/firebase'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'

export default function useNewPost() {
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

  const resetNewPostData = () => {
    setNewPostData({
      title: '',
      description: '',
      thumbnailImage: '',
      content: '',
      category: [],
      index: [],
    })
  }

  const submitNewPost = async () => {
    const postData = {
      ...newPostData,
      createdAt: Date.now(),
    }

    await addDoc(collection(store, COLLECTION.BLOG), postData)
  }

  return { newPostData, setNewPostData, resetNewPostData, submitNewPost }
}
