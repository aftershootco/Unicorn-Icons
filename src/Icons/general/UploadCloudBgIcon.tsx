import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	accentColor?: string
	inActive?: boolean
}

export const UploadCloudBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
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
			viewBox='0 0 83 83'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<circle cx='41.5' cy='41.5' r='41.5' fill={bgColor} fillOpacity={DEFAULT_ICON.BG_OPACITY} />
			<path
				d='M57.142 53.674a9.317 9.317 0 0 0-4.453-17.498H50.34A14.908 14.908 0 1 0 24.737 49.78'
				stroke={modifiedColor}
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M41.508 41.767v16.77m7.454-9.317-7.454-7.453-7.454 7.453'
				stroke={accentColor}
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(UploadCloudBgIcon)
