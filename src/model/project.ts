export type LinkType = { name: string; url: string }
export type ImageType = { name: string; src: string }
export type SummaryType = { title: string; description: string }
export type ContentsType = {
  title: string
  content: string
  imageUrl: string
  link: LinkType[]
}

export interface Project {
  id: string
  title: string
  description: string
  thumbnailImage: string
  projectLink: LinkType[]
  summary: SummaryType[]
  skills: ImageType[]
  contents: ContentsType[]
  images: ImageType[]
  status: 'process' | 'done'
  startedAt: string
}
