import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant' | 'color'> & {
	variant?: IconVariant
	fillColor?: string
}

export const CircleFillIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', fillColor = DEFAULT_ICON.FILL_COLOR, inActive = false, size = DEFAULT_ICON.SIZE, ...restProps } = props

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<path
				d='M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z'
				fill={fillColor}
				fillOpacity={inActive ? 0.5 : 1}
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(CircleFillIcon)
