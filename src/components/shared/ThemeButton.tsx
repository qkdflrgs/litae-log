import LightIcon from '/public/svg/light.svg'
import MoonIcon from '/public/svg/moon.svg'

interface DarkModeButtonProps {
  isDarkMode: boolean
  toggleTheme: () => void
}

export default function DarkModeButton({
  isDarkMode,
  toggleTheme,
}: DarkModeButtonProps) {
  return (
    <div className="flex justify-center w-full">
      <label
        htmlFor="toggleButton"
        className="flex items-center cursor-pointer"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="toggleButton"
            checked={isDarkMode}
            onChange={toggleTheme}
            className="sr-only"
          />

          <div className="block bg-gray-600 w-[70px] h-8 rounded-full"></div>

          <div className="dot absolute flex justify-center items-center left-2 top-1 bg-white dark:bg-dark-dp04 w-6 h-6 rounded-full transition">
            {isDarkMode ? (
              <MoonIcon width={16} height={16} className="fill-dark-primary" />
            ) : (
              <LightIcon
                width={16}
                height={16}
                className="stroke-light-primary"
              />
            )}
          </div>
        </div>
      </label>
    </div>
  )
}
