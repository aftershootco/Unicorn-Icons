import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const GlobalIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<g clipPath='url(#clip0_1703_84003)'>
				<path
					d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M2.99951 7.5H16.9995' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
				<path d='M2.99951 12.5H16.9995' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
				<path
					d='M9.58322 2.5C8.17934 4.74968 7.43506 7.34822 7.43506 10C7.43506 12.6518 8.17934 15.2503 9.58322 17.5'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M10.4165 2.5C11.8204 4.74968 12.5647 7.34822 12.5647 10C12.5647 12.6518 11.8204 15.2503 10.4165 17.5'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1703_84003'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<g clipPath='url(#clip0_1324_159986)'>
				<path
					d='M12 21.8125C16.9706 21.8125 21 17.7831 21 12.8125C21 7.84194 16.9706 3.8125 12 3.8125C7.02944 3.8125 3 7.84194 3 12.8125C3 17.7831 7.02944 21.8125 12 21.8125Z'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M3.59961 9.8125H20.3996' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M3.59961 15.8125H20.3996' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
				<path
					d='M11.4997 3.8125C9.81501 6.51211 8.92188 9.63037 8.92188 12.8125C8.92188 15.9946 9.81501 19.1129 11.4997 21.8125'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12.5 3.8125C14.1847 6.51211 15.0778 9.63037 15.0778 12.8125C15.0778 15.9946 14.1847 19.1129 12.5 21.8125'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1324_159986'>
					<rect width='24' height='24' fill='white' transform='translate(0 0.8125)' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(GlobalIcon)
