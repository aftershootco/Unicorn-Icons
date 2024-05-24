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

export const ColorPaletteIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color = DEFAULT_ICON.COLOR, size, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 17 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<path
				d='M7.97633 0.129312C7.39432 0.136899 7.14436 0.142839 6.69991 0.399895C5.93464 0.841723 5.68736 1.84612 6.1476 2.64327L6.8101 3.79076C6.97744 4.08332 6.9591 4.44378 6.76362 4.70408C6.56814 4.96438 6.23402 5.07325 5.91704 4.97994L5.7839 4.94133C4.95126 4.70042 3.96947 4.78187 3.04079 5.14774C2.45226 5.37961 1.99796 5.73811 1.42672 6.24158C0.284597 7.24819 -0.358109 9.74056 0.682338 12.1846C0.752854 12.3503 0.826441 12.5143 0.908543 12.6745C1.11872 13.0847 1.62794 13.9489 2.5338 14.7657C4.26957 16.3307 6.97559 17.0926 10.3037 16.0195C11.4914 15.6366 12.1185 15.2242 13.0641 14.4099C14.375 13.2811 15.366 11.8252 15.7571 10.2365C16.1714 8.55366 16.1018 7.72734 15.7124 6.20496C15.4581 5.2108 15.1894 4.65852 14.6417 3.79076C13.869 2.56665 12.7367 1.50212 11.309 0.842553C10.1007 0.284365 8.77565 0.118893 7.97633 0.129312ZM4.70145 12.1385C4.1275 12.4698 3.3824 12.2538 3.03722 11.6559C2.69204 11.0581 2.8775 10.3048 3.45145 9.9734C4.0254 9.64203 4.7705 9.85806 5.11568 10.4559C5.46086 11.0538 5.2754 11.8071 4.70145 12.1385ZM8.44658 13.8252C7.87263 14.1566 7.12753 13.9405 6.78235 13.3427C6.43717 12.7448 6.62263 11.9915 7.19658 11.6601C7.77053 11.3288 8.51563 11.5448 8.86081 12.1427C9.20599 12.7405 9.02053 13.4938 8.44658 13.8252ZM11.9107 11.8252C11.3367 12.1566 10.5916 11.9405 10.2464 11.3427C9.90127 10.7448 10.0867 9.99152 10.6607 9.66015C11.2346 9.32878 11.9797 9.54482 12.3249 10.1427C12.6701 10.7405 12.4846 11.4938 11.9107 11.8252ZM12.3225 7.73846C11.7485 8.06983 11.0034 7.8538 10.6582 7.25593C10.3131 6.65807 10.4985 5.90477 11.0725 5.5734C11.6464 5.24203 12.3915 5.45806 12.7367 6.05593C13.0819 6.6538 12.8964 7.40709 12.3225 7.73846Z'
				fill={modifiedColor}
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ColorPaletteIcon)
