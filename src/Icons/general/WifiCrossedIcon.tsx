import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const WifiCrossedIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<g clipPath='url(#clip0_1324_161626)'>
				<path d='M36 54H36.03' stroke={modifiedColor} stroke-width='3' strokeLinecap='round' strokeLinejoin='round' />
				<path
					d='M27.5156 45.5164C29.766 43.2667 32.8177 42.0029 35.9996 42.0029C39.1816 42.0029 42.2333 43.2667 44.4836 45.5164'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M43.1093 31.0734C46.8373 32.2375 50.223 34.2976 52.9703 37.0734M19.0283 37.0284C22.2096 33.8381 26.2282 31.6125 30.6203 30.6084L19.0283 37.0284Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M30.4789 18.4202C36.0742 17.5527 41.7952 18.0171 47.1773 19.7758C52.5594 21.5346 57.4507 24.538 61.4539 28.5422M10.5439 28.5452C13.6143 25.4685 17.2164 22.9733 21.1759 21.1802L10.5439 28.5452Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M9 9L63 63' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_1324_161626'>
					<rect width='72' height='72' rx='36' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(WifiCrossedIcon)
