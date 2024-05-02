import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	color?: string
	fillColor?: string
	inActive?: boolean
}

export const CheckFillIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		fillColor = DEFAULT_ICON.FILL_COLOR,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

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
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z'
				fill={fillColor}
			/>
			<path d='M5.5 7.99992L7.16667 9.66659L10.5 6.33325' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)

	const secondary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 14 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<g id='circle-check' clip-path='url(#clip0_2884_104787)'>
				<path
					id='Vector'
					d='M7 12.25C9.8995 12.25 12.25 9.8995 12.25 7C12.25 4.1005 9.8995 1.75 7 1.75C4.1005 1.75 1.75 4.1005 1.75 7C1.75 9.8995 4.1005 12.25 7 12.25Z'
					fill={fillColor}
				/>
				<path id='Vector_2' d='M5.25 7L6.41667 8.16667L8.75 5.83334' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='bevel' />
			</g>
			<defs>
				<clipPath id='clip0_2884_104787'>
					<rect width='14' height='14' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(CheckFillIcon)
