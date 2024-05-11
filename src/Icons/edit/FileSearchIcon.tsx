import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const FileSearchIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<g clipPath='url(#clip0_4270_126387)'>
				<path
					d='M42 9V21C42 21.7956 42.3161 22.5587 42.8787 23.1213C43.4413 23.6839 44.2044 24 45 24H57'
					stroke={modifiedColor}
					stroke-width='3'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M36 63H21C19.4087 63 17.8826 62.3679 16.7574 61.2426C15.6321 60.1174 15 58.5913 15 57V15C15 13.4087 15.6321 11.8826 16.7574 10.7574C17.8826 9.63214 19.4087 9 21 9H42L57 24V37.5'
					stroke={modifiedColor}
					stroke-width='3'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M49.5 60C53.6421 60 57 56.6421 57 52.5C57 48.3579 53.6421 45 49.5 45C45.3579 45 42 48.3579 42 52.5C42 56.6421 45.3579 60 49.5 60Z'
					stroke={modifiedColor}
					stroke-width='3'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M55.5 58.5L63 66' stroke={modifiedColor} stroke-width='3' strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_4270_126387'>
					<rect width='72' height='72' rx='36' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(FileSearchIcon)
