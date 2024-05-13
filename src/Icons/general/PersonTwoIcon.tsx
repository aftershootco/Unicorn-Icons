import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const PersonTwoIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants

	const primary = (
		<svg viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<g clipPath='url(#clip0_11945_21252)'>
				<path
					d='M13.5 16.5C16.8137 16.5 19.5 13.8137 19.5 10.5C19.5 7.18629 16.8137 4.5 13.5 4.5C10.1863 4.5 7.5 7.18629 7.5 10.5C7.5 13.8137 10.1863 16.5 13.5 16.5Z'
					stroke={color}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M4.5 31.5V28.5C4.5 26.9087 5.13214 25.3826 6.25736 24.2574C7.38258 23.1321 8.9087 22.5 10.5 22.5H16.5C18.0913 22.5 19.6174 23.1321 20.7426 24.2574C21.8679 25.3826 22.5 26.9087 22.5 28.5V31.5'
					stroke={color}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M24 4.69482C25.2906 5.02528 26.4346 5.77588 27.2515 6.82829C28.0684 7.8807 28.5118 9.17507 28.5118 10.5073C28.5118 11.8396 28.0684 13.1339 27.2515 14.1864C26.4346 15.2388 25.2906 15.9894 24 16.3198'
					stroke={color}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M31.5 31.5001V28.5001C31.4924 27.1758 31.0469 25.8913 30.2329 24.8467C29.4189 23.8021 28.2822 23.0561 27 22.7251'
					stroke={color}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_11945_21252'>
					<rect width='36' height='36' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg viewBox='0 0 52 51' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<path
				d='M22.769 7.654c.734-2.692 2.61-6.037 7.343-6.037 0 0 13.055-4.162 13.055 9.138 0 11.178 2.53 12.402 5.222 15.094a46.179 46.179 0 0 1-10.444 1.224v1.306c0 1.305-.245 3.916 6.283 5.222C50.755 34.906 51 40.128 51 40.128H33.865'
				stroke={modifiedColor}
				stroke-miterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M30.455 42.608c-6.527-.897-6.527-3.263-6.527-4.569v-.734a11.912 11.912 0 0 0 3.426-5.712c1.959 0 2.448-4.16 2.448-4.732 0-.571-.163-2.937-1.06-3.182 3.263-11.423-6.528-16.319-15.014-10.444-3.59 0-4.732 5.222-3.426 10.444-.898 0-1.061 2.448-1.061 3.1 0 .653.49 4.733 2.448 4.733.652 2.366 2.447 4.324 3.998 5.711v.816c0 1.306-.49 3.754-7.099 4.57C1.98 43.425 1 49.788 1 49.788h35.9s.082-6.283-6.445-7.18Z'
				stroke={modifiedColor}
				stroke-miterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(PersonTwoIcon)
