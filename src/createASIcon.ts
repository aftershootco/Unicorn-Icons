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
const createASIcon = (iconName: string, originalAttributes: any, svgChildren: any) => {
	const Component = forwardRef<SVGSVGElement, ASIProps>(({ className, ...props }, ref) =>
		createElement(Icon, {
			ref,
			originalAttributes,
			svgChildren,
			className: mergeClasses(`unicon unicon-${toKebabCase(iconName)}`, className),
			...props,
		}),
	)

	Component.displayName = `${iconName}`

	return Component
}

export default createASIcon
