import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const GridDotsIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<g id='grid-dots' clipPath='url(#clip0_3666_14542)'>
				<path
					id='Vector'
					d='M4.16683 5C4.62707 5 5.00016 4.62691 5.00016 4.16667C5.00016 3.70643 4.62707 3.33334 4.16683 3.33334C3.70659 3.33334 3.3335 3.70643 3.3335 4.16667C3.3335 4.62691 3.70659 5 4.16683 5Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
				<path
					id='Vector_2'
					d='M9.99984 5C10.4601 5 10.8332 4.62691 10.8332 4.16667C10.8332 3.70643 10.4601 3.33334 9.99984 3.33334C9.5396 3.33334 9.1665 3.70643 9.1665 4.16667C9.1665 4.62691 9.5396 5 9.99984 5Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
				<path
					id='Vector_3'
					d='M15.8333 5C16.2936 5 16.6667 4.62691 16.6667 4.16667C16.6667 3.70643 16.2936 3.33334 15.8333 3.33334C15.3731 3.33334 15 3.70643 15 4.16667C15 4.62691 15.3731 5 15.8333 5Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
				<path
					id='Vector_4'
					d='M4.16683 10.8333C4.62707 10.8333 5.00016 10.4602 5.00016 10C5.00016 9.53976 4.62707 9.16666 4.16683 9.16666C3.70659 9.16666 3.3335 9.53976 3.3335 10C3.3335 10.4602 3.70659 10.8333 4.16683 10.8333Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
				<path
					id='Vector_5'
					d='M9.99984 10.8333C10.4601 10.8333 10.8332 10.4602 10.8332 10C10.8332 9.53976 10.4601 9.16666 9.99984 9.16666C9.5396 9.16666 9.1665 9.53976 9.1665 10C9.1665 10.4602 9.5396 10.8333 9.99984 10.8333Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
				<path
					id='Vector_6'
					d='M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53976 16.2936 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53976 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
				<path
					id='Vector_7'
					d='M4.16683 16.6667C4.62707 16.6667 5.00016 16.2936 5.00016 15.8333C5.00016 15.3731 4.62707 15 4.16683 15C3.70659 15 3.3335 15.3731 3.3335 15.8333C3.3335 16.2936 3.70659 16.6667 4.16683 16.6667Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
				<path
					id='Vector_8'
					d='M9.99984 16.6667C10.4601 16.6667 10.8332 16.2936 10.8332 15.8333C10.8332 15.3731 10.4601 15 9.99984 15C9.5396 15 9.1665 15.3731 9.1665 15.8333C9.1665 16.2936 9.5396 16.6667 9.99984 16.6667Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
				<path
					id='Vector_9'
					d='M15.8333 16.6667C16.2936 16.6667 16.6667 16.2936 16.6667 15.8333C16.6667 15.3731 16.2936 15 15.8333 15C15.3731 15 15 15.3731 15 15.8333C15 16.2936 15.3731 16.6667 15.8333 16.6667Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
			</g>
			<defs>
				<clipPath id='clip0_3666_14542'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(GridDotsIcon)
