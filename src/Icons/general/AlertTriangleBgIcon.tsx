import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
	bgColor?: string
	bgOpacity?: number
}

export const AlertTriangleBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
		<svg viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<rect x='0.352539' y='0.702148' width='28' height='28' rx='14' fill={bgColor} fillOpacity={bgOpacity} />
			<g clipPath='url(#clip0_13276_22829)'>
				<path
					d='M14.3525 17.2021V17.2105M14.3525 12.2021V13.8688V12.2021Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M8.51945 20.5356H20.1861C20.458 20.5337 20.7254 20.4653 20.9648 20.3363C21.2042 20.2074 21.4084 20.0218 21.5596 19.7958C21.7108 19.5698 21.8045 19.3102 21.8323 19.0397C21.8602 18.7692 21.8214 18.496 21.7194 18.2439L15.8028 8.03558C15.6586 7.77507 15.4474 7.55793 15.1909 7.40673C14.9344 7.25553 14.6422 7.17578 14.3444 7.17578C14.0467 7.17578 13.7544 7.25553 13.498 7.40673C13.2415 7.55793 13.0302 7.77507 12.8861 8.03558L6.96945 18.2439C6.8694 18.4902 6.82972 18.7569 6.85374 19.0217C6.87775 19.2864 6.96476 19.5416 7.10749 19.7659C7.25022 19.9902 7.44454 20.1771 7.67422 20.311C7.9039 20.4449 8.16227 20.5219 8.42778 20.5356'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_13276_22829'>
					<rect x='4.35254' y='4.70215' width='20' height='20' rx='10' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(AlertTriangleBgIcon)
