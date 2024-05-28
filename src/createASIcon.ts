import { createElement, forwardRef } from 'react'
import Icon from './Icon'
import { ASIProps } from './types'
import { mergeClasses, toKebabCase } from './utils'

/**
 * Create a Lucide icon component
 * @param {string} iconName
 * @param {array} iconNode
 * @returns {ForwardRefExoticComponent} LucideIcon
 */
const createASIcon = (iconName: string, originalAttributes: any, groupSvgChildrenObj: any) => {
	const Component = forwardRef<SVGSVGElement, ASIProps>(({ className, ...props }, ref) =>
		createElement(Icon, {
			ref,
			originalAttributes,
			groupSvgChildrenObj,
			className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
			...props,
		})
	)

	Component.displayName = `${iconName}`

	return Component
}

export default createASIcon
