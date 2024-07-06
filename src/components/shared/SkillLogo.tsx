import HtmlLogo from '/public/svg/html.svg'
import CssLogo from '/public/svg/css.svg'
import ReactLogo from '/public/svg/react.svg'
import TypeScriptLogo from '/public/svg/typescript.svg'
import NextJSLogo from '/public/svg/nextjs.svg'
import ZustandLogo from '/public/svg/zustand.svg'
import EmotionLogo from '/public/svg/emotion.svg'
import StyledComponentsLogo from '/public/svg/styledComponents.svg'
import FirebaseLogo from '/public/svg/firebase.svg'
import ReactQueryLogo from '/public/svg/reactQuery.svg'

const SkillMap = {
  html: {
    logo: HtmlLogo,
    name: 'HTML',
  },
  css: {
    logo: CssLogo,
    name: 'CSS',
  },
  react: {
    logo: ReactLogo,
    name: 'React',
  },
  typescript: {
    logo: TypeScriptLogo,
    name: 'TypeScript',
  },
  nextjs: {
    logo: NextJSLogo,
    name: 'Nextjs',
  },
  zustand: {
    logo: ZustandLogo,
    name: 'Zustand',
  },
  emotion: {
    logo: EmotionLogo,
    name: 'Emotion',
  },
  firebase: {
    logo: FirebaseLogo,
    name: 'Firebase',
  },
  reactQuery: {
    logo: ReactQueryLogo,
    name: 'ReactQuery',
  },
  styledComponents: {
    logo: StyledComponentsLogo,
    name: 'StyledComponents',
  },
}

export type SkillType = keyof typeof SkillMap

interface SkillLogoProps {
  type: SkillType
}

export default function SkillLogo({ type }: SkillLogoProps) {
  const { logo: LogoComponent, name } = SkillMap[type]

  return (
    <div className="flex gap-2 justify-center items-center select-none">
      <LogoComponent
        className={`h-[40px] w-[40px] ${type === 'nextjs' && 'fill-black dark:fill-gray-300'} ${type === 'typescript' && 'fill-blue-500'}`}
      />
      <span className="text-[12px] sm:text-[20px] font-semibold text-dark-dp12 dark:text-gray-300">
        {name}
      </span>
    </div>
  )
}
