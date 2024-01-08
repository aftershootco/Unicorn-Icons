import * as React from 'react'
import { IconProps } from '../../types/Icons/types'

export const ChevronUpIcon = React.forwardRef<SVGSVGElement, IconProps>(
	({ variant = 'default', color = '#fff', size = 24, ...props }, forwardedRef) => {
		// variants
		const v1 = React.useMemo(() => {
			return (
				<svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' fill={color} {...props} ref={forwardedRef}>
					<path d='M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z' />
				</svg>
			)
		}, [color, forwardedRef, props, size])

		const v2 = React.useMemo(() => {
			return (
				<svg
					width={size}
					height={(11 / 8) * size}
					viewBox='0 0 18 11'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					{...props}
					ref={forwardedRef}
				>
					<path
						d='M1.059 9.53 9 1.587l7.941 7.941'
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

export default ChevronUpIcon
