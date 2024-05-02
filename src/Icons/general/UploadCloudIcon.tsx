import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const UploadCloudIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={(20 / 24) * size}
			viewBox='0 0 24 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: (20 / 24) * size }}
			ref={forwardedRef}
			{...restProps}
		>
			<path d='m16.005 13.997-4-4-4 4m4-4v9' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
			<path
				d='M20.395 16.387a5 5 0 0 0-2.39-9.39h-1.26a8 8 0 1 0-13.74 7.3'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='m16.005 13.997-4-4-4 4' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(UploadCloudIcon)
