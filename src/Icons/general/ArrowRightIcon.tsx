import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const ArrowRightIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	// props
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
			<g clip-path='url(#clip0_14836_8670)'>
				<path d='M4.16602 10H15.8327' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M12.5 13.3333L15.8333 10' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M12.5 6.66602L15.8333 9.99935' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_14836_8670'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg
			width={size}
			height={(16 / 19) * size}
			viewBox='0 0 19 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path d='m10.8 15 7-7-7-7m7 7H1' stroke={modifiedColor} stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(ArrowRightIcon)
