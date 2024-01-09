import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

export const MouseRightSelected = React.forwardRef<SVGSVGElement, IconProps>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={size} height={size} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...restProps} ref={forwardedRef}>
			<path
				d='M11.6667 2.5H8.33333C6.49238 2.5 5 3.99238 5 5.83333V14.1667C5 16.0076 6.49238 17.5 8.33333 17.5H11.6667C13.5076 17.5 15 16.0076 15 14.1667V5.83333C15 3.99238 13.5076 2.5 11.6667 2.5Z'
				stroke={color}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M10 8.16667V2.5H12.8827C13.9678 2.5 14.855 3.36526 14.8821 4.45002L15 9.16667H11C10.4477 9.16667 10 8.71895 10 8.16667Z'
				stroke={color}
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(MouseRightSelected)
