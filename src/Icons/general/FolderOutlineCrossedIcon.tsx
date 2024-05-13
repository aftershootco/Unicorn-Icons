import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const FolderOutlineCrossedIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 51 50' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<path d='M1.5 1L49.5 49' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
			<path
				d='M14.8333 3.66602H17.5L25.5 11.666H44.1667C45.5812 11.666 46.9377 12.2279 47.9379 13.2281C48.9381 14.2283 49.5 15.5849 49.5 16.9993V38.3327M44.1667 43.666H6.83333C5.41885 43.666 4.06229 43.1041 3.0621 42.1039C2.0619 41.1037 1.5 39.7472 1.5 38.3327V8.99935C1.49977 7.97531 1.79436 6.97286 2.34857 6.11175C2.90278 5.25065 3.69318 4.5673 4.62533 4.14335L44.1667 43.666Z'
				stroke={modifiedColor}
				stroke-width='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(FolderOutlineCrossedIcon)
