import { FC } from 'react'

type IconName =
  | 'bright'
  | 'browser-setting'
  | 'flutter'
  | 'golang'
  | 'hand-clasp'
  | 'hand-service'
  | 'kotlin'
  | 'magnifying-chart'
  | 'metophone'
  | 'mobile'
  | 'mornitor-setting'
  | 'mornitor'
  | 'nextjs'
  | 'react'
  | 'research'
  | 'shiny-star'
  | 'swift'
  | 'thumb-up'
  | 'typescript'
  | 'ux'

interface IconProps {
  name: IconName
  size?: number | string
  color?: string
}

const Icon: FC<IconProps> = ({ name, size, color }) => (
  <i className={`icon ${name}`} style={{ fontSize: size, color }} />
)

Icon.defaultProps = {
  size: 'inherit',
  color: 'inherit',
}

export default Icon
