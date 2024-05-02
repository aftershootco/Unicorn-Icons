import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const DiamondIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// VARIANTS
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 36 36'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<g clip-path='url(#clip0_11945_21261)'>
				<path
					d='M9 7.5H27L31.5 15L18.75 29.25C18.6522 29.3498 18.5355 29.429 18.4068 29.4832C18.278 29.5373 18.1397 29.5652 18 29.5652C17.8603 29.5652 17.722 29.5373 17.5932 29.4832C17.4645 29.429 17.3478 29.3498 17.25 29.25L4.5 15L9 7.5Z'
					stroke={modifiedColor}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M15 18.0002L12 14.7002L12.9 13.2002'
					stroke={modifiedColor}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_11945_21261'>
					<rect width='36' height='36' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(DiamondIcon)
