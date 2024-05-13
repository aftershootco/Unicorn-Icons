import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'default' | 'enable'

type Props = Omit<IconProps, 'variant' | 'color' | 'inActive'> & {
	isFill?: boolean
}

export const PowerMidIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { isFill = false, size = DEFAULT_ICON.SIZE, ...restProps } = props

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const outline = (
		<svg viewBox='0 0 8 11' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<path
				d='M3.34636 6.33366H1.26367C1.09426 6.33366 0.935744 6.25014 0.839962 6.11039C0.744166 5.97061 0.723504 5.79265 0.784576 5.6347L0.784589 5.63467L2.54699 1.07838C2.547 1.07837 2.547 1.07837 2.547 1.07837C2.62354 0.88047 2.81388 0.75 3.02608 0.75H5.45119C5.62478 0.75 5.7866 0.837671 5.88144 0.983039L5.88148 0.983109C5.97624 1.12847 5.99126 1.3119 5.92126 1.47077C5.92126 1.47078 5.92126 1.47078 5.92126 1.47078L5.03221 3.4888H6.71289C6.90076 3.4888 7.07362 3.59137 7.16368 3.75621C7.25375 3.92107 7.24662 4.12196 7.14509 4.28004C7.14509 4.28005 7.14509 4.28005 7.14508 4.28005L3.46255 10.0139C3.36541 10.1651 3.20029 10.25 3.03021 10.25C2.96179 10.25 2.89259 10.2363 2.82691 10.208L3.34636 6.33366ZM3.34636 6.33366L2.53181 9.61243C2.4712 9.85638 2.59603 10.1084 2.82686 10.2079L3.34636 6.33366Z'
				stroke='#FFC12E'
				stroke-width='0.5'
			/>
		</svg>
	)

	const fill = (
		<svg viewBox='0 0 8 11' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<path
				d='M3.34636 6.33366H1.26367C1.09426 6.33366 0.935744 6.25014 0.839962 6.11039C0.744166 5.97061 0.723504 5.79265 0.784576 5.6347L0.784589 5.63467L2.54699 1.07838C2.547 1.07837 2.547 1.07837 2.547 1.07837C2.62354 0.88047 2.81388 0.75 3.02608 0.75H5.45119C5.62478 0.75 5.7866 0.837671 5.88144 0.983039L5.88148 0.983109C5.97624 1.12847 5.99126 1.3119 5.92126 1.47077C5.92126 1.47078 5.92126 1.47078 5.92126 1.47078L5.03221 3.4888H6.71289C6.90076 3.4888 7.07362 3.59137 7.16368 3.75621C7.25375 3.92107 7.24662 4.12196 7.14509 4.28004C7.14509 4.28005 7.14509 4.28005 7.14508 4.28005L3.46255 10.0139C3.36541 10.1651 3.20029 10.25 3.03021 10.25C2.96179 10.25 2.89259 10.2363 2.82691 10.208L3.34636 6.33366ZM3.34636 6.33366L2.53181 9.61243C2.4712 9.85638 2.59603 10.1084 2.82686 10.2079L3.34636 6.33366Z'
				fill='#FFC12E'
				stroke='#FFC12E'
				stroke-width='0.5'
			/>
		</svg>
	)

	const variant = isFill ? 'fill' : 'outline'

	return <BaseIcon variants={{ fill, outline }} variant={variant} />
})

export default React.memo(PowerMidIcon)
