import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const ArrowFillRightIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={(6 / 12) * size}
			height={size}
			viewBox='0 0 6 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: (6 / 12) * size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path d='M0.25 11.5L5.75 6L0.25 0.5L0.25 11.5Z' fill={modifiedColor} />
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ArrowFillRightIcon)
