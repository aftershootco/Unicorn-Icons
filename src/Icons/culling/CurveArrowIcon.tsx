import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const CurveArrowIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={(11 / 16) * size}
			viewBox='0 0 16 11'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: (11 / 16) * size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M13.2706 10.1614C13.3602 10.2665 13.5179 10.2791 13.6231 10.1896L15.3359 8.73053C15.441 8.641 15.4536 8.48321 15.3641 8.37811C15.2745 8.273 15.1167 8.26038 15.0116 8.34991L13.4891 9.64684L12.1922 8.12434C12.1027 8.01924 11.9449 8.00662 11.8398 8.09615C11.7347 8.18568 11.7221 8.34347 11.8116 8.44858L13.2706 10.1614ZM0.43623 0.750568C1.70933 0.877009 3.23924 0.749449 4.75244 0.687351C6.28262 0.624555 7.81083 0.626864 9.14517 0.990718C10.4684 1.35155 11.5927 2.06542 12.335 3.43137C13.0836 4.80869 13.4599 6.87802 13.2117 9.97933L13.7101 10.0192C13.962 6.87088 13.5883 4.69028 12.7743 3.19261C11.9542 1.68357 10.7035 0.897386 9.27671 0.508331C7.86104 0.122298 6.26425 0.124888 4.73194 0.187771C3.18264 0.251351 1.71255 0.374869 0.485645 0.253016L0.43623 0.750568Z'
				fill={modifiedColor}
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(CurveArrowIcon)
