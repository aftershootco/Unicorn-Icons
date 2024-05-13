import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const CrownIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<g clipPath='url(#clip0_1057_16681)'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M13.3702 6.18397C13.8819 6.18397 14.2982 6.60026 14.2982 7.112C14.2982 7.48269 14.0792 7.80233 13.7643 7.95081L13.7603 7.97799C13.3704 10.5922 13.225 11.0658 12.4725 11.6398H5.5177C4.76534 11.0657 4.61986 10.5922 4.23 7.97812L4.22602 7.95094C3.91115 7.80233 3.69214 7.48269 3.69214 7.112C3.69214 6.60026 4.10843 6.18397 4.62017 6.18397C5.13191 6.18397 5.5482 6.60026 5.5482 7.112C5.5482 7.19672 5.53587 7.27825 5.51439 7.35621C5.67892 7.49011 5.84636 7.6431 6.00903 7.79278C6.28081 8.04282 6.68795 8.41734 6.86043 8.43697C7.10039 8.34231 7.85051 7.37026 8.35522 6.45668C8.1781 6.28765 8.06714 6.04981 8.06714 5.78625C8.06714 5.2745 8.48343 4.85822 8.99517 4.85822C9.50691 4.85822 9.9232 5.2745 9.9232 5.78625C9.9232 6.04981 9.81223 6.28765 9.63498 6.45681C10.1397 7.37039 10.8898 8.34244 11.1298 8.4371C11.3022 8.41748 11.7094 8.04295 11.9812 7.79291C12.1438 7.6431 12.3113 7.49011 12.4758 7.35634C12.4545 7.27825 12.4421 7.19672 12.4421 7.112C12.4421 6.60026 12.8584 6.18397 13.3702 6.18397ZM13.6875 6.87251L13.6097 6.79467C13.639 6.81691 13.6653 6.84312 13.6875 6.87251Z'
					fill={modifiedColor}
				/>
				<path
					d='M5.44214 12.5915C5.44214 12.3982 5.59884 12.2415 5.79214 12.2415H12.0921C12.2854 12.2415 12.4421 12.3982 12.4421 12.5915V13.1415H5.44214V12.5915Z'
					fill={modifiedColor}
				/>
			</g>
			<defs>
				<clipPath id='clip0_1057_16681'>
					<rect width='18' height='18' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg
			width='13'
			height='12'
			viewBox='0 0 13 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: iconSize }}
			ref={forwardedRef}
			{...restProps}
		>
			<g clipPath='url(#clip0_1949_63000)'>
				<path
					d='M6.21683 3L8.21684 6.00002L10.7169 4.00001L9.71686 9.00004H2.7168L1.7168 4.00001L4.21682 6.00002L6.21683 3Z'
					stroke={modifiedColor}
					stroke-width='1.00001'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1949_63000'>
					<rect width='12.0001' height='12.0001' fill='white' transform='translate(0.216797)' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(CrownIcon)
