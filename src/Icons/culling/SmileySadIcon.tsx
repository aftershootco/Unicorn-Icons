import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	inActive?: boolean
}

export const SmileySadIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
			width={size}
			height={size}
			viewBox='0 0 36 36'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M17.667 34.333c9.204 0 16.666-7.462 16.666-16.666C34.333 8.462 26.871 1 17.667 1 8.462 1 1 8.462 1 17.667c0 9.204 7.462 16.666 16.667 16.666Z'
				stroke={modifiedColor}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M24.333 24.333S21.833 21 17.667 21C13.5 21 11 24.333 11 24.333'
				stroke={modifiedColor}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M12.668 12.666h.017m9.983 0h.017' stroke={modifiedColor} stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(SmileySadIcon)
