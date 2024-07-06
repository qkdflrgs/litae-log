import { getProjects } from '@remote/project'
import { useQuery } from '@tanstack/react-query'

export default function useProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects(),
  })

  return { data, isLoading }
}
