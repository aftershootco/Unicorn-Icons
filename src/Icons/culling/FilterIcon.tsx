import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type Props = IconProps & {
	inActive?: boolean
}

export const FilterIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	// props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<path
				d='M1.58293 1.16666H12.4163C12.5363 1.20875 12.6451 1.27775 12.7343 1.36838C12.8235 1.459 12.8908 1.56885 12.931 1.68951C12.9713 1.81016 12.9833 1.93842 12.9663 2.06446C12.9493 2.1905 12.9037 2.31098 12.8329 2.41666L8.66627 6.99999V12.8333L5.33293 10.3333V6.99999L1.16627 2.41666C1.09551 2.31098 1.04988 2.1905 1.03287 2.06446C1.01587 1.93842 1.02794 1.81016 1.06815 1.68951C1.10837 1.56885 1.17567 1.459 1.2649 1.36838C1.35413 1.27775 1.46292 1.20875 1.58293 1.16666Z'
				stroke={modifiedColor}
				stroke-width='2'
				stroke-miterlimit='6.07152'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(FilterIcon)
