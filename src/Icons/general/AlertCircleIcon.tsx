import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const AlertCircleIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants

	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 22 22'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Zm0-15v5.063'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<circle cx='11' cy='14.75' r='1' fill={modifiedColor} />
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(AlertCircleIcon)
