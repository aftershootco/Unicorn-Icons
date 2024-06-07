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

export const CouponIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color = DEFAULT_ICON.COLOR, size, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 21 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<g clipPath='url(#clip0_4711_43118)'>
				<path d='M8 12.5L13 7.5' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
				<path
					d='M8.41667 8.33333C8.64679 8.33333 8.83333 8.14679 8.83333 7.91667C8.83333 7.68655 8.64679 7.5 8.41667 7.5C8.18655 7.5 8 7.68655 8 7.91667C8 8.14679 8.18655 8.33333 8.41667 8.33333Z'
					fill={modifiedColor}
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12.5837 12.5013C12.8138 12.5013 13.0003 12.3148 13.0003 12.0846C13.0003 11.8545 12.8138 11.668 12.5837 11.668C12.3535 11.668 12.167 11.8545 12.167 12.0846C12.167 12.3148 12.3535 12.5013 12.5837 12.5013Z'
					fill={modifiedColor}
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M4.66705 5.99843C4.66705 5.5122 4.86021 5.04589 5.20402 4.70207C5.54784 4.35825 6.01415 4.1651 6.50038 4.1651H7.33372C7.8178 4.16482 8.28213 3.9731 8.62538 3.63176L9.20872 3.04843C9.37909 2.8771 9.58165 2.74113 9.80475 2.64835C10.0279 2.55557 10.2671 2.50781 10.5087 2.50781C10.7503 2.50781 10.9896 2.55557 11.2127 2.64835C11.4358 2.74113 11.6383 2.8771 11.8087 3.04843L12.3921 3.63176C12.7353 3.9731 13.1996 4.16482 13.6837 4.1651H14.5171C15.0033 4.1651 15.4696 4.35825 15.8134 4.70207C16.1572 5.04589 16.3504 5.5122 16.3504 5.99843V6.83176C16.3507 7.31585 16.5424 7.78017 16.8837 8.12343L17.4671 8.70676C17.6384 8.87714 17.7743 9.0797 17.8671 9.3028C17.9599 9.5259 18.0077 9.76514 18.0077 10.0068C18.0077 10.2484 17.9599 10.4876 17.8671 10.7107C17.7743 10.9338 17.6384 11.1364 17.4671 11.3068L16.8837 11.8901C16.5424 12.2334 16.3507 12.6977 16.3504 13.1818V14.0151C16.3504 14.5013 16.1572 14.9676 15.8134 15.3115C15.4696 15.6553 15.0033 15.8484 14.5171 15.8484H13.6837C13.1996 15.8487 12.7353 16.0404 12.3921 16.3818L11.8087 16.9651C11.6383 17.1364 11.4358 17.2724 11.2127 17.3652C10.9896 17.458 10.7503 17.5057 10.5087 17.5057C10.2671 17.5057 10.0279 17.458 9.80475 17.3652C9.58165 17.2724 9.37909 17.1364 9.20872 16.9651L8.62538 16.3818C8.28213 16.0404 7.8178 15.8487 7.33372 15.8484H6.50038C6.01415 15.8484 5.54784 15.6553 5.20402 15.3115C4.86021 14.9676 4.66705 14.5013 4.66705 14.0151V13.1818C4.66677 12.6977 4.47505 12.2334 4.13372 11.8901L3.55038 11.3068C3.37905 11.1364 3.24309 10.9338 3.15031 10.7107C3.05753 10.4876 3.00977 10.2484 3.00977 10.0068C3.00977 9.76514 3.05753 9.5259 3.15031 9.3028C3.24309 9.0797 3.37905 8.87714 3.55038 8.70676L4.13372 8.12343C4.47505 7.78017 4.66677 7.31585 4.66705 6.83176V5.99843'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_4711_43118'>
					<rect width='20' height='20' fill='white' transform='translate(0.5)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(CouponIcon)
