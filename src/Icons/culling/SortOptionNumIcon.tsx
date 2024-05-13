import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'ascend' | 'descend'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
	inActive?: boolean
}

export const SortOptionNumIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'ascend',
		color = DEFAULT_ICON.COLOR,
		bgColor = DEFAULT_ICON.BG_COLOR,
		bgOpacity = DEFAULT_ICON.BG_OPACITY,
		size = DEFAULT_ICON.SIZE,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color
	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const ascend = (
		<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<rect width='24' height='24' rx='4' fill={bgColor} />
			<g clipPath='url(#clip0_11845_14525)'>
				<path d='M5.33398 14.5L7.83398 17L10.334 14.5' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
				<path d='M7.83398 7V17' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
				<path
					d='M16.1667 4.5C16.6087 4.5 17.0326 4.67559 17.3452 4.98816C17.6577 5.30072 17.8333 5.72464 17.8333 6.16667V8.66667C17.8333 9.10869 17.6577 9.53262 17.3452 9.84518C17.0326 10.1577 16.6087 10.3333 16.1667 10.3333C15.7246 10.3333 15.3007 10.1577 14.9882 9.84518C14.6756 9.53262 14.5 9.10869 14.5 8.66667V6.16667C14.5 5.72464 14.6756 5.30072 14.9882 4.98816C15.3007 4.67559 15.7246 4.5 16.1667 4.5V4.5Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M16.1667 16.9998C17.0871 16.9998 17.8333 16.2536 17.8333 15.3332C17.8333 14.4127 17.0871 13.6665 16.1667 13.6665C15.2462 13.6665 14.5 14.4127 14.5 15.3332C14.5 16.2536 15.2462 16.9998 16.1667 16.9998Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M17.8327 15.3335V17.8335C17.8327 18.2755 17.6571 18.6994 17.3445 19.012C17.032 19.3246 16.608 19.5002 16.166 19.5002H14.916'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_11845_14525'>
					<rect width='20' height='20' fill='white' transform='translate(2 2)' />
				</clipPath>
			</defs>
		</svg>
	)

	const descend = (
		<svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<rect width='24' height='24' rx='4' fill={bgColor} />
			<g clipPath='url(#clip0_11845_14530)'>
				<path d='M5.33398 14.5L7.83398 17L10.334 14.5' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
				<path d='M7.83398 7V17' stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' />
				<path
					d='M16.1667 13.6665C16.6087 13.6665 17.0326 13.8421 17.3452 14.1547C17.6577 14.4672 17.8333 14.8911 17.8333 15.3332V17.8332C17.8333 18.2752 17.6577 18.6991 17.3452 19.0117C17.0326 19.3242 16.6087 19.4998 16.1667 19.4998C15.7246 19.4998 15.3007 19.3242 14.9882 19.0117C14.6756 18.6991 14.5 18.2752 14.5 17.8332V15.3332C14.5 14.8911 14.6756 14.4672 14.9882 14.1547C15.3007 13.8421 15.7246 13.6665 16.1667 13.6665V13.6665Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M16.1667 7.83333C17.0871 7.83333 17.8333 7.08714 17.8333 6.16667C17.8333 5.24619 17.0871 4.5 16.1667 4.5C15.2462 4.5 14.5 5.24619 14.5 6.16667C14.5 7.08714 15.2462 7.83333 16.1667 7.83333Z'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M17.8327 6.1665V8.6665C17.8327 9.10853 17.6571 9.53245 17.3445 9.84501C17.032 10.1576 16.608 10.3332 16.166 10.3332H14.916'
					stroke={modifiedColor}
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_11845_14530'>
					<rect width='20' height='20' fill='white' transform='translate(2 2)' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ ascend, descend }} variant={variant} />
})

export default React.memo(SortOptionNumIcon)
