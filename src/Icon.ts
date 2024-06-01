import { createElement, forwardRef } from 'react'
import defaultAttributes from './defaultAttributes'
import { ASIProps } from './types'
import { cn } from './utils/cn'

interface IconComponentProps extends ASIProps {
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
		{
			color = 'currentColor',
			size,
			inActive = false,
			fillColor = 'none',
			className,
			children,
			originalAttributes,
			svgChildren,
			svgType,
			...rest
		},
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
				fill: fillColor,
				className: cn(
					`w-[24px] h-[24px] shrink-0 `,
					svgType === 'outline' && 'stroke-[1.5px]',
					svgType === 'fill' && 'text-[#555555]',
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
