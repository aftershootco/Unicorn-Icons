import * as React from 'react'
import { IconProps } from '../../types/Icons/types'

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ variant = 'default', color = '#fff', size = 24, ...props }, forwardedRef) => {
		// variants
		const v1 = React.useMemo(() => {
			return (
				<svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' fill={color} {...props} ref={forwardedRef}>
					<path d='M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z' />
				</svg>
			)
		}, [color, forwardedRef, props, size])

		const v2 = React.useMemo(() => {
			return (
				<svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props} ref={forwardedRef}>
					<path
						d='M16.94 1.412 9 9.354 1.059 1.412'
						stroke={color}
						stroke-opacity='.8'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			)
		}, [color, forwardedRef, props, size])

		// variants mapping
		const variants = {
			default: v1,
			primary: v1,
			secondary: v2,
		}

		return variants[variant]
	}
)

export default ChevronDownIcon
