import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
	accentColor?: string
}

export const AddFolderIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		size = DEFAULT_ICON.SIZE,
		accentColor = DEFAULT_ICON.ACCENT_COLOR,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<path
				d='M26.616 18.377v5.6a2.8 2.8 0 0 1-2.8 2.8h-19.6a2.8 2.8 0 0 1-2.8-2.8v-5.6'
				stroke={accentColor}
				stroke-width='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path d='m7.015 11.377 7 7 7-7m-6.999 6.999v-16.8' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(AddFolderIcon)
