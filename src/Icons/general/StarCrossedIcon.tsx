import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const StarCrossedIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<g id='star-off' clipPath='url(#clip0_3606_114667)'>
				<path id='Vector' d='M1.75 2.71875L12.25 13.2187' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
				<path
					id='Vector_2'
					d='M5.84048 4.47806L6.99606 2.13656L8.79623 5.78414L12.8212 6.36748L10.2423 8.87814L5.84048 4.47806ZM10.2493 11.2173L10.5923 13.2158L7.00015 11.3229L3.39982 13.2158L4.08757 9.20656L1.1709 6.36748L4.86165 5.83256'
					fill={modifiedColor}
				/>
			</g>
			<defs>
				<clipPath id='clip0_3606_114667'>
					<rect width='14' height='14' fill='white' transform='translate(0 0.96875)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(StarCrossedIcon)
