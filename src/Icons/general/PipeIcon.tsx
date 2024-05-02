import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const PipeIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={(1 / 20) * size}
			height={size}
			viewBox='0 0 1 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: (1 / 20) * size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<line x1='0.5' x2='0.5' y2='20' stroke={modifiedColor} />
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(PipeIcon)
