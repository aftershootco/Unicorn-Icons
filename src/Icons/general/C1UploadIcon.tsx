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

export const C1UploadIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
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
			<g clipPath='url(#clip0_3554_73921)'>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M4.8125 2.64258C4.8125 1.81415 5.48407 1.14258 6.3125 1.14258H22.1386C22.5364 1.14258 22.9179 1.3006 23.1992 1.58188L27.2326 5.615C27.514 5.89631 27.672 6.27786 27.672 6.6757V17.8842V21.3137C27.672 21.8504 27.2369 22.2855 26.7002 22.2855H24.6399C20.9475 22.2855 17.9542 25.2788 17.9542 28.9712C17.9542 29.3814 17.6217 29.714 17.2114 29.714H6.3125C5.48407 29.714 4.8125 29.0424 4.8125 28.214V2.64258ZM10.4733 20.7106C11.3286 21.1383 12.363 21.3521 13.5766 21.3521C14.5821 21.3521 15.4779 21.1903 16.2638 20.8667C17.0613 20.543 17.6854 20.0461 18.1362 19.3757C18.5985 18.7053 18.8297 17.8558 18.8297 16.8272H16.9226C16.9226 17.4629 16.7839 17.9945 16.5065 18.4222C16.2407 18.8498 15.8593 19.1734 15.3623 19.393C14.8653 19.6011 14.2816 19.7051 13.6113 19.7051C12.7907 19.7051 12.103 19.5549 11.5482 19.2543C10.9934 18.9423 10.5716 18.4684 10.2826 17.8327C10.0052 17.197 9.86654 16.388 9.86654 15.4056V15.0242C9.86654 14.0417 10.0052 13.2327 10.2826 12.597C10.5716 11.9613 10.9934 11.4875 11.5482 11.1754C12.1145 10.8518 12.8022 10.69 13.6113 10.69C14.2585 10.69 14.8249 10.7998 15.3103 11.0194C15.8073 11.239 16.1887 11.5626 16.4545 11.9902C16.7204 12.4179 16.8533 12.9495 16.8533 13.5852H18.8297C18.8297 12.5566 18.5985 11.7128 18.1362 11.054C17.6854 10.3837 17.0613 9.88091 16.2638 9.54574C15.4779 9.21056 14.5879 9.04297 13.594 9.04297C11.7909 9.04297 10.3809 9.55151 9.36377 10.5686C8.35824 11.5741 7.85547 13.1171 7.85547 15.1975C7.85547 16.6076 8.08085 17.7692 8.5316 18.6822C8.98236 19.5953 9.6296 20.2714 10.4733 20.7106ZM20.0898 20.0534V21.0441H24.4487V20.0534H22.9429V14.248H22.3485C22.124 14.3735 21.873 14.4924 21.5956 14.6047C21.3182 14.717 21.0441 14.8127 20.7733 14.892C20.5092 14.9646 20.278 15.0108 20.0799 15.0307V15.7737H21.7244V20.0534H20.0898ZM20.875 2.83105L25.7871 7.74283H20.875V2.83105Z'
					fill={modifiedColor}
				/>
				<g clipPath='url(#clip1_3554_73921)'>
					<path
						d='M21.0234 32.499V33.499C21.0234 33.7642 21.1288 34.0186 21.3163 34.2061C21.5039 34.3937 21.7582 34.499 22.0234 34.499H28.0234C28.2887 34.499 28.543 34.3937 28.7305 34.2061C28.9181 34.0186 29.0234 33.7642 29.0234 33.499V32.499'
						stroke={modifiedColor}
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<path d='M22.5234 28.501L25.0234 26.001L27.5234 28.501' stroke={accentColor} strokeLinecap='round' strokeLinejoin='round' />
					<path d='M25.0234 26.001V32.001' stroke={accentColor} strokeLinecap='round' strokeLinejoin='round' />
				</g>
			</g>
			<defs>
				<clipPath id='clip0_3554_73921'>
					<rect width='34.2857' height='36' fill='white' transform='translate(0.8125)' />
				</clipPath>
				<clipPath id='clip1_3554_73921'>
					<rect width='12' height='12' fill='white' transform='translate(19.0234 24)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})
