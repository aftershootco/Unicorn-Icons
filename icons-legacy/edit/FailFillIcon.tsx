import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	fillColor?: string
	inActive?: boolean
}

export const FailFillIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		className,

		fillColor = DEFAULT_ICON.FILL_COLOR,
		color = DEFAULT_ICON.COLOR,
		size,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 37 36'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<path d='M18.012 36c9.947 0 18.012-8.059 18.012-18S27.959 0 18.012 0C8.064 0 0 8.059 0 18s8.064 18 18.012 18Z' fill={fillColor} />
			<path d='M12.686 9.5 9.9 12.285l14.213 14.212 2.785-2.785L12.686 9.5Z' fill={modifiedColor} />
			<path d='M24.113 9.499 9.9 23.71l2.786 2.786 14.212-14.213L24.113 9.5Z' fill={modifiedColor} />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(FailFillIcon)
