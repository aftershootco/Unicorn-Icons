import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
}

export const ImageIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg
			width='60'
			height='60'
			viewBox='0 0 60 60'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: iconSize }}
			{...restProps}
			ref={forwardedRef}
		>
			<g id='photo' clipPath='url(#clip0_3554_73881)'>
				<path id='Vector' d='M37.5 20H37.525' stroke={modifiedColor} stroke-width='2.5' strokeLinecap='round' strokeLinejoin='round' />
				<path
					id='Vector_2'
					d='M42.5 10H17.5C13.3579 10 10 13.3579 10 17.5V42.5C10 46.6421 13.3579 50 17.5 50H42.5C46.6421 50 50 46.6421 50 42.5V17.5C50 13.3579 46.6421 10 42.5 10Z'
					stroke={modifiedColor}
					stroke-width='2.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					id='Vector_3'
					d='M10 37.4999L20 27.4999C21.1401 26.4028 22.4335 25.8252 23.75 25.8252C25.0665 25.8252 26.3599 26.4028 27.5 27.4999L40 39.9999'
					stroke={modifiedColor}
					stroke-width='2.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					id='Vector_4'
					d='M35 34.9999L37.5 32.4999C38.6401 31.4028 39.9335 30.8252 41.25 30.8252C42.5665 30.8252 43.8599 31.4028 45 32.4999L50 37.4999'
					stroke={modifiedColor}
					stroke-width='2.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_3554_73881'>
					<rect width='60' height='60' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})
