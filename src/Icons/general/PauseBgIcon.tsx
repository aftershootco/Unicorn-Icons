import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
}

export const PauseBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
		<svg
			width='96'
			height='96'
			viewBox='0 0 96 96'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: iconSize }}
			{...restProps}
			ref={forwardedRef}
		>
			<rect width='96' height='96' rx='48' fill={bgColor} fill-opacity={bgOpacity} />
			<g clipPath='url(#clip0_552_29010)'>
				<path
					d='M40 29.3333H34.6667C33.1939 29.3333 32 30.5272 32 32V64C32 65.4727 33.1939 66.6666 34.6667 66.6666H40C41.4728 66.6666 42.6667 65.4727 42.6667 64V32C42.6667 30.5272 41.4728 29.3333 40 29.3333Z'
					fill={modifiedColor}
				/>
				<path
					d='M61.3335 29.3333H56.0002C54.5274 29.3333 53.3335 30.5272 53.3335 32V64C53.3335 65.4727 54.5274 66.6666 56.0002 66.6666H61.3335C62.8063 66.6666 64.0002 65.4727 64.0002 64V32C64.0002 30.5272 62.8063 29.3333 61.3335 29.3333Z'
					fill={modifiedColor}
				/>
			</g>
			<defs>
				<clipPath id='clip0_552_29010'>
					<rect x='16' y='16' width='64' height='64' rx='32' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})
