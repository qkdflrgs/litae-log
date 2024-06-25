import { storage } from '@/remote/firebase'
import { v4 as uuidv4 } from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export default function useUploadImage() {
  const uploadImage = async (type: 'blog' | 'project', file: File) => {
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

  return { uploadImage }
}
