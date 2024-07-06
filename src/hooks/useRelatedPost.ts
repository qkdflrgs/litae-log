import { getRelatedPosts } from '@/remote/post'
import { useQuery } from '@tanstack/react-query'

export default function useRelatedPost(id: string, categories: string[]) {
  const { data } = useQuery({
    queryKey: ['related', id],
    queryFn: () => getRelatedPosts(id, categories),
  })

  return { data }
}
