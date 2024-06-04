import React from 'react'

import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const ClockIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color = DEFAULT_ICON.COLOR, size, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
			{...restProps}
		>
			<g clipPath='url(#clip0_517_1773)'>
				<path
					d='M6 10C7.933 10 9.5 8.433 9.5 6.5C9.5 4.567 7.933 3 6 3C4.067 3 2.5 4.567 2.5 6.5C2.5 8.433 4.067 10 6 10Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M6 5V6.5H7' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
				<path d='M3.5 2L2.125 3' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
				<path d='M8.5 2L9.875 3' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_517_1773'>
					<rect width='12' height='12' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg
			viewBox='0 0 22 22'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
			{...restProps}
		>
			<path
				d='M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Z'
				stroke={modifiedColor}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path d='M11 5v6l4 2' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(ClockIcon)
