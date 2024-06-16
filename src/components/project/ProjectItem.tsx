import Link from 'next/link'

interface ProjectItemProps {
  id: string
  tag: string
  title: string
  thumbnailImage: string
}

export default function ProjectItem({
  id,
  tag,
  title,
  thumbnailImage,
}: ProjectItemProps) {
  return (
    <Link
      href={`/project/${id}`}
      className="h-[360px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[360px] before:bg-gray-500 before:opacity-40 hover:before:opacity-60 before:rounded-md"
    >
      <img
        className="h-full object-cover rounded-md"
        src={thumbnailImage}
        alt={title}
      />
      <div className="absolute bottom-[72px] left-5 text-[12px] text-black bg-white font-semibold px-2 py-1 rounded-3xl">
        {tag}
      </div>
      <span className="absolute bottom-[24px] left-5 text-[28px] text-white font-bold">
        {title}
      </span>
    </Link>
  )
}
