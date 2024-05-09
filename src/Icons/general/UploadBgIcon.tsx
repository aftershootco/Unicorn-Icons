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
	accentColor?: string
}

export const UploadBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		bgOpacity = DEFAULT_ICON.BG_OPACITY,
		size = DEFAULT_ICON.SIZE,
		accentColor = DEFAULT_ICON.ACCENT_COLOR,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 72 72'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<rect width='72' height='72' rx='36' fill={bgColor} fillOpacity={bgOpacity} />
			<path
				d='M20 46V50C20 51.0609 20.4214 52.0783 21.1716 52.8284C21.9217 53.5786 22.9391 54 24 54H48C49.0608 54 50.0783 53.5786 50.8284 52.8284C51.5786 52.0783 52 51.0609 52 50V46'
				stroke={accentColor}
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M26 30L36 20L46 30' stroke={modifiedColor} stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
			<path d='M36 20V44' stroke={modifiedColor} stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)

	const secondary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 40 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<circle cx='20' cy='20' r='20' fill={bgColor} fillOpacity={bgOpacity} />
			<path
				d='M12 20.5v7.6a1.9 1.9 0 0 0 1.9 1.9h11.4a1.9 1.9 0 0 0 1.9-1.9v-7.6m-3.799-5.7-3.8-3.8-3.8 3.8m3.801-3.8v12.35'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(UploadBgIcon)
