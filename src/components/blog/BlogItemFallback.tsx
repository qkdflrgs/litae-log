export default function BlogItemFallback() {
  return (
    <li className="list-none flex flex-col justify-between p-5 gap-2 bg-white dark:bg-dark-dp06 rounded-xl">
      <div className="flex flex-col gap-4">
        <div className="w-full h-[240px] rounded-xl bg-gray-200 dark:bg-dark-dp24 animate-pulse"></div>
        <div className="flex gap-[8px]">
          <div className="w-[120px] h-[24px] font-medium rounded-2xl bg-gray-200 dark:bg-dark-dp24 animate-pulse"></div>
        </div>
        <div className="w-[180px] h-4 bg-gray-200 dark:bg-dark-dp24 rounded-2xl animate-pulse"></div>
      </div>
      <div className="flex justify-end">
        <div className="w-[100px] h-4 bg-gray-200 dark:bg-dark-dp24 rounded-2xl animate-pulse"></div>
      </div>
    </li>
  )
}
