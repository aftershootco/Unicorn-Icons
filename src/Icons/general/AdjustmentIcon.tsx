import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const AdjustmentIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
			{...restProps}
			ref={forwardedRef}
		>
			<g clip-path='url(#clip0_5641_27511)'>
				<path
					d='M11.6667 6.66671C12.5871 6.66671 13.3333 5.92052 13.3333 5.00004C13.3333 4.07957 12.5871 3.33337 11.6667 3.33337C10.7462 3.33337 10 4.07957 10 5.00004C10 5.92052 10.7462 6.66671 11.6667 6.66671Z'
					stroke={modifiedColor}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M3.33301 5H9.99967' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M13.333 5H16.6663' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M6.66667 11.6667C7.58714 11.6667 8.33333 10.9205 8.33333 10C8.33333 9.07957 7.58714 8.33337 6.66667 8.33337C5.74619 8.33337 5 9.07957 5 10C5 10.9205 5.74619 11.6667 6.66667 11.6667Z'
					stroke={modifiedColor}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M3.33301 10H4.99967' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M8.33301 10H16.6663' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M14.1667 16.6667C15.0871 16.6667 15.8333 15.9205 15.8333 15C15.8333 14.0796 15.0871 13.3334 14.1667 13.3334C13.2462 13.3334 12.5 14.0796 12.5 15C12.5 15.9205 13.2462 16.6667 14.1667 16.6667Z'
					stroke={modifiedColor}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M3.33301 15H12.4997' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M15.833 15H16.6663' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_5641_27511'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} />
})

export default React.memo(AdjustmentIcon)
