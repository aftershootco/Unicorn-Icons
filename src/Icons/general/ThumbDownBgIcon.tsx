import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
	inActive?: boolean
}

export const ThumbDownBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 83 83' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<rect x='0.576904' y='0.373047' width='81.7804' height='81.7804' rx='40.8902' fill={bgColor} fillOpacity={bgOpacity} />

			<g clipPath='url(#clip0_1172_16355)'>
				<path
					d='M29.9644 46.9424V28.7689C29.9644 28.1665 29.7251 27.5886 29.299 27.1626C28.873 26.7366 28.2952 26.4973 27.6927 26.4973H23.1494C22.5469 26.4973 21.9691 26.7366 21.543 27.1626C21.117 27.5886 20.8777 28.1665 20.8777 28.7689V44.6707C20.8777 45.2732 21.117 45.851 21.543 46.277C21.9691 46.703 22.5469 46.9424 23.1494 46.9424H29.9644ZM29.9644 46.9424C32.3743 46.9424 34.6856 47.8997 36.3897 49.6038C38.0938 51.3079 39.0511 53.6191 39.0511 56.0291V58.3008C39.0511 59.5057 39.5298 60.6614 40.3818 61.5134C41.2339 62.3655 42.3895 62.8441 43.5945 62.8441C44.7994 62.8441 45.9551 62.3655 46.8071 61.5134C47.6592 60.6614 48.1378 59.5057 48.1378 58.3008V46.9424H54.9529C56.1578 46.9424 57.3135 46.4637 58.1655 45.6117C59.0176 44.7596 59.4962 43.604 59.4962 42.399L57.2245 31.0406C56.8978 29.647 56.2781 28.4504 55.4587 27.6309C54.6392 26.8115 53.6645 26.4136 52.6812 26.4973H36.7794C34.972 26.4973 33.2385 27.2153 31.9605 28.4933C30.6824 29.7714 29.9644 31.5048 29.9644 33.3123'
					stroke={modifiedColor}
					stroke-width='1.70376'
					strokeLinecap='round'
					strokeLinejoin='round'
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

export default React.memo(ThumbDownBgIcon)
