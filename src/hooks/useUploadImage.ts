import { storage } from '@remote/firebase'
import { v4 as uuidv4 } from 'uuid'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage'
import { ChangeEvent, useState } from 'react'

export default function useUploadImage(type: 'blog' | 'project') {
  const [image, setImage] = useState<string | null>()

  const handleInputImg = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      const url = await uploadImage(file)

      setImage(url)
    }
  }

  const handleDeleteImg = async () => {
    if (image != null) {
      await deleteObject(ref(storage, image))
      setImage('')
    }
  }

  const uploadImage = async (file: File) => {
    const storageRef = ref(storage, `${type}_images/${uuidv4()}`)
    try {
      const snapshot = await uploadBytes(storageRef, file)
      const downloadUrl = await getDownloadURL(snapshot.ref)

      return downloadUrl
    } catch (error) {
      console.log(error)
      return null
    }
  }

  return { image, handleInputImg, handleDeleteImg }
}
