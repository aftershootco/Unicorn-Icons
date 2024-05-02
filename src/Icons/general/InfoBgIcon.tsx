import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	inActive?: boolean
}

export const InfoBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<g clip-path='url(#clip0_12231_35410)'>
				<path
					d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z'
					fill={bgColor}
					fillOpacity={DEFAULT_ICON.BG_OPACITY}
				/>
				<path d='M10 6.66602H10.0083' stroke={modifiedColor} stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M9.16699 10H10.0003V13.3333H10.8337'
					stroke={modifiedColor}
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_12231_35410'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(InfoBgIcon)
