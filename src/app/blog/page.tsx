import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Title from '@shared/Title'

const BlogContent = dynamic(() => import('../../components/blog/BlogContent'), {
  ssr: false,
})

export default function BlogPage() {
  return (
    <>
      <Title
        title="Blog Posts"
        description="Record development experience and learning"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogContent />
      </Suspense>
    </>
  )
}
