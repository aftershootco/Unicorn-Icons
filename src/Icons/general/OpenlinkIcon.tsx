import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const OpenlinkIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color
	// variants

	const primary = (
		<svg
			width={size}
			height={(16 / 17) * size}
			viewBox='0 0 17 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: (16 / 17) * size }}
			ref={forwardedRef}
			{...restProps}
		>
			<path
				d='M7.70312 2.32324H2.875C1.83947 2.32324 1 3.16271 1 4.19824V13.2424C1 14.2779 1.83947 15.1174 2.875 15.1174H7.70312H12.5312C13.5668 15.1174 14.4062 14.2779 14.4062 13.2424V11.8085V8.49971'
				stroke={modifiedColor}
				stroke-width='1.13438'
				stroke-linecap='round'
			/>
			<path
				d='M16.4098 0.991664C16.4052 0.678449 16.1475 0.42827 15.8343 0.432874L10.7302 0.507896C10.4169 0.5125 10.1668 0.770143 10.1714 1.08336C10.176 1.39657 10.4336 1.64675 10.7468 1.64215L15.2838 1.57546L15.3505 6.11247C15.3551 6.42569 15.6128 6.67587 15.926 6.67126C16.2392 6.66666 16.4894 6.40902 16.4848 6.0958L16.4098 0.991664ZM15.4357 0.604875L7.29621 8.98723L8.11004 9.77748L16.2495 1.39512L15.4357 0.604875Z'
				fill={modifiedColor}
			/>
		</svg>
	)

	const secondary = (
		<svg
			width={(16 / 17) * size}
			height={size}
			viewBox='0 0 16 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: (16 / 17) * size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<g clip-path='url(#clip0_21395_124739)'>
				<path
					d='M7.33341 4.8877H4.00008C3.64646 4.8877 3.30732 5.02817 3.05727 5.27822C2.80722 5.52827 2.66675 5.86741 2.66675 6.22103V12.221C2.66675 12.5747 2.80722 12.9138 3.05727 13.1638C3.30732 13.4139 3.64646 13.5544 4.00008 13.5544H10.0001C10.3537 13.5544 10.6928 13.4139 10.9429 13.1638C11.1929 12.9138 11.3334 12.5747 11.3334 12.221V8.8877'
					stroke={color}
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M6.66675 9.55436L13.3334 2.8877' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
				<path d='M10 2.8877H13.3333V6.22103' stroke={color} stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_21395_124739'>
					<rect width='16' height='16' fill='white' transform='translate(0 0.220703)' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(OpenlinkIcon)
