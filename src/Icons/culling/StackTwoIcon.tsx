import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const StackTwoIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<g clipPath='url(#clip0_8312_3364)'>
				<path
					d='M10.0002 5L3.3335 8.33333L10.0002 11.6667L16.6668 8.33333L10.0002 5Z'
					fill={modifiedColor}
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M3.3335 11.6666L10.0002 15L16.6668 11.6666'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
			</g>
			<defs>
				<clipPath id='clip0_8312_3364'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(StackTwoIcon)
