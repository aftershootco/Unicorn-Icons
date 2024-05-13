import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const StorageCrossedIcon = React.forwardRef<SVGSVGElement, IconProps>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<g clipPath='url(#clip0_14619_11844)'>
				<path
					d='M34.6214 23.9413C45.1681 23.456 53.3334 20.0853 53.3334 16C53.3334 11.5813 43.7814 8 32.0001 8C27.5707 8 23.4561 8.50667 20.0454 9.37333M12.6241 12.648C11.3681 13.6667 10.6667 14.8027 10.6667 16C10.6667 19.2533 15.8507 22.056 23.2907 23.3067'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M10.6667 16V32C10.6667 36.4187 20.2187 40 32.0001 40C34.6294 40 37.1467 39.8213 39.4721 39.4933M47.9707 37.3067C51.3067 35.8933 53.3334 34.032 53.3334 32V16'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M10.6667 32V48C10.6667 52.4187 20.2187 56 32.0001 56C40.5787 56 47.9761 54.1013 51.3627 51.36M53.3334 42.6667V32'
					stroke={modifiedColor}
					stroke-width='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M8 8L56 56' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_14619_11844'>
					<rect width='64' height='64' rx='32' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(StorageCrossedIcon)
