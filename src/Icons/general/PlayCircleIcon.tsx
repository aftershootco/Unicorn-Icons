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

export const PlayCircleIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color = DEFAULT_ICON.COLOR, size, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 23 23'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
			{...restProps}
		>
			<path
				d='m8.998 8.235 5.323 3.421-5.323 3.42v-6.84Z'
				fill={modifiedColor}
				stroke={modifiedColor}
				stroke-width='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M21.812 11.403c0 5.745-4.659 10.402-10.406 10.402C5.659 21.805 1 17.148 1 11.403 1 5.658 5.659 1 11.406 1c5.747 0 10.406 4.658 10.406 10.403Z'
				stroke={modifiedColor}
				stroke-width='2'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(PlayCircleIcon)
