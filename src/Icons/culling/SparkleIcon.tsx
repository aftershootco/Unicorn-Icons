import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const SparkleIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color = DEFAULT_ICON.COLOR, size, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 23 27'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<path
				d='M15.1545 24.2825L15.1547 24.282C15.9282 21.8926 17.7992 20.0172 20.1913 19.2462L21.6558 18.773L20.1913 18.2998C17.8001 17.5291 15.925 15.654 15.1543 13.2627L14.6811 11.7983L14.2079 13.2627L15.1545 24.2825ZM15.1545 24.2825L14.6811 25.7477M15.1545 24.2825L14.6811 25.7477M14.6811 25.7477L14.2079 24.2832M14.6811 25.7477L14.2079 24.2832M14.2079 24.2832L14.2076 24.2825C13.4368 21.8916 11.5619 20.0168 9.17083 19.2462L7.70635 18.773L9.17083 18.2998C11.5619 17.5291 13.4368 15.6544 14.2076 13.2634L14.2079 24.2832ZM4.45422 12.1823C4.00965 11.1666 3.19597 10.3534 2.17987 9.90957C3.19581 9.46578 4.00939 8.65285 4.45401 7.63736C4.89826 8.65201 5.71086 9.46444 6.72563 9.90847C5.71084 10.3542 4.89978 11.1656 4.45422 12.1823ZM11.954 1.72017C12.1474 1.98342 12.3798 2.21576 12.6432 2.40902C12.3803 2.60225 12.1481 2.83419 11.9547 3.09683C11.7615 2.83364 11.5293 2.60131 11.2661 2.408C11.5289 2.21494 11.7609 1.98296 11.954 1.72017ZM12.4227 4.01195L12.4226 4.01164L12.4227 4.01195Z'
				fill={modifiedColor}
				stroke={modifiedColor}
				stroke-width='2'
				strokeLinejoin='round'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(SparkleIcon)
