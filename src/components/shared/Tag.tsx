const TagStyleMap = {
  project:
    'text-[8px] md:text-[10px] lg:text-[12px] text-white dark:text-black bg-light-primary dark:bg-dark-primary font-semibold px-2 py-1 rounded-3xl',
  blog: 'px-[10px] py-[2px] text-[14px] font-medium rounded-2xl bg-light-primary dark:bg-dark-primary text-white dark:text-black',
}

interface TagProps {
  type: 'project' | 'blog'
  label: string
}

export default function Tag({ type, label }: TagProps) {
  return <div className={TagStyleMap[type]}>{label.toUpperCase()}</div>
}
