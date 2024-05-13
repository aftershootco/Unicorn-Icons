import React from 'react'
import { IconProps } from '../../types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const TwitterIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg
			width={size}
			height={(15 / 18) * size}
			viewBox='0 0 18 15'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: (15 / 18) * size }}
			ref={forwardedRef}
			{...restProps}
		>
			<path
				d='M17.79 2.25a7.048 7.048 0 0 1-2 .541 3.452 3.452 0 0 0 1.532-1.9 7.01 7.01 0 0 1-2.211.833A3.498 3.498 0 0 0 13.133.682a3.525 3.525 0 0 0-2.21.361 3.455 3.455 0 0 0-1.53 1.614 3.392 3.392 0 0 0-.217 2.2 9.996 9.996 0 0 1-3.975-1.042A9.864 9.864 0 0 1 2 1.268a3.397 3.397 0 0 0-.06 3.347c.27.5.661.924 1.138 1.238a3.51 3.51 0 0 1-1.577-.43v.045c0 .793.278 1.562.787 2.175a3.492 3.492 0 0 0 2.006 1.193 3.554 3.554 0 0 1-1.573.059 3.442 3.442 0 0 0 1.239 1.706 3.515 3.515 0 0 0 2.014.678 7.05 7.05 0 0 1-4.325 1.47c-.277 0-.555-.016-.83-.047a9.95 9.95 0 0 0 5.336 1.543c6.406 0 9.908-5.233 9.908-9.772 0-.147-.004-.296-.01-.443a7.026 7.026 0 0 0 1.736-1.777l.001-.002Z'
				fill={modifiedColor}
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(TwitterIcon)
