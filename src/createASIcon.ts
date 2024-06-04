import { createElement, forwardRef } from 'react'
import Icon from './Icon'
import { TUniconProps } from './types'
import { toKebabCase } from './utils'
import { cn } from './utils/cn'

/**
 * Create a Aftershoot icon component, using Icon component as base for all
 * Icons.
 * @param {string} iconName
 * @param {unknown} originalAttributes
 * @returns {ForwardRefExoticComponent} LucideIcon
 */
const createASIcon = (iconName: string, originalAttributes: unknown, svgChildren: React.SVGProps<SVGGElement>, svgType: string) => {
	const Component = forwardRef<SVGSVGElement, TUniconProps>(({ className, ...props }, ref) =>
		createElement(Icon, {
			ref,
			originalAttributes,
			svgChildren,
			svgType,
			className: cn(`unicon unicon-${toKebabCase(iconName)}`, className),
			...props,
		}),
	)

	Component.displayName = `${iconName}`

	return Component
}

export default createASIcon
