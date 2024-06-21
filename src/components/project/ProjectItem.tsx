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
      className="w-full h-[360px] relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[360px] before:bg-gray-500 before:opacity-40 hover:before:opacity-60 before:rounded-md"
    >
      <img
        className="w-full h-full object-cover rounded-md"
        src={thumbnailImage}
        alt={title}
      />
      <div className="absolute bottom-[20px] px-5 flex flex-col gap-2">
        <div className="flex gap-4">
          <div className="text-[12px] text-black bg-white font-semibold px-2 py-1 rounded-3xl">
            {tag}
          </div>
        </div>
        <span className="text-[28px] text-white font-bold">{title}</span>
        <p className="text-[12px] text-gray-400 font-bold">
          배달의 민족 프로젝트는 배달 앱의 쿠폰시스템을 클론한 프로젝트입니다.
        </p>
      </div>
    </Link>
  )
}
