import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const HomeIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill={modifiedColor}
			style={{ width: iconSize }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z'
				fill={modifiedColor}
			/>
		</svg>
	)

	const secondary = (
		<svg
			width='36'
			height='36'
			viewBox='0 0 36 36'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: iconSize }}
			{...restProps}
			ref={forwardedRef}
		>
			<g clipPath='url(#clip0_5678_4238)'>
				<path d='M4.5 31.5H31.5' stroke={modifiedColor} stroke-width='2.57143' strokeLinecap='round' strokeLinejoin='round' />
				<path
					d='M4.5 10.5V12C4.5 13.1935 4.97411 14.3381 5.81802 15.182C6.66193 16.0259 7.80653 16.5 9 16.5C10.1935 16.5 11.3381 16.0259 12.182 15.182C13.0259 14.3381 13.5 13.1935 13.5 12M4.5 10.5H13.5V12M4.5 10.5H31.5M4.5 10.5L7.5 4.5H28.5L31.5 10.5M13.5 12C13.5 13.1935 13.9741 14.3381 14.818 15.182C15.6619 16.0259 16.8065 16.5 18 16.5C19.1935 16.5 20.3381 16.0259 21.182 15.182C22.0259 14.3381 22.5 13.1935 22.5 12M22.5 12V10.5M22.5 12C22.5 13.1935 22.9741 14.3381 23.818 15.182C24.6619 16.0259 25.8065 16.5 27 16.5C28.1935 16.5 29.3381 16.0259 30.182 15.182C31.0259 14.3381 31.5 13.1935 31.5 12V10.5'
					stroke={modifiedColor}
					stroke-width='2.57143'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M7.5 31.5V16.275' stroke={modifiedColor} stroke-width='2.57143' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M28.5 31.5V16.275' stroke={modifiedColor} stroke-width='2.57143' strokeLinecap='round' strokeLinejoin='round' />
				<path
					d='M13.5 31.5V25.5C13.5 24.7044 13.8161 23.9413 14.3787 23.3787C14.9413 22.8161 15.7044 22.5 16.5 22.5H19.5C20.2956 22.5 21.0587 22.8161 21.6213 23.3787C22.1839 23.9413 22.5 24.7044 22.5 25.5V31.5'
					stroke={modifiedColor}
					stroke-width='2.57143'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_5678_4238'>
					<rect width='36' height='36' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(HomeIcon)
