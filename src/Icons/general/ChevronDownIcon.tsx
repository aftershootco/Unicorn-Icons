import * as React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			fill={modifiedColor}
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path d='M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z' />
		</svg>
	)

	const secondary = (
		<svg
			width='18'
			height='24.75'
			viewBox='0 0 18 11'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<g transform='rotate(180 9 5.5)'>
				<path
					d='M1.059 9.53 9 1.587l7.941 7.941'
					stroke={modifiedColor}
					stroke-opacity='.8'
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
				></path>
			</g>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(ChevronDownIcon)
