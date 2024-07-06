import { getRecentPosts } from '@/remote/post'
import { getRecentProjects } from '@/remote/project'
import { useQuery } from '@tanstack/react-query'

export default function useRecent() {
  const { data: posts } = useQuery({
    queryKey: ['posts', 'recent'],
    queryFn: getRecentPosts,
  })

  const { data: projects } = useQuery({
    queryKey: ['projects', 'recent'],
    queryFn: getRecentProjects,
  })

  return { posts, projects }
}
