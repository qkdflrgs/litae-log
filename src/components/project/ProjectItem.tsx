import Link from 'next/link'
import Tag from '../shared/Tag'

interface ProjectItemProps {
  id: string
  tag: string
  title: string
  description: string
  thumbnailImage: string
}

export default function ProjectItem({
  id,
  tag,
  title,
  description,
  thumbnailImage,
}: ProjectItemProps) {
  return (
    <Link
      href={`/project/${id}`}
      className="w-full max-h-[300px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:bg-gray-500 before:opacity-40 hover:before:opacity-60 before:rounded-md lg:h-[360px]"
    >
      <img
        className="w-full h-full object-cover rounded-md"
        src={!thumbnailImage ? 'default.webp' : thumbnailImage}
        alt={title}
      />
      <div className="absolute bottom-[20px] px-5 flex flex-col gap-2">
        <div className="flex gap-4">
          <Tag type="project" label={tag} />
        </div>
        <span className="text-[16px] lg:text-[28px] text-white color-gray-600 font-bold">
          {title}
        </span>
        <p className="text-[12px] text-gray-200 font-bold line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  )
}
