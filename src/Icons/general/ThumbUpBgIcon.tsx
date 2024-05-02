import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	inActive?: boolean
}

export const ThumbUpBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
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
			viewBox='0 0 83 83'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<rect x='0.576904' y='0.373047' width='81.7804' height='81.7804' rx='40.8902' fill={bgColor} fillOpacity={DEFAULT_ICON.BG_OPACITY} />

			<g clip-path='url(#clip0_1172_16355)'>
				<path
					d='M30.1089 35.5844V53.7578C30.1089 54.3603 29.8696 54.9381 29.4436 55.3641C29.0176 55.7901 28.4397 56.0295 27.8373 56.0295H23.2939C22.6914 56.0295 22.1136 55.7901 21.6876 55.3641C21.2616 54.9381 21.0222 54.3603 21.0222 53.7578V37.856C21.0222 37.2536 21.2616 36.6758 21.6876 36.2497C22.1136 35.8237 22.6914 35.5844 23.2939 35.5844H30.1089ZM30.1089 35.5844C32.5189 35.5844 34.8301 34.627 36.5342 32.9229C38.2383 31.2188 39.1956 28.9076 39.1956 26.4977V24.226C39.1956 23.021 39.6743 21.8654 40.5264 21.0133C41.3784 20.1613 42.534 19.6826 43.739 19.6826C44.944 19.6826 46.0996 20.1613 46.9516 21.0133C47.8037 21.8654 48.2824 23.021 48.2824 24.226V35.5844H55.0974C56.3024 35.5844 57.458 36.063 58.31 36.9151C59.1621 37.7671 59.6408 38.9228 59.6408 40.1277L57.3691 51.4861C57.0424 52.8797 56.4226 54.0764 55.6032 54.8958C54.7837 55.7153 53.809 56.1131 52.8257 56.0295H36.924C35.1165 56.0295 33.3831 55.3115 32.105 54.0334C30.8269 52.7553 30.1089 51.0219 30.1089 49.2144'
					stroke={modifiedColor}
					stroke-width='1.70376'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1172_16355'>
					<rect x='14.207' y='10.5957' width='54.5203' height='54.5203' rx='27.2601' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ThumbUpBgIcon)
