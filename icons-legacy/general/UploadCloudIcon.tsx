import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const UploadCloudIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color = DEFAULT_ICON.COLOR, size, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 24 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
			{...restProps}
		>
			<path d='m16.005 13.997-4-4-4 4m4-4v9' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
			<path
				d='M20.395 16.387a5 5 0 0 0-2.39-9.39h-1.26a8 8 0 1 0-13.74 7.3'
				stroke={modifiedColor}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path d='m16.005 13.997-4-4-4 4' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(UploadCloudIcon)
