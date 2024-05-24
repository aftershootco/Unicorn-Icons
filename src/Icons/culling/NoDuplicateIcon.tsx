import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const NoDuplicateIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color = DEFAULT_ICON.COLOR, size, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 63 63'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<path
				d='M26.563 18.975v13.663a3.036 3.036 0 0 0 3.036 3.036h13.663a3.036 3.036 0 0 0 3.036-3.036V18.975a3.036 3.036 0 0 0-3.036-3.036H29.599a3.036 3.036 0 0 0-3.036 3.036Z'
				stroke={modifiedColor}
				stroke-width='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M35.673 41.747v1.518a3.036 3.036 0 0 1-3.036 3.036H18.974a3.036 3.036 0 0 1-3.036-3.036V29.602a3.036 3.036 0 0 1 3.036-3.036h1.518'
				stroke={modifiedColor}
				stroke-width='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path fill={modifiedColor} fillOpacity='.5' d='M8.68 52.8 52.897 8.586 54.31 10 10.095 54.215z' />
			<circle cx='31.5' cy='31.5' r='30.5' stroke={modifiedColor} strokeOpacity='.5' stroke-width='2' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(NoDuplicateIcon)
