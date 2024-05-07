import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary';
type Props = Omit<IconProps, 'variant'> & {
  variant?: IconVariant;
  bgColor?: string;
};

export const BulbIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}
	{...restProps}
	ref={forwardedRef} >
<g clip-path="url(#clip0_4599_73070)">
<path d="M12.7667 3.73333L12.3 4.2M2.5 8H3.16667H2.5ZM8.5 2V2.66667V2ZM13.8333 8H14.5H13.8333ZM4.23333 3.73333L4.7 4.2L4.23333 3.73333Z" stroke={modifiedColor} stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5013 10.666C5.94162 10.2463 5.52819 9.66103 5.31959 8.99324C5.11099 8.32546 5.11779 7.60896 5.33902 6.94526C5.56026 6.28155 5.98472 5.70428 6.55227 5.29521C7.11982 4.88614 7.80169 4.66602 8.5013 4.66602C9.20091 4.66602 9.88278 4.88614 10.4503 5.29521C11.0179 5.70428 11.4423 6.28155 11.6636 6.94526C11.8848 7.60896 11.8916 8.32546 11.683 8.99324C11.4744 9.66103 11.061 10.2463 10.5013 10.666C10.241 10.9237 10.045 11.239 9.92922 11.5864C9.8134 11.9339 9.781 12.3037 9.83464 12.666C9.83464 13.0196 9.69416 13.3588 9.44411 13.6088C9.19406 13.8589 8.85492 13.9993 8.5013 13.9993C8.14768 13.9993 7.80854 13.8589 7.55849 13.6088C7.30844 13.3588 7.16797 13.0196 7.16797 12.666C7.22161 12.3037 7.1892 11.9339 7.07339 11.5864C6.95757 11.239 6.76159 10.9237 6.5013 10.666" stroke={modifiedColor} stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.96484 11.334H10.0315" stroke={modifiedColor} stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4599_73070">
<rect width="16" height="16" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant}  />
})

