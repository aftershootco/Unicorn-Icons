import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
}

export const DollarIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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

	// variants
	const primary = (
		<svg
			width='8'
			height='14'
			viewBox='0 0 8 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M7.13334 4.33333C7.00064 3.95683 6.7583 3.62864 6.43751 3.39102C6.11673 3.1534 5.73217 3.01722 5.33333 3H2.66667C2.13624 3 1.62753 3.21071 1.25245 3.58579C0.877382 3.96086 0.666668 4.46957 0.666668 5C0.666668 5.53043 0.877382 6.03914 1.25245 6.41421C1.62753 6.78929 2.13624 7 2.66667 7H5.33333C5.86377 7 6.37248 7.21071 6.74755 7.58579C7.12262 7.96086 7.33333 8.46957 7.33333 9C7.33333 9.53043 7.12262 10.0391 6.74755 10.4142C6.37248 10.7893 5.86377 11 5.33333 11H2.66667C2.26783 10.9828 1.88327 10.8466 1.56249 10.609C1.2417 10.3714 0.999366 10.0432 0.866668 9.66667'
				stroke={modifiedColor}
				stroke-width='1.33333'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M4 11V13M4 1V3V1Z' stroke={modifiedColor} stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(DollarIcon)
