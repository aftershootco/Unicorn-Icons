import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const FullScreenIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: iconSize }}
			{...restProps}
			ref={forwardedRef}
		>
			<path d='M13.3334 3.3335H16.6667V6.66683' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
			<path d='M11.6666 8.3335L16.6666 3.3335' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
			<path d='M6.66671 16.6668H3.33337V13.3335' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
			<path d='M3.33337 16.6665L8.33337 11.6665' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
			<path d='M13.3334 16.6668H16.6667V13.3335' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
			<path d='M11.6666 11.6665L16.6666 16.6665' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
			<path d='M6.66671 3.3335H3.33337V6.66683' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
			<path d='M3.33337 3.3335L8.33337 8.3335' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(FullScreenIcon)
