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
	fillColor?: string
	inActive?: boolean
}

export const SuccessFillBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		className,

		bgColor = DEFAULT_ICON.BG_COLOR,
		bgOpacity = DEFAULT_ICON.BG_OPACITY,
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
			viewBox='0 0 83 83'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<circle cx='41.5' cy='41.5' r='41.5' fill={bgColor} fillOpacity={bgOpacity} />
			<path d='M41.013 62c11.053 0 20.013-8.954 20.013-20s-8.96-20-20.013-20S21 30.954 21 42s8.96 20 20.013 20Z' fill={fillColor} />
			<path d='M49 37 38 48l-5-5' stroke={modifiedColor} stroke-width='3' strokeLinecap='square' strokeLinejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(SuccessFillBgIcon)
