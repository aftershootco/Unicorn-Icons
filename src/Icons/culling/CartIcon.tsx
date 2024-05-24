import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type Props = IconProps

export const CartIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color, size, inActive = false, ...restProps } = props

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
			className={cn('w-6 text-[#fff] stroke-[#fff]', className && className)}
		>
			<g clipPath='url(#clip0_11945_21255)'>
				<path
					d='M9 31.5C10.6569 31.5 12 30.1569 12 28.5C12 26.8431 10.6569 25.5 9 25.5C7.34315 25.5 6 26.8431 6 28.5C6 30.1569 7.34315 31.5 9 31.5Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M25.5 31.5C27.1569 31.5 28.5 30.1569 28.5 28.5C28.5 26.8431 27.1569 25.5 25.5 25.5C23.8431 25.5 22.5 26.8431 22.5 28.5C22.5 30.1569 23.8431 31.5 25.5 31.5Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M25.5 25.5H9V4.5H6' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M30 9L28.5 19.5H9' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M15 15L24 6' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
				<path
					d='M15.75 7.5C16.1642 7.5 16.5 7.16421 16.5 6.75C16.5 6.33579 16.1642 6 15.75 6C15.3358 6 15 6.33579 15 6.75C15 7.16421 15.3358 7.5 15.75 7.5Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M23.25 15C23.6642 15 24 14.6642 24 14.25C24 13.8358 23.6642 13.5 23.25 13.5C22.8358 13.5 22.5 13.8358 22.5 14.25C22.5 14.6642 22.8358 15 23.25 15Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_11945_21255'>
					<rect width='36' height='36' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg
			viewBox='0 0 49 46'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<path
				d='M19.16 15.188H8.812M1 2.688h4.688l7.812 31.25h25l.938-3.716M15.063 45.313a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Zm20.312 0a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z'
				stroke={modifiedColor}
				stroke-miterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M35.486 26.021c6.904 0 12.5-5.596 12.5-12.5s-5.596-12.5-12.5-12.5c-6.903 0-12.5 5.596-12.5 12.5s5.597 12.5 12.5 12.5Z'
				stroke={modifiedColor}
				stroke-miterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='m40.955 10.396-6.25 7.031-3.906-3.906'
				stroke={modifiedColor}
				stroke-miterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)

	const tertiary = (
		<svg
			viewBox='0 0 36 36'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<g clipPath='url(#clip0_5678_4243)'>
				<path
					d='M9 31.5C10.6569 31.5 12 30.1569 12 28.5C12 26.8431 10.6569 25.5 9 25.5C7.34315 25.5 6 26.8431 6 28.5C6 30.1569 7.34315 31.5 9 31.5Z'
					stroke={modifiedColor}
					stroke-width='2.57143'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M25.5 31.5C27.1569 31.5 28.5 30.1569 28.5 28.5C28.5 26.8431 27.1569 25.5 25.5 25.5C23.8431 25.5 22.5 26.8431 22.5 28.5C22.5 30.1569 23.8431 31.5 25.5 31.5Z'
					stroke={modifiedColor}
					stroke-width='2.57143'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M25.5 25.5H9V4.5H6' stroke={modifiedColor} stroke-width='2.57143' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M9 7.5L30 9L28.5 19.5H9' stroke={modifiedColor} stroke-width='2.57143' strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_5678_4243'>
					<rect width='36' height='36' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary, tertiary }} variant={variant} />
})

export default React.memo(CartIcon)
