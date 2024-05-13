import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
	inActive?: boolean
}

export const MinimizeIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		bgOpacity = DEFAULT_ICON.BG_OPACITY,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg
			viewBox='0 0 11 11'
			fill={modifiedColor}
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: iconSize }}
			{...restProps}
			ref={forwardedRef}
		>
			<path d='M11 4.399V5.5H0V4.399h11z' fill={modifiedColor} />
		</svg>
	)

	const secondary = (
		<svg
			viewBox='0 0 11 11'
			fill={modifiedColor}
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: iconSize }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M11 8.798H8.798V11H0V2.202h2.202V0H11v8.798zm-3.298-5.5h-6.6v6.6h6.6v-6.6zM9.9 1.1H3.298v1.101h5.5v5.5h1.1v-6.6z'
				fill={modifiedColor}
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(MinimizeIcon)
