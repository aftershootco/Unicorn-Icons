import { createElement, forwardRef } from 'react'
import Icon from './Icon'
import { ASIProps } from './types'
import { toKebabCase } from './utils'
import { cn } from './utils/cn'

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
			className: cn(`unicon unicon-${toKebabCase(iconName)} w-[24px] h-[24px] shrink-0 stroke-2`, className),
			...props,
		}),
	)

	Component.displayName = `${iconName}`

	return Component
}

export default createASIcon
