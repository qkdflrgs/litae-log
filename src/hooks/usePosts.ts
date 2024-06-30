'use client'

import { getPosts } from '@remote/post'
import { useQuery } from '@tanstack/react-query'

export default function usePosts(limit?: number) {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(limit),
  })

  return { data }
}
