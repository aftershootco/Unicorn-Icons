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

export const SearchIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color = DEFAULT_ICON.COLOR, size, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
			{...restProps}
		>
			<path d='M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm10 2-4.35-4.35' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)

	const secondary = (
		<svg
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
			{...restProps}
		>
			<g clipPath='url(#clip0_3_71178)'>
				<path
					d='M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M17.5 17.5L12.5 12.5' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_3_71178'>
					<rect width='15' height='15' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const tertiary = (
		<svg
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
			{...restProps}
		>
			<g clipPath='url(#clip0_3_71178)'>
				<path
					d='M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M17.5 17.5L12.5 12.5' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_3_71178'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary, tertiary }} variant={variant} />
})

export default React.memo(SearchIcon)
