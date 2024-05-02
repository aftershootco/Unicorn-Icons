import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const DuplicateIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 14 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M11.5 1H2.5C1.67157 1 1 1.67157 1 2.5V4C1 4.82843 1.67157 5.5 2.5 5.5H11.5C12.3284 5.5 13 4.82843 13 4V2.5C13 1.67157 12.3284 1 11.5 1Z'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M11.5 8.5H2.5C1.67157 8.5 1 9.17157 1 10V11.5C1 12.3284 1.67157 13 2.5 13H11.5C12.3284 13 13 12.3284 13 11.5V10C13 9.17157 12.3284 8.5 11.5 8.5Z'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(DuplicateIcon)
