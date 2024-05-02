import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const StarIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	// props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			enable-background='new 0 0 24 24'
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill={modifiedColor}
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<g>
				<rect fill='none' height='24' width='24' />
				<path d='M14.43,10l-1.47-4.84c-0.29-0.95-1.63-0.95-1.91,0L9.57,10H5.12c-0.97,0-1.37,1.25-0.58,1.81l3.64,2.6l-1.43,4.61 c-0.29,0.93,0.79,1.68,1.56,1.09L12,17.31l3.69,2.81c0.77,0.59,1.85-0.16,1.56-1.09l-1.43-4.61l3.64-2.6 c0.79-0.57,0.39-1.81-0.58-1.81H14.43z' />
			</g>
		</svg>
	)

	const secondary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 11 11'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<path
				d='m5.5 1 1.39 2.962L10 4.44 7.75 6.744 8.281 10 5.5 8.462 2.719 10l.531-3.256L1 4.44l3.11-.478L5.5 1Z'
				fill={modifiedColor}
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	const tertiary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 14 13'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<path
				d='M6.99989 10.8333L2.88522 12.9966L3.67122 8.41462L0.337891 5.16996L4.93789 4.50329L6.99522 0.334625L9.05256 4.50329L13.6526 5.16996L10.3192 8.41462L11.1052 12.9966L6.99989 10.8333Z'
				fill={modifiedColor}
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary, tertiary }} variant={variant} />
})

export default React.memo(StarIcon)
