import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  limit,
  where,
  deleteDoc,
} from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTION } from '@constants/collection'
import { Post } from '@model/blog'
import { NUMBER_OF_RECENT_POSTS, NUMBER_OF_RELATED_POSTS } from '@/constants'

export async function getPosts(category: string) {
  const postsQuery =
    category === 'all'
      ? query(collection(store, COLLECTION.BLOG), orderBy('createdAt', 'desc'))
      : query(
          collection(store, COLLECTION.BLOG),
          where('category', 'array-contains', category),
        )

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

export async function getRecentPosts() {
  const postsQuery = query(
    collection(store, COLLECTION.BLOG),
    orderBy('createdAt', 'desc'),
    limit(NUMBER_OF_RECENT_POSTS),
  )

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

export async function getRelatedPosts(id: string, categories: string[]) {
  const relatedQuery = query(
    collection(store, COLLECTION.BLOG),
    where('category', 'array-contains-any', categories),
    limit(3),
  )

  const relatedSnapshot = await getDocs(relatedQuery)

  const relatedPosts = relatedSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Post,
  )

  const filteredPosts = relatedPosts.filter((post) => post.id !== id)

  if (filteredPosts.length > NUMBER_OF_RELATED_POSTS) filteredPosts.splice(2, 1)

  return filteredPosts
}

export async function deletePost(id: string) {
  const isDelete = confirm('해당 포스트를 정말 삭제하시겠습니까?')

  if (isDelete) {
    await deleteDoc(doc(store, COLLECTION.BLOG, id))
  }
}
