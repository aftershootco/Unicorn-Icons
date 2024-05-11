import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
	inActive?: boolean
}

export const CardBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		bgOpacity = DEFAULT_ICON.BG_OPACITY,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 63 63' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<circle cx='31.5' cy='31.5' r='31.5' fill={bgColor} fillOpacity={bgOpacity} />
			<path d='M44 31.3999H18' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
			<path
				d='M22.485 22.443L18 31.4V39.2C18 39.8896 18.2739 40.5509 18.7615 41.0385C19.2491 41.5261 19.9104 41.8 20.6 41.8H41.4C42.0896 41.8 42.7509 41.5261 43.2385 41.0385C43.7261 40.5509 44 39.8896 44 39.2V31.4L39.515 22.443C39.2997 22.0098 38.9679 21.6453 38.5568 21.3904C38.1458 21.1354 37.6717 21.0003 37.188 21H24.812C24.3283 21.0003 23.8542 21.1354 23.4432 21.3904C23.0321 21.6453 22.7003 22.0098 22.485 22.443V22.443Z'
				stroke={modifiedColor}
				stroke-width='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path d='M23.2 36.6001H23.213' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
			<path d='M28.4 36.6001H28.413' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(CardBgIcon)
