import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const SortCircleIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 35 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke={modifiedColor} stroke-opacity='.25' />
			<path d='M16 25V11m4 0v14M9 18l7-7m11 7-7 7' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(SortCircleIcon)
