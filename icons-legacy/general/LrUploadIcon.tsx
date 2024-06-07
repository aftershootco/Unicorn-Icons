import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	accentColor?: string
}

export const LrUploadIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		className,

		accentColor = DEFAULT_ICON.ACCENT_COLOR,
		color = DEFAULT_ICON.COLOR,
		size,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width='36'
			height='36'
			viewBox='0 0 36 36'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<g clipPath='url(#clip0_3554_73911)'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M6.40625 1.14258C5.57782 1.14258 4.90625 1.81415 4.90625 2.64258V28.214C4.90625 29.0424 5.57782 29.714 6.40625 29.714H17.3051C17.7154 29.714 18.048 29.3814 18.048 28.9712C18.048 25.2788 21.0413 22.2855 24.7336 22.2855H26.794C27.3307 22.2855 27.7658 21.8504 27.7658 21.3137V17.8842V6.6757C27.7658 6.27786 27.6077 5.89631 27.3264 5.615L23.2929 1.58188C23.0116 1.3006 22.6301 1.14258 22.2323 1.14258H6.40625ZM7.67578 20.1206H9.27104V10.2247H7.67578V8.73828H12.6967V10.2247H11.0841V20.0482H15.5423V17.9821H17.1376V21.5346H7.67612L7.67578 20.1206ZM19.9387 20.176H18.5615L18.5614 21.5357H23.0559V20.1761H21.6963V17.7476C21.6963 15.9534 22.5303 13.9775 24.4878 13.9775C24.7773 13.9775 24.9953 14.0318 24.9953 14.0318V12.2921C24.9953 12.2921 24.7773 12.2559 24.5417 12.2559C23.1285 12.2559 22.0591 13.307 21.6424 14.6484H21.6062C21.6062 14.6484 21.6424 14.3765 21.6424 14.0138V13.4338C21.6424 12.6907 21.2614 12.3643 20.4638 12.3643H18.3984V13.724H19.5401C19.7943 13.724 19.9387 13.8507 19.9387 14.1226V20.176ZM20.9688 2.83105L25.8809 7.74283H20.9688V2.83105Z'
					fill={modifiedColor}
				/>
				<g clipPath='url(#clip1_3554_73911)'>
					<path
						d='M21.1172 32.499V33.499C21.1172 33.7642 21.2225 34.0186 21.4101 34.2061C21.5976 34.3937 21.852 34.499 22.1172 34.499H28.1172C28.3824 34.499 28.6368 34.3937 28.8243 34.2061C29.0118 34.0186 29.1172 33.7642 29.1172 33.499V32.499'
						stroke={modifiedColor}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path d='M22.6172 28.501L25.1172 26.001L27.6172 28.501' stroke={accentColor} strokeLinecap='round' strokeLinejoin='round' />
					<path d='M25.1172 26.001V32.001' stroke={accentColor} strokeLinecap='round' strokeLinejoin='round' />
				</g>
			</g>
			<defs>
				<clipPath id='clip0_3554_73911'>
					<rect width='34.2857' height='36' fill='white' transform='translate(0.902344)' />
				</clipPath>
				<clipPath id='clip1_3554_73911'>
					<rect width='12' height='12' fill='white' transform='translate(19.1172 24)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})
