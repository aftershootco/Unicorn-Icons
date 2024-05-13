import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const RotateLeftSquareIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: iconSize }}
			{...restProps}
			ref={forwardedRef}
		>
			<g clipPath='url(#clip0_7039_28304)'>
				<path
					d='M4.15438 13.8027L4.15438 14.4218C4.15438 14.8908 4.34072 15.3407 4.67242 15.6724C5.00411 16.0041 5.45399 16.1905 5.92308 16.1905L14.7666 16.1905C15.2357 16.1905 15.6856 16.0041 16.0173 15.6724C16.3489 15.3407 16.5353 14.8908 16.5353 14.4218L16.5353 5.57824C16.5353 5.10915 16.3489 4.65928 16.0173 4.32758C15.6856 3.99588 15.2357 3.80954 14.7666 3.80954L5.92308 3.80954C5.45399 3.80954 5.00411 3.99589 4.67242 4.32758C4.34072 4.65928 4.15438 5.10915 4.15438 5.57824L4.15438 10M4.15438 10L1.66051 7.50613M4.15438 10L6.64825 7.50613'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_7039_28304'>
					<rect width='20' height='20' fill='white' transform='matrix(-1 0 0 1 20 0)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(RotateLeftSquareIcon)
