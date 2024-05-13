import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'secondary'
type Props = Omit<IconProps, 'variant' | 'inActive'> & {
	variant?: IconVariant
	fillColor: string
}

export const ArrowFillUpIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = '#E2E2E2', size = DEFAULT_ICON.SIZE, fillColor = '#292929', ...restProps } = props

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const secondary = (
		<svg viewBox='0 0 28 17' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<path d='M14 3L2 15H26L14 3Z' fill={fillColor} fillOpacity='0.8' />
			<path d='M2 15L14 3L26 15' stroke={color} stroke-opacity='0.1' stroke-width='3' />
		</svg>
	)
	return <BaseIcon variants={{ secondary }} variant={variant} />
})

export default React.memo(ArrowFillUpIcon)
