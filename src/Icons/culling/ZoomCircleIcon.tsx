import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const ZoomCircleIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 35 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke={modifiedColor} strokeOpacity='.25' />
			<path d='M19.733 17.023h-2.665v2.715h-.948v-2.715h-2.65v-.853h2.652v-2.696h.947v2.696h2.665v.853Z' fill={modifiedColor} />
			<path
				d='M16.557 24.114a7.557 7.557 0 1 0 0-15.114 7.557 7.557 0 0 0 0 15.114ZM26 26.003l-4.11-4.11'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ZoomCircleIcon)
