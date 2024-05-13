import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const RevertIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<g id='rotate' clipPath='url(#clip0_1965_89625)'>
				<path
					id='Vector'
					d='M4.24346 10.8336C4.45419 12.4413 5.24364 13.9171 6.46402 14.9847C7.6844 16.0523 9.25205 16.6386 10.8735 16.6338C12.495 16.6289 14.0591 16.0333 15.2731 14.9584C16.487 13.8835 17.2676 12.403 17.4688 10.794C17.6699 9.18507 17.2777 7.55798 16.3657 6.21732C15.4537 4.87666 14.0843 3.91435 12.5139 3.51052C10.9435 3.10669 9.27982 3.28903 7.83419 4.02341C6.38856 4.75779 5.26012 5.99386 4.66012 7.50023M4.24346 3.33357V7.50023H8.41012'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='square'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1965_89625'>
					<rect width='20' height='20' fill='white' transform='matrix(-1 0 0 -1 20.8682 20)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(RevertIcon)
