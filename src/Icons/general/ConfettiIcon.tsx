import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
}

export const ConfettiIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<g clip-path='url(#clip0_5833_31936)'>
				<path d='M2.6665 3.33325H3.99984' stroke={modifiedColor} stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M3.3335 2.66675V4.00008' stroke={modifiedColor} stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M7.66683 2.66675L7.3335 4.00008'
					stroke={modifiedColor}
					stroke-width='1.33333'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M12 3.33325H13.3333' stroke={modifiedColor} stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M12.6665 2.66675V4.00008' stroke={modifiedColor} stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M10.0002 6L9.3335 6.66667' stroke={modifiedColor} stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M12 8.66659L13.3333 8.33325' stroke={modifiedColor} stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M12 12.6667H13.3333' stroke={modifiedColor} stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M12.6665 12V13.3333' stroke={modifiedColor} stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M9.3329 11.0121L4.98757 6.66675L2.0609 13.0534C2.00428 13.1774 1.98691 13.3158 2.01112 13.4499C2.03532 13.584 2.09995 13.7076 2.19634 13.804C2.29272 13.9004 2.41627 13.965 2.55042 13.9892C2.68456 14.0134 2.8229 13.996 2.9469 13.9394L9.3329 11.0127V11.0121Z'
					stroke={modifiedColor}
					stroke-width='1.33333'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_5833_31936'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ConfettiIcon)
