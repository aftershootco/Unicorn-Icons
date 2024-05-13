import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const CollectionsIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<path
				d='M4.83285 5.50028L7.49951 5.5H9.49951H14.1662C14.5198 5.5 14.8589 5.64048 15.109 5.89052C15.359 6.14057 15.4995 6.47971 15.4995 6.83333V12.1667C15.4995 12.5203 15.359 12.8594 15.109 13.1095C14.8589 13.3595 14.5198 13.5 14.1662 13.5H4.83285C4.47922 13.5 4.14008 13.3595 3.89004 13.1095C3.63999 12.8594 3.49951 12.5203 3.49951 12.1667V6.83333C3.49951 6.47971 3.63954 6.14057 3.88959 5.89052C4.13964 5.64048 4.47922 5.50028 4.83285 5.50028Z'
				fill={modifiedColor}
				stroke={modifiedColor}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.33333 3.00028L5 3H7H11.6667C12.0203 3 12.3594 3.14048 12.6095 3.39052C12.8595 3.64057 13 3.97971 13 4.33333V9.66667C13 10.0203 12.8595 10.3594 12.6095 10.6095C12.3594 10.8595 12.0203 11 11.6667 11H2.33333C1.97971 11 1.64057 10.8595 1.39052 10.6095C1.14048 10.3594 1 10.0203 1 9.66667V4.33333C1 3.97971 1.14003 3.64057 1.39008 3.39052C1.64013 3.14048 1.97971 3.00028 2.33333 3.00028Z'
				stroke={modifiedColor}
				stroke-width='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(CollectionsIcon)
