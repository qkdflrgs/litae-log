import { getProjects } from '@remote/project'
import { useQuery } from '@tanstack/react-query'

export default function useProjects(limit?: number) {
  const { data } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects(limit),
  })

  return { data }
}
