import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const FacebookOutlineIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<g clipPath='url(#clip0_2356_5940)'>
				<path
					d='M5.83398 8.33333V11.6667H8.33398V17.5H11.6673V11.6667H14.1673L15.0007 8.33333H11.6673V6.66667C11.6673 6.44565 11.7551 6.23369 11.9114 6.07741C12.0677 5.92113 12.2796 5.83333 12.5007 5.83333H15.0007V2.5H12.5007C11.3956 2.5 10.3358 2.93899 9.55437 3.72039C8.77297 4.50179 8.33398 5.5616 8.33398 6.66667V8.33333H5.83398Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_2356_5940'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(FacebookOutlineIcon)
