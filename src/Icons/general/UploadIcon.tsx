import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const UploadIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	// props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 15 18' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<g clipPath='url(#clip0_13900_1702)'>
				<path
					d='M1.14288 12.375V13.9821C1.14288 14.4084 1.31221 14.8172 1.6136 15.1186C1.915 15.42 2.32379 15.5893 2.75003 15.5893H12.3929C12.8191 15.5893 13.2279 15.42 13.5293 15.1186C13.8307 14.8172 14 14.4084 14 13.9821V12.375'
					stroke={modifiedColor}
					strokeLinejoin='round'
				/>
				<path d='M3.55359 5.94657L7.57145 1.92871L11.5893 5.94657' stroke={modifiedColor} strokeLinejoin='round' />
				<path d='M7.57141 1.92871V11.5716' stroke={modifiedColor} strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_13900_1702'>
					<rect width='14.1429' height='18' fill='white' transform='translate(0.5)' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg viewBox='0 0 13 16' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<path
				d='M1 8v5.6A1.4 1.4 0 0 0 2.4 15h8.4a1.4 1.4 0 0 0 1.4-1.4V8M9.4 3.8 6.6 1 3.8 3.8M6.6 1v9.1'
				stroke={modifiedColor}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(UploadIcon)
