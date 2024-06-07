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

export const ImageCrossedIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color = DEFAULT_ICON.COLOR, size, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<g clipPath='url(#clip0_14013_43603)'>
				<path d='M2 2L14 14' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
				<path d='M10 5.33301H10.0067' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
				<path
					d='M5.33268 2.66699H11.3327C11.8631 2.66699 12.3718 2.87771 12.7469 3.25278C13.122 3.62785 13.3327 4.13656 13.3327 4.66699V10.667M12.7467 12.7483C12.3716 13.1232 11.863 13.3337 11.3327 13.3337H4.66602C4.13558 13.3337 3.62687 13.1229 3.2518 12.7479C2.87673 12.3728 2.66602 11.8641 2.66602 11.3337V4.66699C2.66602 4.11166 2.89268 3.60899 3.25802 3.24633L12.7467 12.7483Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M2.66602 9.99989L5.33268 7.33322C5.95135 6.73789 6.71402 6.73789 7.33268 7.33322L10.666 10.6666'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M10.8809 8.22692C11.2655 8.18759 11.6555 8.33492 12.0009 8.66692L13.3342 10.0003'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_14013_43603'>
					<rect width='16' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ImageCrossedIcon)
