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

export const SortDuplicateCircleIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color = DEFAULT_ICON.COLOR, size, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 35 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<rect x='9' y='10' width='17.778' height='6.222' rx='1' fill={modifiedColor} />
			<rect x='9' y='18' width='8' height='8' rx='1' fill={modifiedColor} fillOpacity='.7' />
			<rect x='19' y='18' width='8' height='8' rx='1' fill={modifiedColor} fillOpacity='.7' />
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke={modifiedColor} stroke-opacity='.25' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(SortDuplicateCircleIcon)
