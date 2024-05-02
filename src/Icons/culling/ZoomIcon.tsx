import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const ZoomIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants

	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M8.539 17a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm9.999 2-4.35-4.35M8.539 6v6m-3-3h6'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)

	const secondary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 22 22'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<g clip-path='url(#clip0_12138_30346)'>
				<path
					d='M9.16667 15.5833C12.7105 15.5833 15.5833 12.7105 15.5833 9.16667C15.5833 5.62284 12.7105 2.75 9.16667 2.75C5.62284 2.75 2.75 5.62284 2.75 9.16667C2.75 12.7105 5.62284 15.5833 9.16667 15.5833Z'
					stroke={modifiedColor}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M6.41602 9.1665H11.916' stroke={modifiedColor} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M9.16602 6.4165V11.9165' stroke={modifiedColor} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M19.25 19.25L13.75 13.75' stroke={modifiedColor} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_12138_30346'>
					<rect width='22' height='22' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(ZoomIcon)
