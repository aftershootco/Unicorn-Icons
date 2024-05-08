import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
	bgColor?: string
	bgOpacity?: number
}

export const WifiCrossedBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
			viewBox='0 0 96 96'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<rect width='96' height='96' rx='48' fill={bgColor} fillOpacity={bgOpacity} />
			<g clip-path='url(#clip0_18341_4857)'>
				<path d='M48 64H48.0267' stroke={modifiedColor} stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M40.459 56.459C42.4593 54.4593 45.1719 53.3359 48.0003 53.3359C50.8287 53.3359 53.5414 54.4593 55.5417 56.459'
					stroke={modifiedColor}
					stroke-width='3'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M54.3194 43.6213C57.6331 44.6561 60.6427 46.4873 63.0847 48.9547M32.9141 48.9147C35.7419 46.0789 39.314 44.1005 43.2181 43.208L32.9141 48.9147Z'
					stroke={modifiedColor}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M43.093 32.373C48.0666 31.6018 53.152 32.0147 57.936 33.578C62.7201 35.1413 67.0679 37.8111 70.6264 41.3703M25.373 41.373C28.1022 38.6382 31.3041 36.4201 34.8237 34.8263L25.373 41.373Z'
					stroke={modifiedColor}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M24 24L72 72' stroke={modifiedColor} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_18341_4857'>
					<rect x='16' y='16' width='64' height='64' rx='32' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(WifiCrossedBgIcon)
