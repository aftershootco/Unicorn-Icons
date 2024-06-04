import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
	inActive?: boolean
}

export const SmileySadIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
			viewBox='0 0 36 36'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<path
				d='M17.667 34.333c9.204 0 16.666-7.462 16.666-16.666C34.333 8.462 26.871 1 17.667 1 8.462 1 1 8.462 1 17.667c0 9.204 7.462 16.666 16.667 16.666Z'
				stroke={modifiedColor}
				stroke-width='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M24.333 24.333S21.833 21 17.667 21C13.5 21 11 24.333 11 24.333'
				stroke={modifiedColor}
				stroke-width='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path d='M12.668 12.666h.017m9.983 0h.017' stroke={modifiedColor} stroke-width='4' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(SmileySadIcon)
