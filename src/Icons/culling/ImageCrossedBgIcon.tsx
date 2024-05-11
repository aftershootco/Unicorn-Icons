import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
	inActive?: boolean
}

export const ImageCrossedBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
		<svg viewBox='0 0 97 96' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<rect x='0.5' width='96' height='96' rx='48' fill={bgColor} fillOpacity={bgOpacity} />
			<g clipPath='url(#clip0_13360_25254)'>
				<path d='M24.5 24L72.5 72' stroke={modifiedColor} stroke-width='3' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M56.5 37.333H56.5267' stroke={modifiedColor} stroke-width='3' strokeLinecap='round' strokeLinejoin='round' />
				<path
					d='M37.8337 26.667H61.8337C63.9554 26.667 65.9902 27.5098 67.4905 29.0101C68.9908 30.5104 69.8337 32.5453 69.8337 34.667V58.667M67.4897 66.9923C65.9893 68.4917 63.9548 69.3339 61.8337 69.3337H35.167C33.0453 69.3337 31.0104 68.4908 29.5101 66.9905C28.0098 65.4902 27.167 63.4554 27.167 61.3337V34.667C27.167 32.4457 28.0737 30.435 29.535 28.9843L67.4897 66.9923Z'
					stroke={modifiedColor}
					stroke-width='3'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M27.167 55.9995L37.8337 45.3329C40.3083 42.9515 43.359 42.9515 45.8337 45.3329L59.167 58.6662'
					stroke={modifiedColor}
					stroke-width='3'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M60.0205 48.9067C61.5592 48.7494 63.1192 49.3387 64.5005 50.6667L69.8338 56'
					stroke={modifiedColor}
					stroke-width='3'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_13360_25254'>
					<rect x='16.5' y='16' width='64' height='64' rx='32' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg viewBox='0 0 55 55' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<path
				d='M55 27.5C55 42.688 42.688 55 27.5 55S0 42.688 0 27.5 12.312 0 27.5 0 55 12.312 55 27.5Z'
				fill={bgColor}
				// fillOpacity={bgOpacity}
			/>
			<path
				d='M35 18.9H21a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2Z'
				stroke={modifiedColor}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M24.5 25.9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm12.5 5-5-5-11 11'
				stroke={modifiedColor}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				transform='matrix(.94867 .31627 -.3812 .9245 33.586 13.975)'
				stroke={bgColor}
				// strokeOpacity={DEFAULT_ICON.BG_OPACITY}
				stroke-width='.577'
				d='M.164.358h.577v28.22H.164z'
			/>
			<path
				transform='matrix(.94867 .31627 -.3812 .9245 34.742 14.108)'
				stroke={modifiedColor}
				stroke-width='.577'
				d='M.164.358h.577v28.22H.164z'
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(ImageCrossedBgIcon)
