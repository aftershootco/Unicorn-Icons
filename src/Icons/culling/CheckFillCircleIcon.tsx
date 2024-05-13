import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	fillColor?: string
}

export const CheckFillCircleIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		fillColor = DEFAULT_ICON.FILL_COLOR,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg style={{ width: iconSize }} {...restProps} ref={forwardedRef} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<circle cx='10' cy='10' r='10' fill={fillColor} />
			<path
				d='M15 9.54286V10.0029C14.9994 11.0811 14.6503 12.1302 14.0047 12.9938C13.3591 13.8573 12.4516 14.4891 11.4177 14.7948C10.3837 15.1005 9.27863 15.0638 8.26724 14.6902C7.25584 14.3165 6.39233 13.6259 5.80548 12.7214C5.21863 11.8169 4.9399 10.7469 5.01084 9.67102C5.08178 8.59514 5.4986 7.57103 6.19914 6.7514C6.89968 5.93177 7.84639 5.36055 8.89809 5.12293C9.9498 4.88532 11.0501 4.99403 12.035 5.43286'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M15 6.00293L10 11.0079L8.5 9.50793' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})
