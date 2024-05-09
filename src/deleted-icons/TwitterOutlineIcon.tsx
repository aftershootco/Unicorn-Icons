import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const TwitterOutlineIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
			ref={forwardedRef}
			{...restProps}
		>
			<g clip-path='url(#clip0_1703_84000)'>
				<path
					d='M18.3332 3.34119C17.4998 3.74952 16.6832 3.91536 15.8332 4.16619C14.899 3.11202 13.514 3.05369 12.1832 3.55202C10.8523 4.05036 9.98067 5.26869 9.99984 6.66619V7.49952C7.29567 7.56869 4.88734 6.33702 3.33317 4.16619C3.33317 4.16619 -0.15183 10.3604 6.6665 13.3329C5.1065 14.372 3.55067 15.0729 1.6665 14.9995C4.42317 16.502 7.42734 17.0187 10.0282 16.2637C13.0115 15.397 15.4632 13.1612 16.404 9.81202C16.6847 8.79342 16.824 7.74107 16.8182 6.68452C16.8165 6.47702 18.0765 4.37452 18.3332 3.34036V3.34119Z'
					stroke={modifiedColor}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1703_84000'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(TwitterOutlineIcon)
