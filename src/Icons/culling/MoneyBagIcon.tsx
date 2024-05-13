import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type Props = IconProps & {
	inActive?: boolean
}

export const MoneyBagIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 39 49' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<path
				d='M24.438 13.5S38.5 24.438 38.5 40.063a7.813 7.813 0 0 1-7.813 7.812H8.813A7.813 7.813 0 0 1 1 40.062C1 24.438 15.063 13.5 15.063 13.5S5.687 5.375 5.687 2.562c0-2.812 6.25 1.563 9.375 1.563C19.517 4.125 19.985 1 22.875 1c2.89 0 3.203 3.203 7.813 3.203 1.718 0-1.563 4.688-6.25 9.297Z'
				stroke={modifiedColor}
				stroke-miterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M15.063 13.5h9.374m0 0s-1.367 0 11.329-1.953L24.438 13.5Zm9.375 3.125a5.078 5.078 0 0 1 4.688 2.344M19.75 42.406v-3.124m0-17.187v-3.126 3.125ZM24.373 26a4.688 4.688 0 0 0-4.623-3.906c-2.589 0-4.688 1.708-4.688 4.297 0 2.589 2.344 3.761 4.688 4.297 2.344.528 4.688 1.709 4.688 4.296 0 2.588-2.1 4.297-4.688 4.297a4.687 4.687 0 0 1-4.688-4.687'
				stroke={modifiedColor}
				stroke-miterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(MoneyBagIcon)
