import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
	inActive?: boolean
}

export const DeleteBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		bgOpacity = DEFAULT_ICON.BG_OPACITY,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 97 96'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<rect x='0.5' width='96' height='96' rx='48' fill={bgColor} fillOpacity='0.3' />
			<g clip-path='url(#clip0_13360_17518)'>
				<path d='M27.1667 34.6665H69.8334' stroke={modifiedColor} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M43.1667 45.3335V61.3335' stroke={modifiedColor} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M53.8333 45.3335V61.3335' stroke={modifiedColor} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M29.8333 34.6665L32.4999 66.6665C32.4999 68.081 33.0618 69.4375 34.062 70.4377C35.0622 71.4379 36.4188 71.9998 37.8333 71.9998H59.1666C60.5811 71.9998 61.9376 71.4379 62.9378 70.4377C63.938 69.4375 64.4999 68.081 64.4999 66.6665L67.1666 34.6665'
					stroke={modifiedColor}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M40.5 34.6667V26.6667C40.5 25.9594 40.781 25.2811 41.281 24.781C41.7811 24.281 42.4594 24 43.1667 24H53.8333C54.5406 24 55.2189 24.281 55.719 24.781C56.219 25.2811 56.5 25.9594 56.5 26.6667V34.6667'
					stroke={modifiedColor}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_13360_17518'>
					<rect x='16.5' y='16' width='64' height='64' rx='32' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(DeleteBgIcon)
