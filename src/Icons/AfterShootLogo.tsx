import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

export const AfterShootLogo = React.forwardRef<HTMLSpanElement, IconProps>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// VARIANTS

	const primary = (
		<svg width={size} height={(38 / 41) * size} viewBox='0 0 41 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M26.2932 37.913C24.5097 37.8888 22.7369 37.632 21.0189 37.1489C17.7957 36.2612 14.6079 34.6638 12.7064 32.9806C9.50811 30.1522 8.15524 26.1201 9.34185 22.9484C10.0588 21.0286 12.3094 17.8108 19.3169 17.8108H29.6369C29.3103 16.5517 28.9205 15.31 28.469 14.0906C25.9607 7.35987 22.3323 3.9474 17.6835 3.9474C14.8261 3.9474 12.4383 5.44847 10.383 8.53644C8.59164 11.2308 7.1307 15.0474 6.04384 19.8792C4.1465 28.3204 4.08209 36.9186 4.08209 37.0044L0.25 36.9877C0.25 36.6213 0.312337 27.9289 2.29488 19.0816C3.48358 13.7724 5.12947 9.50994 7.18475 6.40941C9.96737 2.22232 13.5002 0.0869141 17.6835 0.0869141C24.0052 0.0869141 28.974 4.46032 32.0559 12.734C32.6659 14.394 33.1766 16.0893 33.5854 17.8108H40.25V21.6713H34.3689C34.8232 24.3051 35.0719 26.9706 35.1128 29.6435C35.1128 33.146 33.5792 35.7734 30.7945 37.0442C29.3834 37.6848 27.8082 37.913 26.2932 37.913ZM19.3231 21.6713C15.8838 21.6713 13.5522 22.6322 12.9266 24.3092C12.3011 25.9861 13.2571 28.3309 15.2313 30.079C16.7047 31.3791 19.3709 32.6938 22.0289 33.4286C24.9674 34.2367 27.5858 34.2661 29.213 33.5312C30.1004 33.1272 31.2807 32.2751 31.2807 29.6477C31.2282 26.9709 30.9564 24.3031 30.4682 21.6713H19.3231Z'
				fill='url(#paint0_angular_13276_22209)'
			/>
			<defs>
				<radialGradient
					id='paint0_angular_13276_22209'
					cx='0'
					cy='0'
					r='1'
					gradientUnits='userSpaceOnUse'
					gradientTransform='translate(22.6122 25.8341) rotate(-165.747) scale(23.8848 21.5005)'
				>
					<stop stop-color='#7E68B0' />
					<stop offset='0.184461' stop-color='#008AD2' />
					<stop offset='0.353157' stop-color='#21B24B' />
					<stop offset='0.519702' stop-color='#FFC40E' />
					<stop offset='0.687523' stop-color='#F6821F' />
					<stop offset='0.853193' stop-color='#EF4023' />
					<stop offset='1' stop-color='#7E68B0' />
				</radialGradient>
			</defs>
		</svg>
	)

	const secondary = (
		<svg width={size} height={(38 / 41) * size} viewBox='0 0 41 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M26.2932 37.913C24.5097 37.8888 22.7369 37.632 21.0189 37.1489C17.7957 36.2612 14.6079 34.6638 12.7064 32.9806C9.50811 30.1522 8.15524 26.1201 9.34185 22.9484C10.0588 21.0286 12.3094 17.8108 19.3169 17.8108H29.6369C29.3103 16.5517 28.9205 15.31 28.469 14.0906C25.9607 7.35987 22.3323 3.9474 17.6835 3.9474C14.8261 3.9474 12.4383 5.44847 10.383 8.53644C8.59164 11.2308 7.1307 15.0474 6.04384 19.8792C4.1465 28.3204 4.08209 36.9186 4.08209 37.0044L0.25 36.9877C0.25 36.6213 0.312337 27.9289 2.29488 19.0816C3.48358 13.7724 5.12947 9.50994 7.18475 6.40941C9.96737 2.22232 13.5002 0.0869141 17.6835 0.0869141C24.0052 0.0869141 28.974 4.46032 32.0559 12.734C32.6659 14.394 33.1766 16.0893 33.5854 17.8108H40.25V21.6713H34.3689C34.8232 24.3051 35.0719 26.9706 35.1128 29.6435C35.1128 33.146 33.5792 35.7734 30.7945 37.0442C29.3834 37.6848 27.8082 37.913 26.2932 37.913ZM19.3231 21.6713C15.8838 21.6713 13.5522 22.6322 12.9266 24.3092C12.3011 25.9861 13.2571 28.3309 15.2313 30.079C16.7047 31.3791 19.3709 32.6938 22.0289 33.4286C24.9674 34.2367 27.5858 34.2661 29.213 33.5312C30.1004 33.1272 31.2807 32.2751 31.2807 29.6477C31.2282 26.9709 30.9564 24.3031 30.4682 21.6713H19.3231Z'
				fill={color}
			/>
			<defs>
				<radialGradient
					id='paint0_angular_13276_22209'
					cx='0'
					cy='0'
					r='1'
					gradientUnits='userSpaceOnUse'
					gradientTransform='translate(22.6122 25.8341) rotate(-165.747) scale(23.8848 21.5005)'
				>
					<stop stop-color='#7E68B0' />
					<stop offset='0.184461' stop-color='#008AD2' />
					<stop offset='0.353157' stop-color='#21B24B' />
					<stop offset='0.519702' stop-color='#FFC40E' />
					<stop offset='0.687523' stop-color='#F6821F' />
					<stop offset='0.853193' stop-color='#EF4023' />
					<stop offset='1' stop-color='#7E68B0' />
				</radialGradient>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(AfterShootLogo)
