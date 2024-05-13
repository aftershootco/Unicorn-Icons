import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
	inActive?: boolean
}

export const SprayBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		bgOpacity = DEFAULT_ICON.BG_OPACITY,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<rect width='35' height='35' rx='17.5' fill={bgColor} fillOpacity={bgOpacity} />
			<path
				d='M20.6 13.931v-.677c0-.51-.447-.913-.98-.913h-.779v-1.527c0-.511-.446-.914-.979-.914h-1.758c-.533 0-.98.402-.98.913v1.528h-.78c-.532 0-.978.402-.978.913v.677l-1.1 1.222c-.236.26-.366.592-.366.935v8.827c0 .511.447.914.98.914h8.206c.533 0 .98-.403.98-.914v-8.827c0-.343-.13-.675-.366-.935l-1.1-1.222Zm-4.69-3.117c0-.088.08-.172.194-.172h1.758c.114 0 .193.084.193.171v1.528H15.91v-1.527Zm-1.758 2.44c0-.087.079-.171.193-.171h5.276c.114 0 .193.084.193.171v.443h-5.662v-.443Zm7.127 4.34v7.321c0 .087-.079.171-.193.171H12.88c-.114 0-.193-.084-.193-.171v-8.827a.68.68 0 0 1 .178-.454l1.076-1.195h6.085l1.076 1.195a.68.68 0 0 1 .178.454v1.505Z'
				fill={modifiedColor}
				stroke={modifiedColor}
				stroke-width='.2'
			/>
			<path
				d='M21.333 9.667a.335.335 0 0 0 .088-.012l3.666-1a.333.333 0 0 0-.175-.643l-3.666 1a.333.333 0 0 0 .087.655Zm3.754 1.678-3.666-1a.334.334 0 0 0-.175.643l3.666 1a.334.334 0 0 0 .175-.643Z'
				fill={modifiedColor}
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(SprayBgIcon)
