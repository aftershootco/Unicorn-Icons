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
	accentColor?: string
}

export const AtomBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		bgOpacity = DEFAULT_ICON.BG_OPACITY,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		accentColor = DEFAULT_ICON.ACCENT_COLOR,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 72 72'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<rect width='72' height='72' rx='36' fill={bgColor} fillOpacity={bgOpacity} />
			<path d='M36 36V36.02' stroke={accentColor} stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
			<path
				d='M50.1412 21.858C48.6409 20.3577 45.7121 20.4089 41.9991 22.0002C38.2861 23.5915 34.093 26.5926 30.3422 30.3433C26.5915 34.094 23.5904 38.2871 21.9991 42.0001C20.4078 45.7132 20.3567 48.642 21.857 50.1423C23.3573 51.6426 26.2861 51.5914 29.9991 50.0001C33.7121 48.4088 37.9052 45.4077 41.6559 41.657C43.5131 39.7998 45.2058 37.8145 46.6373 35.8144C48.0688 33.8144 49.2112 31.8387 49.9991 30.0002C50.787 28.1616 51.2051 26.4963 51.2295 25.0993C51.2539 23.7023 50.8841 22.6009 50.1412 21.858'
				stroke={modifiedColor}
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M21.858 21.8578C20.3577 23.3581 20.4089 26.2869 22.0002 29.9999C23.5915 33.713 26.5926 37.906 30.3433 41.6568C34.094 45.4075 38.2871 48.4086 42.0001 49.9999C45.7132 51.5912 48.642 51.6423 50.1423 50.1421C51.6426 48.6418 51.5914 45.7129 50.0001 41.9999C48.4088 38.2869 45.4077 34.0938 41.657 30.3431C39.7998 28.4859 37.8145 26.7932 35.8144 25.3617C33.8144 23.9302 31.8387 22.7879 30.0002 21.9999C28.1616 21.212 26.4963 20.7939 25.0993 20.7695C23.7023 20.7451 22.6009 21.1149 21.858 21.8578'
				stroke={modifiedColor}
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(AtomBgIcon)
