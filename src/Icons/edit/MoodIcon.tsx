import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	accentColor?: string
	inActive?: boolean
}

export const MoodIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		size = DEFAULT_ICON.SIZE,
		accentColor = DEFAULT_ICON.ACCENT_COLOR,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 31 33' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<g clipPath='url(#clip0_8303_7763)'>
				<path
					d='M14 29.5C19.799 29.5 24.5 24.799 24.5 19C24.5 13.201 19.799 8.5 14 8.5C8.20101 8.5 3.5 13.201 3.5 19C3.5 24.799 8.20101 29.5 14 29.5Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M10.5 16.6667H10.5117' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M17.5 16.6667H17.5117' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
				<path
					d='M11.0834 22.5C11.4636 22.888 11.9174 23.1963 12.4182 23.4067C12.919 23.6172 13.4568 23.7256 14 23.7256C14.5433 23.7256 15.0811 23.6172 15.5819 23.4067C16.0827 23.1963 16.5365 22.888 16.9167 22.5'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<path
				d='M22.753 15.9584L22.7532 15.9591C23.2975 17.6216 25.6492 17.6218 26.1938 15.9597C26.4576 15.1555 27.097 14.5204 27.9201 14.2585L27.9208 14.2583C29.5895 13.7261 29.5895 11.365 27.9208 10.8329L27.9201 10.8326C27.0961 10.5705 26.4562 9.93502 26.1942 9.13276L26.194 9.13204C25.6497 7.46937 23.2976 7.46937 22.7532 9.13204L22.753 9.13276C22.491 9.93502 21.8511 10.5705 21.0271 10.8326L21.0264 10.8329C19.3578 11.365 19.3578 13.7261 21.0264 14.2583L21.0271 14.2585C21.8511 14.5206 22.491 15.1562 22.753 15.9584ZM17.5671 9.72527L17.5671 9.72528C18.0034 11.0592 19.8901 11.0595 20.327 9.72612C20.4091 9.47754 20.6077 9.27802 20.8688 9.19388C22.2088 8.76528 22.2082 6.8681 20.867 6.44082L20.867 6.44082C20.6069 6.35795 20.4076 6.1574 20.3273 5.91161L20.3273 5.9116C19.8909 4.57739 18.0035 4.57739 17.5671 5.9116L17.5671 5.91161C17.4867 6.1574 17.2875 6.35795 17.0274 6.44082L17.0274 6.44082C15.6828 6.86916 15.6877 8.76765 17.0264 9.19573L17.0274 9.19606C17.2875 9.27893 17.4867 9.47948 17.5671 9.72527ZM22.2707 4.51286L22.271 4.51276L22.2707 4.51286ZM23.6895 4.52608L23.6894 4.52577L23.6895 4.52608ZM24.3389 5.02716C25.5158 4.64972 25.5149 2.98286 24.3363 2.60725C24.2722 2.5868 24.2285 2.53973 24.2114 2.48736C23.8283 1.31638 22.1717 1.31639 21.7886 2.48736C21.7714 2.53973 21.7277 2.5868 21.6636 2.60725C20.4841 2.98312 20.4841 4.65208 21.6636 5.02796C21.7277 5.0484 21.7714 5.09548 21.7886 5.14784C22.1717 6.31892 23.8286 6.31882 24.2115 5.14753L23.261 4.83682L24.2109 5.14909C24.2275 5.0986 24.2714 5.04939 24.3389 5.02716Z'
				fill={modifiedColor}
				stroke={accentColor}
				stroke-width='2'
				strokeLinejoin='round'
			/>
			<defs>
				<clipPath id='clip0_8303_7763'>
					<rect width='28' height='28' fill='white' transform='translate(0 5)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(MoodIcon)
