import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
}

export const DrawerIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color = DEFAULT_ICON.COLOR, size, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<g clipPath='url(#clip0_497_197458)'>
				<path
					d='M12.0003 2.66675H4.00033C3.26395 2.66675 2.66699 3.2637 2.66699 4.00008V12.0001C2.66699 12.7365 3.26395 13.3334 4.00033 13.3334H12.0003C12.7367 13.3334 13.3337 12.7365 13.3337 12.0001V4.00008C13.3337 3.2637 12.7367 2.66675 12.0003 2.66675Z'
					stroke={modifiedColor}
					strokeLinejoin='round'
				/>
				<path
					d='M9.99967 13.3334V2.66675H11.9997C12.9997 2.66675 13.333 3.33341 13.333 4.00008V12.0001C13.333 12.6667 12.9997 13.3334 11.9997 13.3334H9.99967Z'
					fill={modifiedColor}
					stroke={modifiedColor}
					strokeLinecap='square'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_497_197458'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})
