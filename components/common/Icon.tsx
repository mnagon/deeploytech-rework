import { FC } from 'react'

type IconName =
  | 'bright'
  | 'browser-setting'
  | 'chevron-double-right'
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
  className?: string
}

const Icon: FC<IconProps> = ({ name, size, color, className }) => (
  <i className={`icon ${name} ${className}`} style={{ fontSize: size, color }} />
)

Icon.defaultProps = {
  size: 'inherit',
  color: 'inherit',
  className: '',
}

export default Icon
