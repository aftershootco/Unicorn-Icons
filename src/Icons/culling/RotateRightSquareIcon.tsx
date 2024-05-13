import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const RotateRightSquareIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
			<g clipPath='url(#clip0_7039_28311)'>
				<path
					d='M16.8456 13.8027L16.8456 14.4218C16.8456 14.8908 16.6593 15.3407 16.3276 15.6724C15.9959 16.0041 15.546 16.1905 15.0769 16.1905L6.23341 16.1905C5.76432 16.1905 5.31444 16.0041 4.98275 15.6724C4.65105 15.3407 4.46471 14.8908 4.46471 14.4218L4.46471 5.57824C4.46471 5.10915 4.65105 4.65928 4.98275 4.32758C5.31444 3.99588 5.76432 3.80954 6.23341 3.80954L15.0769 3.80954C15.546 3.80954 15.9959 3.99589 16.3276 4.32758C16.6593 4.65928 16.8456 5.10915 16.8456 5.57824L16.8456 10M16.8456 10L19.3395 7.50613M16.8456 10L14.3518 7.50613'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_7039_28311'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(RotateRightSquareIcon)
