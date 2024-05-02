import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type Props = IconProps & {
	inActive?: boolean
}

export const SortIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
			<g clip-path='url(#clip0_12903_26949)'>
				<path d='M5.83398 2.5V17.5' stroke={modifiedColor} stroke-width='2' stroke-linejoin='round' />
				<path d='M8.33398 5L5.83398 2.5L3.33398 5' stroke={modifiedColor} stroke-width='2' stroke-linecap='square' stroke-linejoin='round' />
				<path d='M16.666 15L14.166 17.5L11.666 15' stroke={modifiedColor} stroke-width='2' stroke-linecap='square' stroke-linejoin='round' />
				<path d='M14.166 17.5V2.5' stroke={modifiedColor} stroke-width='2' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_12903_26949'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(SortIcon)
