'use client'

import { getPosts } from '@remote/post'
import { useQuery } from '@tanstack/react-query'

export default function usePosts(category: string) {
  const { data, isLoading } = useQuery({
    queryKey: ['posts', category],
    queryFn: () => getPosts(category),
  })

  return { data, isLoading }
}
