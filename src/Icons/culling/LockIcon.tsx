import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type Props = IconProps & {
	inActive?: boolean
}

export const LockIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	// props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<g clipPath='url(#clip0_14097_44372)'>
				<path
					d='M14.166 9.16602H5.83268C4.91221 9.16602 4.16602 9.91221 4.16602 10.8327V15.8327C4.16602 16.7532 4.91221 17.4993 5.83268 17.4993H14.166C15.0865 17.4993 15.8327 16.7532 15.8327 15.8327V10.8327C15.8327 9.91221 15.0865 9.16602 14.166 9.16602Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M9.99935 14.1667C10.4596 14.1667 10.8327 13.7936 10.8327 13.3333C10.8327 12.8731 10.4596 12.5 9.99935 12.5C9.53911 12.5 9.16602 12.8731 9.16602 13.3333C9.16602 13.7936 9.53911 14.1667 9.99935 14.1667Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M6.66602 9.16667V5.83333C6.66602 4.94928 7.0172 4.10143 7.64233 3.47631C8.26745 2.85119 9.11529 2.5 9.99935 2.5C10.8834 2.5 11.7313 2.85119 12.3564 3.47631C12.9815 4.10143 13.3327 4.94928 13.3327 5.83333V9.16667'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_14097_44372'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<g clipPath='url(#clip0_1772_46858)'>
				<path
					d='M8.50004 5.5H3.50001C2.94772 5.5 2.5 5.94772 2.5 6.50001V9.50003C2.5 10.0523 2.94772 10.5 3.50001 10.5H8.50004C9.05233 10.5 9.50005 10.0523 9.50005 9.50003V6.50001C9.50005 5.94772 9.05233 5.5 8.50004 5.5Z'
					stroke={modifiedColor}
					stroke-width='1.00001'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M6 8.50001C6.27615 8.50001 6.50001 8.27615 6.50001 8C6.50001 7.72386 6.27615 7.5 6 7.5C5.72386 7.5 5.5 7.72386 5.5 8C5.5 8.27615 5.72386 8.50001 6 8.50001Z'
					stroke={modifiedColor}
					stroke-width='1.00001'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M4 5.50003V3.50001C4 2.96958 4.21072 2.46087 4.58579 2.08579C4.96087 1.71072 5.46958 1.5 6.00001 1.5C6.53045 1.5 7.03916 1.71072 7.41424 2.08579C7.78931 2.46087 8.00003 2.96958 8.00003 3.50001V5.50003'
					stroke={modifiedColor}
					stroke-width='1.00001'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_1772_46858'>
					<rect width='12.0001' height='12.0001' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const tertiary = (
		<svg viewBox='0 0 23 27' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<path
				d='M19.345 11.998H2.957c-1.293 0-2.341 1.115-2.341 2.49v8.716c0 1.375 1.048 2.49 2.34 2.49h16.389c1.293 0 2.341-1.115 2.341-2.49v-8.716c0-1.375-1.048-2.49-2.341-2.49Z'
				stroke={modifiedColor}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M4.83 11.998V7.316c0-1.553.666-3.041 1.851-4.139 1.186-1.097 2.794-1.714 4.47-1.714 1.677 0 3.284.617 4.47 1.714 1.185 1.098 1.851 2.586 1.851 4.139v4.682'
				stroke={modifiedColor}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary, tertiary }} variant={variant} />
})

export default React.memo(LockIcon)
