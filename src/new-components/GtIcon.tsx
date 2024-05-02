import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary';
type Props = Omit<IconProps, 'variant'> & {
  variant?: IconVariant;
  bgColor?: string;
};

export const GtIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
<svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: size, height: size }}
	{...restProps}
	ref={forwardedRef} >
			<rect x='0.5' width='24' height='24' rx='12' fill='#1F6A46' />
			<g clip-path='url(#clip0_5609_37808)'>
				<path d='M8.2998 12L11.2998 15L17.2998 9' stroke={modifiedColor} stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_5609_37808'>
					<rect width='14.4' height='14.4' fill='white' transform='translate(5.2998 4.80005)' />
				</clipPath>
			</defs>
		</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant}  />
})

export default React.memo(GtIcon)
