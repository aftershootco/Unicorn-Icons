import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const KeyCircleIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke={modifiedColor} stroke-opacity='.5' />
			<path
				d='m20.59 14.336 2.76-2.76M24.927 10l-1.577 1.577L24.927 10Zm-7.577 7.577a4.337 4.337 0 1 1-6.133 6.132 4.336 4.336 0 0 1 6.132-6.131v-.001Zm0 0 3.24-3.24-3.24 3.24Zm3.24-3.24 2.366 2.365 2.759-2.76-2.365-2.365-2.76 2.76Z'
				stroke={modifiedColor}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(KeyCircleIcon)
