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

export const MouseLeftClickCircleIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
		<svg viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke={modifiedColor} stroke-opacity='.25' />
			<g clipPath='url(#a)' stroke={modifiedColor}>
				<path d='M17.4 6.411h-.8c-3.976 0-7.2 3.31-7.2 7.393v7.393c0 4.083 3.224 7.393 7.2 7.393h.8c3.977 0 7.2-3.31 7.2-7.393v-7.393c0-4.083-3.224-7.393-7.2-7.393Z' />
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M16.436 8.465c-1.652.026-2.726.403-3.836 1.643-.938 1.048-1.113 2.737-1.175 4.73a.993.993 0 0 0 .996 1.02h3.907a.672.672 0 0 0 .672-.672V9.029a.564.564 0 0 0-.564-.564Z'
					fill={modifiedColor}
				/>
			</g>
			<defs>
				<clipPath id='a'>
					<path fill={modifiedColor} transform='translate(9 6)' d='M0 0h16v23H0z' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(MouseLeftClickCircleIcon)
