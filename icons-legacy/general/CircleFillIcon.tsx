import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant' | 'color'> & {
	variant?: IconVariant
	fillColor?: string
}

export const CircleFillIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, fillColor = DEFAULT_ICON.FILL_COLOR, inActive = false, size, ...restProps } = props

	// variants
	const primary = (
		<svg
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
			{...restProps}
		>
			<path
				d='M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z'
				fill={fillColor}
				fillOpacity={inActive ? 0.5 : 1}
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(CircleFillIcon)
