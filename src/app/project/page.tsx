'use client'

import ProjectItem from '@components/project/ProjectItem'
import Title from '@shared/Title'
import useProjects from '@hooks/useProjects'

export default function ProjectPage() {
  const { data } = useProjects()

  return (
    <>
      <Title title="My Projects" description="Where to record my projects" />
      <div className="w-full mt-[60px] grid sm:grid-cols-2 gap-[30px] justify-center">
        {data?.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            tag={project.status}
            title={project.title}
            description={project.description}
            thumbnailImage={project.thumbnailImage}
          />
        ))}
      </div>
    </>
  )
}
