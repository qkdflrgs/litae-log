import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTION } from '@constants/collection'
import { Project } from '@model/project'

export async function getProjects(limitNum?: number) {
  const projectsQuery = limitNum
    ? query(
        collection(store, COLLECTION.PROJECT),
        orderBy('startedAt', 'desc'),
        limit(limitNum),
      )
    : query(collection(store, COLLECTION.PROJECT), orderBy('startedAt', 'desc'))

  const projectsSnapshot = await getDocs(projectsQuery)

  const projects = projectsSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Project,
  )

  return projects
}

export async function getProject(id: string) {
  const projectRef = doc(store, COLLECTION.PROJECT, id)
  const projectSnap = await getDoc(projectRef)

  return projectSnap.data() as Project
}

export async function updateProject(id: string, updateData: Partial<Project>) {
  const projectRef = doc(store, COLLECTION.PROJECT, id)

  await updateDoc(projectRef, updateData)
  alert('프로젝트가 수정되었습니다')
}

export async function deleteProject(id: string) {
  const isDelete = confirm('해당 포스트를 정말 삭제하시겠습니까?')

  if (isDelete) {
    await deleteDoc(doc(store, COLLECTION.PROJECT, id))
  }
}
