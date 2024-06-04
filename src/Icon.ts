import { createElement, forwardRef } from 'react'
import defaultAttributes from './defaultAttributes'
import { TUniconProps } from './types'
import { cn } from './utils/cn'

interface IconComponentProps extends TUniconProps {
	originalAttributes: any
	svgChildren: any
	svgType: string
}

/**
 * Aftershoot icon component
 * @component Icon
 * Common component for all icons
 */

const Icon = forwardRef<SVGSVGElement, IconComponentProps>(
	(
		{ originalAttributes, color = 'currentColor', size, inActive = false, className, children, svgChildren, svgType, accentColor, ...rest },
		ref,
	) => {
		return createElement(
			'svg',
			{
				ref,
				...defaultAttributes,
				...originalAttributes,
				...(svgType === 'outline' && { stroke: inActive ? '#777777' : color }),
				...(size ? { style: { width: size, height: 'auto' } } : {}),
				className: cn(
					`w-7 shrink-0 `,
					svgType === 'outline' && 'stroke-2',
					svgType === 'fill' && 'text-white',
					inActive && 'text-[#777777]',
					className,
				),

				...rest,
			},
			svgChildren,
		)
	},
)

export default Icon
