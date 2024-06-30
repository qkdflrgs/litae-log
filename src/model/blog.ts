export interface Post {
  id: string
  title: string
  description: string
  thumbnailImage: string
  createdAt: string
  content: string
  category: string[]
  index: string[]
}

export interface newPost {
  title: string
  description: string
  thumbnailImage: string
  content: string
  category: string
}
