import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const MouseRightClick = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M11.6667 2.5H8.33333C6.49238 2.5 5 3.99238 5 5.83333V14.1667C5 16.0076 6.49238 17.5 8.33333 17.5H11.6667C13.5076 17.5 15 16.0076 15 14.1667V5.83333C15 3.99238 13.5076 2.5 11.6667 2.5Z'
				stroke={modifiedColor}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M10 8.16667V2.5H12.8827C13.9678 2.5 14.855 3.36526 14.8821 4.45002L15 9.16667H11C10.4477 9.16667 10 8.71895 10 8.16667Z'
				fill={modifiedColor}
			/>
		</svg>
	)

	const secondary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M11.6667 2.5H8.33333C6.49238 2.5 5 3.99238 5 5.83333V14.1667C5 16.0076 6.49238 17.5 8.33333 17.5H11.6667C13.5076 17.5 15 16.0076 15 14.1667V5.83333C15 3.99238 13.5076 2.5 11.6667 2.5Z'
				stroke={modifiedColor}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M10 8.16667V2.5H12.8827C13.9678 2.5 14.855 3.36526 14.8821 4.45002L15 9.16667H11C10.4477 9.16667 10 8.71895 10 8.16667Z'
				stroke={modifiedColor}
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(MouseRightClick)
