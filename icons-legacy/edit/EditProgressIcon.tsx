import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
	accentColor?: string
}

export const EditProgressIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		className,

		color = DEFAULT_ICON.COLOR,
		size,
		accentColor = DEFAULT_ICON.ACCENT_COLOR,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 48 48'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<path
				d='M28 40H24M28 8H24M24 8H12C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12V36C8 37.0608 8.42143 38.0783 9.17157 38.8284C9.92172 39.5786 10.9391 40 12 40H24M24 8V40'
				stroke={modifiedColor}
				stroke-width='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M40 12C40 10.9391 39.5786 9.92172 38.8284 9.17157C38.0783 8.42143 37.0609 8 36 8'
				stroke={modifiedColor}
				stroke-width='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M36 40C37.0609 40 38.0783 39.5786 38.8284 38.8284C39.5786 38.0783 40 37.0609 40 36'
				stroke={modifiedColor}
				stroke-width='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path d='M40 20V28' stroke={modifiedColor} stroke-width='3' strokeLinecap='round' strokeLinejoin='round' />
			<path d='M24 4V44' stroke={accentColor} stroke-width='3' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(EditProgressIcon)
