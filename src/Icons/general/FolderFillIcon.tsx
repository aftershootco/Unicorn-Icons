import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const FolderFillIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<g clipPath='url(#clip0_3712_63242)'>
				<path
					d='M3.33333 2.66666H6L8 4.66666H12.6667C13.0203 4.66666 13.3594 4.80713 13.6095 5.05718C13.8595 5.30723 14 5.64637 14 5.99999V11.3333C14 11.6869 13.8595 12.0261 13.6095 12.2761C13.3594 12.5262 13.0203 12.6667 12.6667 12.6667H3.33333C2.97971 12.6667 2.64057 12.5262 2.39052 12.2761C2.14048 12.0261 2 11.6869 2 11.3333V3.99999C2 3.64637 2.14048 3.30723 2.39052 3.05718C2.64057 2.80713 2.97971 2.66666 3.33333 2.66666'
					fill={modifiedColor}
				/>
				<path
					d='M3.33333 2.66666H6L8 4.66666H12.6667C13.0203 4.66666 13.3594 4.80713 13.6095 5.05718C13.8595 5.30723 14 5.64637 14 5.99999V11.3333C14 11.6869 13.8595 12.0261 13.6095 12.2761C13.3594 12.5262 13.0203 12.6667 12.6667 12.6667H3.33333C2.97971 12.6667 2.64057 12.5262 2.39052 12.2761C2.14048 12.0261 2 11.6869 2 11.3333V3.99999C2 3.64637 2.14048 3.30723 2.39052 3.05718C2.64057 2.80713 2.97971 2.66666 3.33333 2.66666'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_3712_63242'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(FolderFillIcon)
