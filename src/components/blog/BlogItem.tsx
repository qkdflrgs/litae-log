import Link from 'next/link'
import Tag from '../shared/Tag'
import transformDate from '@/utils/transformDate'

interface BlogItemProps {
  id: string
  title: string
  description: string
  thumbnailImage: string
  createdAt: string
  category: string[]
}

export default function BlogItem({
  id,
  title,
  description,
  thumbnailImage,
  createdAt,
  category,
}: BlogItemProps) {
  return (
    <li className="list-none flex flex-col justify-between p-5 gap-2 bg-white dark:bg-dark-dp06 rounded-xl hover:-translate-y-2">
      <Link
        href={`/blog/${id}`}
        className="flex flex-col gap-4 hover:opacity-60"
      >
        <img
          src={!thumbnailImage ? 'default.webp' : thumbnailImage}
          alt="이미지"
          className="w-full] object-cover rounded-xl h-[240px]"
        />
        <div className="flex gap-[8px]">
          {category.map((tag) => {
            return <Tag key={tag} type="blog" label={tag} />
          })}
        </div>
        <div className="text-[18px] font-medium dark:text-white">{title}</div>
      </Link>
      <div className="flex justify-between">
        <span className="text-[12px] text-gray-400">
          {transformDate(createdAt)}
        </span>
        <span className="text-[12px] text-gray-400"></span>
      </div>
    </li>
  )
}
