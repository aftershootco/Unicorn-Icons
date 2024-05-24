import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
	inActive?: boolean
	fillColor?: string
}

export const AlertFillTriangleBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		className,
		bgColor = DEFAULT_ICON.BG_COLOR,
		bgOpacity = DEFAULT_ICON.BG_OPACITY,
		fillColor = DEFAULT_ICON.FILL_COLOR,
		color = DEFAULT_ICON.COLOR,
		size,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 72 72'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<rect width='72' height='72' rx='36' fill={bgColor} fillOpacity={bgOpacity} />
			<path
				d='M22.5004 50H50.5004C51.153 49.9954 51.7946 49.8312 52.3691 49.5218C52.9437 49.2123 53.4339 48.7669 53.7968 48.2245C54.1597 47.6821 54.3844 47.0591 54.4513 46.4099C54.5181 45.7607 54.4251 45.105 54.1804 44.5L39.9804 20C39.6344 19.3748 39.1274 18.8537 38.5119 18.4908C37.8964 18.1279 37.1949 17.9365 36.4804 17.9365C35.7658 17.9365 35.0644 18.1279 34.4489 18.4908C33.8334 18.8537 33.3263 19.3748 32.9804 20L18.7804 44.5C18.5403 45.0912 18.445 45.7312 18.5027 46.3666C18.5603 47.0021 18.7691 47.6145 19.1117 48.1528C19.4542 48.6911 19.9206 49.1397 20.4718 49.461C21.0231 49.7824 21.6432 49.9672 22.2804 50'
				fill={fillColor}
			/>
			<path d='M36.5 42V42.02M36.5 30V34V30Z' stroke={modifiedColor} stroke-width='3' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(AlertFillTriangleBgIcon)
