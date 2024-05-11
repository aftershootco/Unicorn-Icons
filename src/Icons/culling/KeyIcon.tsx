import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type Props = IconProps & {
	inActive?: boolean
}

export const KeyIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	// props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<g clipPath='url(#clip0_12903_26956)'>
				<path
					d='M6.66732 15.8333C8.50827 15.8333 10.0007 14.3409 10.0007 12.5C10.0007 10.659 8.50827 9.16666 6.66732 9.16666C4.82637 9.16666 3.33398 10.659 3.33398 12.5C3.33398 14.3409 4.82637 15.8333 6.66732 15.8333Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='square'
					strokeLinejoin='round'
				/>
				<path d='M9.04102 10.125L15.8327 3.33334' stroke={modifiedColor} stroke-width='2' strokeLinecap='square' strokeLinejoin='bevel' />
				<path d='M15 4.16666L16.6667 5.83332' stroke={modifiedColor} stroke-width='2' strokeLinecap='square' strokeLinejoin='round' />
				<path d='M12.5 6.66666L14.1667 8.33332' stroke={modifiedColor} stroke-width='2' strokeLinecap='square' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_12903_26956'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(KeyIcon)
