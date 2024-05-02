import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const ReloadWarningIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 47 46'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M44.8337 20.3339C44.1815 15.6411 42.0045 11.2929 38.638 7.95917C35.2715 4.6254 30.9023 2.49097 26.2034 1.88466C21.5046 1.27835 16.7367 2.2338 12.6342 4.60384C8.53174 6.97388 5.32232 10.627 3.50033 15.0005M2.16699 4.33385V15.0005H12.8337M2.16699 25.6673C2.81915 30.3601 4.99614 34.7082 8.36262 38.042C11.7291 41.3758 16.0983 43.5102 20.7972 44.1165C25.4961 44.7228 30.264 43.7674 34.3665 41.3973C38.4689 39.0273 41.6783 35.3742 43.5003 31.0007M44.8337 41.6673V31.0007H34.167M23.5003 15.0007V23.0007M23.5003 31.0007H23.527'
				stroke={modifiedColor}
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ReloadWarningIcon)
