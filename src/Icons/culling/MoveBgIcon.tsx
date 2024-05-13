import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
	inActive?: boolean
}

export const MoveBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
		<svg viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<rect x='0.352539' y='0.701172' width='28' height='28' rx='14' fill={bgColor} fillOpacity={bgOpacity} />
			<g clipPath='url(#clip0_14037_31520)'>
				<path
					d='M16.0193 7.20117V10.5345C16.0193 10.7555 16.1071 10.9675 16.2634 11.1238C16.4196 11.28 16.6316 11.3678 16.8526 11.3678H20.186'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M19.3526 18.0345L21.8526 20.5345L19.3526 23.0345M13.936 22.2012H10.186C9.74393 22.2012 9.32 22.0256 9.00744 21.713C8.69488 21.4005 8.51929 20.9765 8.51929 20.5345V8.86784C8.51929 8.42581 8.69488 8.00189 9.00744 7.68933C9.32 7.37677 9.74393 7.20117 10.186 7.20117H16.0193L20.186 11.3678V15.5345L13.936 22.2012ZM16.0193 20.5345H21.8526H16.0193Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_14037_31520'>
					<rect x='4.35254' y='4.70117' width='20' height='20' rx='10' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(MoveBgIcon)
