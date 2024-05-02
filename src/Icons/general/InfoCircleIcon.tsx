import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const InfoIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<g clip-path='url(#clip0_4819_58299)'>
				<path
					d='M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z'
					stroke={modifiedColor}
					stroke-width='1.33333'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M8 5.33203H8.00667' stroke={modifiedColor} stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M7.33325 8H7.99992V10.6667H8.66659'
					stroke={modifiedColor}
					stroke-width='1.33333'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_4819_58299'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 17 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<rect x='.5' y='.5' width='16' height='16' rx='8' stroke={modifiedColor} />
			<path
				d='M8.457 5a.457.457 0 1 1 0 .914.457.457 0 0 1 0-.914Z'
				fill={modifiedColor}
				stroke={modifiedColor}
				stroke-width='.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M8.46 11.4V7.743' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)

	const tertiary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 35 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke={modifiedColor} stroke-opacity='.5' />
			<path d='M18 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z' fill={modifiedColor} />
			<path d='M18 25v-8' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)

	const quaternary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<circle cx='8' cy='8' r='5.5' stroke={modifiedColor} />
			<line x1='8' y1='7' x2='8' y2='11' stroke={modifiedColor} />
			<circle cx='8.00488' cy='5.625' r='0.625' fill={modifiedColor} />
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary, tertiary, quaternary }} variant={variant} />
})

export default React.memo(InfoIcon)
