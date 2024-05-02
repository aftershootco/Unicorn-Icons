import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const MenuIcon = React.forwardRef<SVGSVGElement, IconProps>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			width={size}
			height={size}
			fill={modifiedColor}
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(MenuIcon)
