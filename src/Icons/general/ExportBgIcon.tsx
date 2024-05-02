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

export const ExportBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
			viewBox='0 0 40 40'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<circle cx='20' cy='20' r='20' fill={bgColor} fillOpacity={DEFAULT_ICON.BG_OPACITY} />
			<path
				d='M12 20.5v7.6a1.9 1.9 0 0 0 1.9 1.9h11.4a1.9 1.9 0 0 0 1.9-1.9v-7.6m-3.799-5.7-3.8-3.8-3.8 3.8m3.801-3.8v12.35'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ExportBgIcon)
