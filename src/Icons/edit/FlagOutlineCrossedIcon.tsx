import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const FlagOutlineCrossedIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<g clipPath='url(#clip0_862_155205)'>
				<path
					d='M5.16357 11.6667H9.33024M5.16357 4.16667V17.5M8.49691 4.16667H16.8302V11.6667C16.8302 11.6667 16.6478 11.6667 15.9969 11.6667'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M3.49707 2.5L18.4971 17.5' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_862_155205'>
					<rect width='20' height='20' fill='white' transform='translate(0.99707)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(FlagOutlineCrossedIcon)
