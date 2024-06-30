import { getProject } from '@remote/project'
import { useQuery } from '@tanstack/react-query'

export default function useProject(id: string) {
  const { data } = useQuery({
    queryKey: ['project', id],
    queryFn: () => getProject(id),
  })

  return { data }
}
