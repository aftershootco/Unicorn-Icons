import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const DuplicateFillIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<path
				d='M10.5 0H1.5C0.671573 0 0 0.671573 0 1.5V3C0 3.82843 0.671573 4.5 1.5 4.5H10.5C11.3284 4.5 12 3.82843 12 3V1.5C12 0.671573 11.3284 0 10.5 0Z'
				fill={modifiedColor}
			/>
			<path
				d='M10.5 7.5H1.5C0.671573 7.5 0 8.17157 0 9V10.5C0 11.3284 0.671573 12 1.5 12H10.5C11.3284 12 12 11.3284 12 10.5V9C12 8.17157 11.3284 7.5 10.5 7.5Z'
				fill={modifiedColor}
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(DuplicateFillIcon)
