import { Post } from '@model/blog'
import transformDate from '@utils/transformDate'
import Link from 'next/link'

interface RecentPostsProps {
  posts: Post[]
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  const [firstPost, secondPost, thirdPost] = [posts[0], posts[1], posts[2]]

  return (
    <div className="w-full flex flex-col gap-4">
      {firstPost && (
        <Link
          href={`/blog/${firstPost.id}`}
          className="flex bg-white dark:bg-dark-dp06 hover:opacity-80 w-full h-full sm:h-[250px] rounded-xl p-4 sm:p-6 gap-8 flex-col sm:flex-row"
        >
          <div className="flex flex-1">
            <img
              className="w-full h-[300px] sm:h-full object-cover rounded-xl"
              src={
                firstPost.thumbnailImage.length === 0
                  ? '/default.webp'
                  : firstPost.thumbnailImage
              }
            />
          </div>
          <div className="flex flex-1 flex-col justify-between gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                {firstPost.category.map((item) => (
                  <div
                    key={item}
                    className="px-[10px] py-[2px] text-[14px] font-medium rounded-2xl bg-light-primary text-white dark:bg-dark-primary dark:text-black"
                  >
                    {item.toUpperCase()}
                  </div>
                ))}
              </div>
              <span className="text-[16px] sm:text-[18px] font-bold dark:text-white">
                {firstPost.title}
              </span>
              <p className="hidden sm:line-clamp-2 lg:line-clamp-3 text-ellipsis text-gray-400">
                {firstPost.description}
              </p>
            </div>
            <div className="text-end text-gray-400">
              {transformDate(firstPost.createdAt)}
            </div>
          </div>
        </Link>
      )}

      <div className="w-full flex flex-col lg:flex-row gap-4">
        {secondPost && (
          <Link
            href={`/blog/${secondPost.id}`}
            className="flex bg-white dark:bg-dark-dp06 hover:opacity-80 w-full h-full sm:h-[250px] rounded-xl p-4 sm:p-6 gap-8 flex-col sm:flex-row"
          >
            <div className="flex flex-1">
              <img
                className="w-full h-[300px] sm:h-full object-cover rounded-xl"
                src={
                  secondPost.thumbnailImage.length === 0
                    ? '/default.webp'
                    : secondPost.thumbnailImage
                }
              />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  {secondPost.category.map((item) => (
                    <div
                      key={item}
                      className="px-[10px] py-[2px] text-[14px] font-medium rounded-2xl bg-light-primary text-white dark:bg-dark-primary dark:text-black"
                    >
                      {item.toUpperCase()}
                    </div>
                  ))}
                </div>
                <span className="text-[16px] sm:text-[18px] font-bold dark:text-white">
                  {secondPost.title}
                </span>
                <p className="lg:hidden sm:line-clamp-2 lg:line-clamp-3 text-ellipsis text-gray-400">
                  {secondPost.description}
                </p>
              </div>
              <div className="text-end text-gray-400">
                {transformDate(secondPost.createdAt)}
              </div>
            </div>
          </Link>
        )}
        {thirdPost && (
          <Link
            href={`/blog/${thirdPost.id}`}
            className="flex bg-white dark:bg-dark-dp06 hover:opacity-80 w-full h-full sm:h-[250px] rounded-xl p-4 sm:p-6 gap-8 flex-col sm:flex-row"
          >
            <div className="flex flex-1">
              <img
                className="w-full h-[300px] sm:h-full object-cover rounded-xl"
                src={
                  thirdPost.thumbnailImage.length === 0
                    ? '/default.webp'
                    : thirdPost.thumbnailImage
                }
              />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  {thirdPost.category.map((item) => (
                    <div
                      key={item}
                      className="px-[10px] py-[2px] text-[14px] font-medium rounded-2xl bg-light-primary text-white dark:bg-dark-primary dark:text-black"
                    >
                      {item.toUpperCase()}
                    </div>
                  ))}
                </div>
                <span className="text-[16px] sm:text-[18px] font-bold dark:text-white">
                  {thirdPost.title}
                </span>
                <p className="lg:hidden sm:line-clamp-2 lg:line-clamp-3 text-ellipsis text-gray-400">
                  {thirdPost.description}
                </p>
              </div>
              <div className="text-end text-gray-400">
                {transformDate(thirdPost.createdAt)}
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
