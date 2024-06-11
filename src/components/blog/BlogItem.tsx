import Link from 'next/link'

interface BlogItemProps {
  title: string
  description: string
  thumbnailImage: string
  createdAt: string
  category: string[]
}

export default function BlogItem({
  title,
  description,
  thumbnailImage,
  createdAt,
  category,
}: BlogItemProps) {
  return (
    <li className="list-none flex flex-col gap-4">
      <Link href="" className="flex flex-col gap-8 hover:opacity-60">
        <img
          src={thumbnailImage}
          alt="이미지"
          className="w-full] object-cover"
        />
        <div className="flex flex-col gap-3">
          <div className="text-[#6941C6] text-[14px] font-semibold">
            {createdAt}
          </div>
          <div className="text-[24px] font-semibold">{title}</div>
          <div className="text-[#667085] text-[16px] hidden sm:block">
            {description}
          </div>
        </div>
      </Link>
      <div className="flex gap-[8px]">
        {category.map((tag) => {
          return (
            <div
              id={tag}
              className="px-[10px] py-[2px] text-[12px] font-medium rounded-2xl bg-purple-200 text-purple-700"
            >
              {tag}
            </div>
          )
        })}
      </div>
    </li>
  )
}
