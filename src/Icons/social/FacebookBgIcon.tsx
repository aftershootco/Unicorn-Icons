import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	inActive?: boolean
}

export const FacebookBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', bgColor = '#4267B2', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color
	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants

	const primary = (
		<svg viewBox='0 0 60 40' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<rect width='60' height='40' rx='20' fill={bgColor} />
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M20 20.056c0 4.971 3.61 9.106 8.333 9.944v-7.223h-2.5V20h2.5v-2.223c0-2.5 1.611-3.888 3.89-3.888.721 0 1.5.111 2.221.222v2.556h-1.277c-1.223 0-1.5.61-1.5 1.389V20h2.666l-.444 2.777h-2.222V30C36.389 29.162 40 25.028 40 20.056 40 14.525 35.5 10 30 10s-10 4.525-10 10.056Z'
				fill={modifiedColor}
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(FacebookBgIcon)
