import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	accentColor?: string
}

export const DownloadIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		accentColor = DEFAULT_ICON.COLOR,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg style={{ width: iconSize }} {...restProps} ref={forwardedRef} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_123_6780)'>
				<path
					d='M3.33301 14.167V15.8337C3.33301 16.2757 3.5086 16.6996 3.82116 17.0122C4.13372 17.3247 4.55765 17.5003 4.99967 17.5003H14.9997C15.4417 17.5003 15.8656 17.3247 16.1782 17.0122C16.4907 16.6996 16.6663 16.2757 16.6663 15.8337V14.167'
					stroke={accentColor}
					stroke-width='1.21'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M5.83301 9.16699L9.99967 13.3337L14.1663 9.16699'
					stroke={modifiedColor}
					stroke-width='1.21'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M10 3.33301V13.333' stroke={modifiedColor} stroke-width='1.21' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_123_6780'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})
