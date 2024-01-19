import React from 'react'
import { IconProps } from '../../../../types/Icons/types'
import BaseIcon from '../../../components/BaseIcon'
import DEFAULT_ICON from '../../../constant'

export const ArrowFillIcon = React.forwardRef<HTMLSpanElement, IconProps>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={(6 / 12) * size} height={size} viewBox='0 0 6 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path d='M0.25 11.5L5.75 6L0.25 0.5L0.25 11.5Z' fill={color} />
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(ArrowFillIcon)