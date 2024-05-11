import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const EditPhotoIcon = React.forwardRef<SVGSVGElement, IconProps>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<g clipPath='url(#clip0_13015_35284)'>
				<path
					d='M20 26.6665C22.7614 26.6665 25 24.4279 25 21.6665C25 18.9051 22.7614 16.6665 20 16.6665C17.2386 16.6665 15 18.9051 15 21.6665C15 24.4279 17.2386 26.6665 20 26.6665Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M20 6.6665H16.6667C16.2246 6.6665 15.8007 6.8421 15.4882 7.15466C15.1756 7.46722 15 7.89114 15 8.33317C15 9.21723 14.6488 10.0651 14.0237 10.6902C13.3986 11.3153 12.5507 11.6665 11.6667 11.6665H8.33333C7.44928 11.6665 6.60143 12.0177 5.97631 12.6428C5.35119 13.2679 5 14.1158 5 14.9998V29.9998C5 30.8839 5.35119 31.7317 5.97631 32.3569C6.60143 32.982 7.44928 33.3332 8.33333 33.3332H31.6667C32.5507 33.3332 33.3986 32.982 34.0237 32.3569C34.6488 31.7317 35 30.8839 35 29.9998V18.3332'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M25 10H35' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M30 5V15' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_13015_35284'>
					<rect width='40' height='40' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(EditPhotoIcon)
