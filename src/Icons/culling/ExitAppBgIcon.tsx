import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
	inActive?: boolean
}

export const ExitAppBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 97 96'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<rect x='0.5' width='96' height='96' rx='48' fill={bgColor} fillOpacity={bgOpacity} />
			<g clip-path='url(#clip0_13272_22757)'>
				<path
					d='M57.8333 37.3332C57.8333 37.8855 58.281 38.3332 58.8333 38.3332C59.3856 38.3332 59.8333 37.8855 59.8333 37.3332H57.8333ZM53.5 26.6665V25.6665V26.6665ZM34.8333 26.6665V25.6665V26.6665ZM29.5 31.9998H28.5H29.5ZM29.5 63.9998H28.5H29.5ZM59.8333 58.6665C59.8333 58.1142 59.3856 57.6665 58.8333 57.6665C58.281 57.6665 57.8333 58.1142 57.8333 58.6665H59.8333ZM40.1667 46.9998C39.6144 46.9998 39.1667 47.4476 39.1667 47.9998C39.1667 48.5521 39.6144 48.9998 40.1667 48.9998V46.9998ZM77.5 47.9998L78.2071 48.7069C78.3946 48.5194 78.5 48.2651 78.5 47.9998C78.5 47.7346 78.3946 47.4803 78.2071 47.2927L77.5 47.9998ZM70.2071 39.2927C69.8166 38.9022 69.1834 38.9022 68.7929 39.2927C68.4024 39.6833 68.4024 40.3164 68.7929 40.7069L70.2071 39.2927ZM68.7929 55.2927C68.4024 55.6833 68.4024 56.3164 68.7929 56.7069C69.1834 57.0975 69.8166 57.0975 70.2071 56.7069L68.7929 55.2927ZM59.8333 37.3332V31.9998H57.8333V37.3332H59.8333ZM59.8333 31.9998C59.8333 30.3201 59.1661 28.7092 57.9783 27.5215L56.5641 28.9357C57.3768 29.7484 57.8333 30.8506 57.8333 31.9998H59.8333ZM57.9783 27.5215C56.7906 26.3338 55.1797 25.6665 53.5 25.6665V27.6665C54.6493 27.6665 55.7515 28.123 56.5641 28.9357L57.9783 27.5215ZM53.5 25.6665H34.8333V27.6665H53.5V25.6665ZM34.8333 25.6665C33.1536 25.6665 31.5427 26.3338 30.355 27.5215L31.7692 28.9357C32.5819 28.1231 33.6841 27.6665 34.8333 27.6665V25.6665ZM30.355 27.5215C29.1673 28.7092 28.5 30.3201 28.5 31.9998H30.5C30.5 30.8506 30.9565 29.7484 31.7692 28.9357L30.355 27.5215ZM28.5 31.9998V63.9998H30.5V31.9998H28.5ZM28.5 63.9998C28.5 65.6795 29.1673 67.2904 30.355 68.4782L31.7692 67.064C30.9565 66.2513 30.5 65.1491 30.5 63.9998H28.5ZM30.355 68.4782C31.5427 69.6659 33.1536 70.3332 34.8333 70.3332V68.3332C33.6841 68.3332 32.5819 67.8766 31.7692 67.064L30.355 68.4782ZM34.8333 70.3332H53.5V68.3332H34.8333V70.3332ZM53.5 70.3332C55.1797 70.3332 56.7906 69.6659 57.9783 68.4782L56.5641 67.064C55.7515 67.8766 54.6493 68.3332 53.5 68.3332V70.3332ZM57.9783 68.4782C59.1661 67.2904 59.8333 65.6795 59.8333 63.9998H57.8333C57.8333 65.1491 57.3768 66.2513 56.5641 67.064L57.9783 68.4782ZM59.8333 63.9998V58.6665H57.8333V63.9998H59.8333ZM40.1667 48.9998H77.5V46.9998H40.1667V48.9998ZM78.2071 47.2927L70.2071 39.2927L68.7929 40.7069L76.7929 48.7069L78.2071 47.2927ZM70.2071 56.7069L78.2071 48.7069L76.7929 47.2927L68.7929 55.2927L70.2071 56.7069Z'
					fill={modifiedColor}
				/>
			</g>
			<defs>
				<clipPath id='clip0_13272_22757'>
					<rect x='21.5' y='16' width='64' height='64' rx='32' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ExitAppBgIcon)
