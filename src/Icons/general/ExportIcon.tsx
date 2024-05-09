import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
}

export const ExportIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<g id='external-link' clip-path='url(#clip0_6844_20442)'>
				<path
					id='Vector'
					d='M9.16634 5.83333H4.99967C4.55765 5.83333 4.13372 6.00893 3.82116 6.32149C3.5086 6.63405 3.33301 7.05797 3.33301 7.5V15C3.33301 15.442 3.5086 15.8659 3.82116 16.1785C4.13372 16.4911 4.55765 16.6667 4.99967 16.6667H12.4997C12.9417 16.6667 13.3656 16.4911 13.6782 16.1785C13.9907 15.8659 14.1663 15.442 14.1663 15V10.8333'
					stroke={modifiedColor}
					stroke-width='1.452'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					id='Vector_2'
					d='M8.33301 11.6667L16.6663 3.33333'
					stroke={modifiedColor}
					stroke-width='1.452'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					id='Vector_3'
					d='M12.5 3.33333H16.6667V7.5'
					stroke={modifiedColor}
					stroke-width='1.452'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_6844_20442'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})
