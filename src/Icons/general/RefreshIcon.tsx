import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const RefreshIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<path d='M1.04 17.127v-6h5.373' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
			<path
				d='m1.04 11.127 4.155 4.36c.963 1.075 2.154 1.86 3.462 2.283a7.25 7.25 0 0 0 4.018.132c1.328-.335 2.558-1.041 3.576-2.051a9.12 9.12 0 0 0 2.244-3.725m-.03-10.128.07 6-5.373.077'
				stroke={modifiedColor}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='m18.535 7.997-4.206-4.3c-.975-1.06-2.175-1.829-3.488-2.232a7.247 7.247 0 0 0-4.02-.074c-1.323.355-2.545 1.078-3.55 2.103A9.154 9.154 0 0 0 1.07 7.25'
				stroke={modifiedColor}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(RefreshIcon)
