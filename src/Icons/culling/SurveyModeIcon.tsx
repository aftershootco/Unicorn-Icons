import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const SurveyModeIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: iconSize }}
			{...restProps}
			ref={forwardedRef}
		>
			<g clipPath='url(#clip0_5368_98092)'>
				<path
					d='M7.50004 3.3335H4.16671C3.70647 3.3335 3.33337 3.70659 3.33337 4.16683V7.50016C3.33337 7.9604 3.70647 8.3335 4.16671 8.3335H7.50004C7.96028 8.3335 8.33337 7.9604 8.33337 7.50016V4.16683C8.33337 3.70659 7.96028 3.3335 7.50004 3.3335Z'
					fill={modifiedColor}
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M15.8333 3.3335H12.5C12.0397 3.3335 11.6666 3.70659 11.6666 4.16683V7.50016C11.6666 7.9604 12.0397 8.3335 12.5 8.3335H15.8333C16.2935 8.3335 16.6666 7.9604 16.6666 7.50016V4.16683C16.6666 3.70659 16.2935 3.3335 15.8333 3.3335Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M7.50004 11.6665H4.16671C3.70647 11.6665 3.33337 12.0396 3.33337 12.4998V15.8332C3.33337 16.2934 3.70647 16.6665 4.16671 16.6665H7.50004C7.96028 16.6665 8.33337 16.2934 8.33337 15.8332V12.4998C8.33337 12.0396 7.96028 11.6665 7.50004 11.6665Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M15.8333 11.6665H12.5C12.0397 11.6665 11.6666 12.0396 11.6666 12.4998V15.8332C11.6666 16.2934 12.0397 16.6665 12.5 16.6665H15.8333C16.2935 16.6665 16.6666 16.2934 16.6666 15.8332V12.4998C16.6666 12.0396 16.2935 11.6665 15.8333 11.6665Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_5368_98092'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(SurveyModeIcon)
