import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  limit,
} from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTION } from '@constants/collection'
import { Post } from '@model/blog'

export async function getPosts(limitNum?: number) {
  const postsQuery = limitNum
    ? query(
        collection(store, COLLECTION.BLOG),
        orderBy('createdAt', 'desc'),
        limit(limitNum),
      )
    : query(collection(store, COLLECTION.BLOG), orderBy('createdAt', 'desc'))
  const postsSnapshot = await getDocs(postsQuery)

  const posts = postsSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Post,
  )

  return posts
}

export async function getPost(id: string) {
  const postRef = doc(store, COLLECTION.BLOG, id)
  const postSnap = await getDoc(postRef)

  return postSnap.data() as Post
}

export async function updatePost(id: string, updateData: Partial<Post>) {
  const postRef = doc(store, COLLECTION.BLOG, id)

  await updateDoc(postRef, updateData)
  alert('글이 수정되었습니다')
}
