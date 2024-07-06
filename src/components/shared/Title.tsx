import Link from 'next/link'

interface TitleProps {
  title: string
  description: string
}

export default function Title({ title, description }: TitleProps) {
  return (
    <div className="flex flex-col gap-2 border-b pb-4 border-light-border dark:border-dark-dp16">
      <p className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-light-primary dark:text-dark-primary">
        {title}
      </p>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}
