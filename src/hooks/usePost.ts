import { getPost } from '@remote/post'
import { useQuery } from '@tanstack/react-query'

export default function usePost(id: string) {
  const { data } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id),
  })

  return { data }
}
