import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
}

export const EyeCrossedIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color
	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants

	const primary = (
		<svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<g clipPath='url(#clip0_15106_88600)'>
				<path d='M2.5 2.5L17.5 17.5' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
				<path
					d='M8.82046 8.82227C8.50772 9.13478 8.33194 9.55873 8.33179 10.0008C8.33163 10.443 8.50711 10.867 8.81962 11.1798C9.13214 11.4925 9.55608 11.6683 9.9982 11.6684C10.4403 11.6686 10.8644 11.4931 11.1771 11.1806'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M14.4642 14.4574C13.1051 15.3741 11.6184 15.8332 10.0001 15.8332C6.66675 15.8332 3.88925 13.8891 1.66675 9.99989C2.80758 8.00405 4.09425 6.52072 5.52675 5.54905M7.80258 4.47072C8.5171 4.26632 9.25691 4.16392 10.0001 4.16655C13.3334 4.16655 16.1109 6.11072 18.3334 9.99989C17.6851 11.1341 16.9901 12.1032 16.2476 12.9066L7.80258 4.47072Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_15106_88600'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default EyeCrossedIcon
