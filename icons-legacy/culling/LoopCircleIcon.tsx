import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const LoopCircleIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke={modifiedColor} stroke-opacity='.2' />
			<path d='m21.184 10 2.909 2.91-2.91 2.908' stroke={modifiedColor} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
			<path
				d='M11 17.273v-1.455a2.91 2.91 0 0 1 2.91-2.909h10.18'
				stroke={modifiedColor}
				stroke-width='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M13.91 26 11 23.091l2.91-2.91M24.09 18.727v1.455a2.91 2.91 0 0 1-2.908 2.909H11'
				stroke={modifiedColor}
				stroke-opacity='.5'
				stroke-width='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(LoopCircleIcon)
