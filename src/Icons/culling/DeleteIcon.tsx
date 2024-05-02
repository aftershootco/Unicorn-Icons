import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const DeleteIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={(60 / 66) * size}
			height={size}
			viewBox='0 0 60 66'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: (60 / 66) * size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M1 13.8h57.6m-41.6 0V7.4A6.4 6.4 0 0 1 23.4 1h12.8a6.4 6.4 0 0 1 6.4 6.4v6.4m9.6 0v44.8a6.4 6.4 0 0 1-6.4 6.4h-32a6.4 6.4 0 0 1-6.4-6.4V13.8h44.8Zm-28.8 16V49m12.8-19.2V49'
				stroke={modifiedColor}
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(DeleteIcon)
