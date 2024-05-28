import { createElement, forwardRef } from 'react'
import { stringify } from 'svgson'
import { ASIProps, IconNode } from './types'
import { mergeClasses } from './utils'

interface IconComponentProps extends ASIProps {
	originalAttributes: any
	groupSvgChildrenObj: any
}

/**
 * Lucide icon component
 *
 * @component Icon
 * @param {object} props
 * @param {string} props.color - The color of the icon
 * @param {number} props.size - The size of the icon
 * @param {number} props.strokeWidth - The stroke width of the icon
 * @param {boolean} props.absoluteStrokeWidth - Whether to use absolute stroke width
 * @param {string} props.className - The class name of the icon
 * @param {IconNode} props.children - The children of the icon
 * @param {IconNode} props.iconNode - The icon node of the icon
 *
 * @returns {ForwardRefExoticComponent} LucideIcon
 */
const Icon = forwardRef<SVGSVGElement, IconComponentProps>(
	(
		{
			color = 'currentColor',
			size = 24,
			strokeWidth = 2,
			inActive = false,
			fillColor = 'none',
			absoluteStrokeWidth,
			className = '',
			children,
			originalAttributes,
			groupSvgChildrenObj,
			...rest
		},
		ref
	) => {
		const groupSvgChildrenTemplate = stringify(groupSvgChildrenObj).replace(/"/g, '')
		console.log('groupSvgChildrenTemplate', groupSvgChildrenTemplate.replace(/"/g, ''))

		return createElement(
			'svg',
			{
				ref,
				...originalAttributes,
				// width: size,
				// height: size,
				stroke: inActive ? '#777777' : color,
				fill: fillColor,
				strokeWidth: absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth,
				className: mergeClasses('asi w-[24px] h-auto shrink-0', className),
				...rest,
			}
			// groupSvgChildrenTemplate
			// [...iconNode.map(([tag, attrs]) => createElement(tag, attrs)), ...(Array.isArray(children) ? children : [children])]
		)
	}
)

export default Icon
