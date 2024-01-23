import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

const SprayCircleIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 35 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<rect x='0.5' y='0.5' width='34' height='34' rx='17' stroke={modifiedColor} stroke-opacity={DEFAULT_ICON.CIRCLE_OPACITY} />
			<path
				d='M20.6 13.9312V13.2542C20.6 12.7432 20.1534 12.3406 19.6207 12.3406H18.8414V10.8135C18.8414 10.3025 18.3947 9.9 17.8621 9.9H16.1035C15.5708 9.9 15.1242 10.3025 15.1242 10.8135V12.3406H14.3448C13.8122 12.3406 13.3655 12.7432 13.3655 13.2542V13.9312L12.2655 15.1526C12.0304 15.4134 11.9 15.7453 11.9 16.0876V24.915C11.9 25.4261 12.3467 25.8286 12.8793 25.8286H21.0862C21.6189 25.8286 22.0655 25.4261 22.0655 24.915V22.7456V17.8643V16.0876C22.0655 15.7453 21.9351 15.4134 21.7 15.1527C21.7 15.1526 21.7 15.1526 21.7 15.1526L20.6 13.9312ZM15.9104 10.8135C15.9104 10.7264 15.9897 10.6423 16.1035 10.6423H17.8621C17.9759 10.6423 18.0552 10.7264 18.0552 10.8135V12.3406H15.9103L15.9104 10.8135ZM14.1517 13.2542C14.1517 13.1671 14.231 13.083 14.3448 13.083H15.5172H18.4483H19.6207C19.7345 13.083 19.8138 13.1671 19.8138 13.2542V13.6965H14.1517V13.2542ZM21.2793 17.5931V23.0167V24.915C21.2793 25.0021 21.2 25.0862 21.0862 25.0862H12.8793C12.7655 25.0862 12.6863 25.0021 12.6863 24.915V16.0876C12.6863 15.9233 12.7489 15.7619 12.8643 15.6337C12.8643 15.6337 12.8644 15.6337 12.8644 15.6337L13.9404 14.4389H20.0252L21.1013 15.6337C21.1013 15.6337 21.1013 15.6337 21.1013 15.6337C21.2167 15.7619 21.2794 15.9233 21.2794 16.0876L21.2793 17.5931Z'
				fill={modifiedColor}
				stroke={modifiedColor}
				stroke-width='0.2'
			/>
			<path
				d='M21.3332 9.66694C21.3622 9.66694 21.3918 9.66303 21.4211 9.65506L25.0874 8.65517C25.2649 8.60666 25.3696 8.42344 25.3212 8.24588C25.2725 8.06817 25.0891 7.96302 24.9119 8.01204L21.2456 9.01193C21.0681 9.06044 20.9634 9.24366 21.0118 9.42122C21.0523 9.56945 21.1866 9.66694 21.3332 9.66694Z'
				fill={modifiedColor}
			/>
			<path
				d='M25.0874 11.3451L21.4211 10.3452C21.2429 10.2972 21.0604 10.4015 21.0118 10.5791C20.9635 10.7566 21.0681 10.9399 21.2456 10.9883L24.9119 11.9882C24.9414 11.9962 24.9708 12.0001 24.9998 12.0001C25.1464 12.0001 25.2807 11.9026 25.3212 11.7544C25.3696 11.5768 25.2649 11.3936 25.0874 11.3451Z'
				fill={modifiedColor}
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(SprayCircleIcon)
