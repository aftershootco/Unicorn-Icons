import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type Props = IconProps & {
  bgColor?: string
  inActive?: boolean
}

export const Lockicon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
  //props
  const {
    variant = 'primary',
    color = DEFAULT_ICON.COLOR,
    bgColor = DEFAULT_ICON.BG_COLOR,
    size = DEFAULT_ICON.SIZE,
    inActive = false,
    ...restProps
  } = props

  const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

  // variants
  const primary = (
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1699_9697)">
<path d="M8.5 5.5H3.5C2.94772 5.5 2.5 5.94772 2.5 6.5V9.5C2.5 10.0523 2.94772 10.5 3.5 10.5H8.5C9.05229 10.5 9.5 10.0523 9.5 9.5V6.5C9.5 5.94772 9.05229 5.5 8.5 5.5Z" stroke="#D83D3D" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 8.5C6.27614 8.5 6.5 8.27614 6.5 8C6.5 7.72386 6.27614 7.5 6 7.5C5.72386 7.5 5.5 7.72386 5.5 8C5.5 8.27614 5.72386 8.5 6 8.5Z" stroke="#D83D3D" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 5.5V3.5C4 2.96957 4.21071 2.46086 4.58579 2.08579C4.96086 1.71071 5.46957 1.5 6 1.5C6.53043 1.5 7.03914 1.71071 7.41421 2.08579C7.78929 2.46086 8 2.96957 8 3.5V5.5" stroke="#D83D3D" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1699_9697">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(Lockicon)