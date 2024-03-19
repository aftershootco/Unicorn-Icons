import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	inActive?: boolean
}

export const AlbumIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<g clip-path='url(#clip0_3781_6471)'>
				<path
					d='M18.3335 5.05908V15.0591C18.3335 16.4398 17.2142 17.5591 15.8335 17.5591H5.8335'
					stroke='#777777'
					stroke-width='1.125'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M11.6665 5.05908H11.6748' stroke='#777777' stroke-width='1.125' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M13.3333 1.72559H5C3.61929 1.72559 2.5 2.84487 2.5 4.22559V12.5589C2.5 13.9396 3.61929 15.0589 5 15.0589H13.3333C14.714 15.0589 15.8333 13.9396 15.8333 12.5589V4.22559C15.8333 2.84487 14.714 1.72559 13.3333 1.72559Z'
					stroke='#777777'
					stroke-width='1.125'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M2.5 10.8925L5.83333 7.5592C6.21338 7.1935 6.64449 7.00098 7.08333 7.00098C7.52217 7.00098 7.95329 7.1935 8.33333 7.5592L12.5 11.7259'
					stroke='#777777'
					stroke-width='1.125'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M10.8335 10.059L11.6668 9.22571C12.0469 8.86001 12.478 8.66748 12.9168 8.66748C13.3557 8.66748 13.7868 8.86001 14.1668 9.22571L15.8335 10.8924'
					stroke='#777777'
					stroke-width='1.125'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_3781_6471'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(AlbumIcon)