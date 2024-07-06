export default function ErrorPage() {
  return (
    <div className="w-full h-[400px] flex flex-col justify-center items-center gap-8">
      <h3 className="text-[36px] text-light-primary dark:text-dark-primary font-bold">
        404: 존재하지 않는 페이지입니다
      </h3>
      <a
        href="/"
        className="w-[100px] h-10 flex justify-center items-center bg-light-primary dark:bg-dark-primary rounded-lg text-white dark:text-black cursor-pointer"
      >
        홈으로
      </a>
    </div>
  )
}
