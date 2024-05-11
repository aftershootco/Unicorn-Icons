import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const ListSelectedIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 22 22' fill='#E2E2E2' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<g clipPath='url(#clip0_12220_36387)'>
				<path
					d='M15.5 5H6.5C5.67157 5 5 5.67157 5 6.5V8C5 8.82843 5.67157 9.5 6.5 9.5H15.5C16.3284 9.5 17 8.82843 17 8V6.5C17 5.67157 16.3284 5 15.5 5Z'
					fill={color}
					stroke={color}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M15.5 12.5H6.5C5.67157 12.5 5 13.1716 5 14V15.5C5 16.3284 5.67157 17 6.5 17H15.5C16.3284 17 17 16.3284 17 15.5V14C17 13.1716 16.3284 12.5 15.5 12.5Z'
					stroke={color}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_12220_36387'>
					<rect width='18' height='18' fill='white' transform='translate(2 2)' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<rect y='8.889' width='16' height='7.111' rx='1' fill={modifiedColor} opacity='.3' />
			<rect width='16' height='7.111' rx='1' fill={modifiedColor} />
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(ListSelectedIcon)
