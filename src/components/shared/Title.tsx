import Link from 'next/link'

interface TitleProps {
  title: string
  description: string
  href: string
}

export default function Title({ title, description, href }: TitleProps) {
  return (
    <div className="flex flex-col gap-4 py-6 border-b-[1px] border-gray-400">
      <Link href={href}>
        <h1 className="text-[42px] text-green-800 font-extrabold">{title}</h1>
      </Link>
      <p className="text-[16px] text-[rgb(102,112,133)]">{description} </p>
    </div>
  )
}
