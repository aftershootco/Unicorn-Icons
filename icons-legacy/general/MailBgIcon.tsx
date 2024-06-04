import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
}

export const MailBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		className,

		bgColor = DEFAULT_ICON.BG_COLOR,
		bgOpacity = DEFAULT_ICON.BG_OPACITY,
		color = DEFAULT_ICON.COLOR,
		size,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width='96'
			height='96'
			viewBox='0 0 96 96'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<rect width='96' height='96' rx='48' fill={bgColor} fill-opacity={bgOpacity} />
			<path
				d='M66.6667 29.3333H29.3333C26.3878 29.3333 24 31.7211 24 34.6666V61.3333C24 64.2788 26.3878 66.6666 29.3333 66.6666H66.6667C69.6122 66.6666 72 64.2788 72 61.3333V34.6666C72 31.7211 69.6122 29.3333 66.6667 29.3333Z'
				stroke={modifiedColor}
				stroke-width='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path d='M24 34.6667L48 50.6667L72 34.6667' stroke={modifiedColor} stroke-width='3' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})
