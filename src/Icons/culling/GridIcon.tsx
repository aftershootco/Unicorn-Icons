import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const GridIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg
			width='24'
			height='24'
			viewBox='0 0 22 22'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: iconSize }}
			{...restProps}
			ref={forwardedRef}
		>
			<g clipPath='url(#clip0_12220_36385)'>
				<path
					d='M8.75 5H5.75C5.33579 5 5 5.33579 5 5.75V8.75C5 9.16421 5.33579 9.5 5.75 9.5H8.75C9.16421 9.5 9.5 9.16421 9.5 8.75V5.75C9.5 5.33579 9.16421 5 8.75 5Z'
					fill={modifiedColor}
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M16.25 5H13.25C12.8358 5 12.5 5.33579 12.5 5.75V8.75C12.5 9.16421 12.8358 9.5 13.25 9.5H16.25C16.6642 9.5 17 9.16421 17 8.75V5.75C17 5.33579 16.6642 5 16.25 5Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
				<path
					d='M8.75 12.5H5.75C5.33579 12.5 5 12.8358 5 13.25V16.25C5 16.6642 5.33579 17 5.75 17H8.75C9.16421 17 9.5 16.6642 9.5 16.25V13.25C9.5 12.8358 9.16421 12.5 8.75 12.5Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
				<path
					d='M16.25 12.5H13.25C12.8358 12.5 12.5 12.8358 12.5 13.25V16.25C12.5 16.6642 12.8358 17 13.25 17H16.25C16.6642 17 17 16.6642 17 16.25V13.25C17 12.8358 16.6642 12.5 16.25 12.5Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
			</g>
			<defs>
				<clipPath id='clip0_12220_36385'>
					<rect width='18' height='18' fill='white' transform='translate(2 2)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(GridIcon)
