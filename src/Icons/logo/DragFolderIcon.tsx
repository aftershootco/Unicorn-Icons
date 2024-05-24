import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import { cn } from '../../utils/cn'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant' | 'color' | 'inActive'> & {
	variant?: IconVariant
}

export const DragFolderIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, size, ...restProps } = props

	// variants
	const primary = (
		<svg
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
			viewBox='0 0 60 60'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect width='60' height='60' rx='10' fill='#414141' />
			<path
				d='M42.63 39.15a2.61 2.61 0 0 1-2.61 2.61H19.14a2.61 2.61 0 0 1-2.61-2.61V20.88a2.61 2.61 0 0 1 2.61-2.61h6.525l2.61 3.915H40.02a2.61 2.61 0 0 1 2.61 2.61V39.15Z'
				stroke='#fff'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})
