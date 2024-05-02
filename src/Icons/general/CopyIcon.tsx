import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary'

type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const CopyIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color
	// VARIANTS

	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<path
				d='M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Z'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)

	const secondary = (
		<svg
			width={(15 / 6) * size}
			height={size}
			viewBox='0 0 15 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: (15 / 6) * size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<path
				d='M12.5001 4.66602H5.83341C4.91294 4.66602 4.16675 5.41221 4.16675 6.33268V12.9993C4.16675 13.9198 4.91294 14.666 5.83341 14.666H12.5001C13.4206 14.666 14.1667 13.9198 14.1667 12.9993V6.33268C14.1667 5.41221 13.4206 4.66602 12.5001 4.66602Z'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M10.8333 4.66732V3.00065C10.8333 2.55862 10.6577 2.1347 10.3451 1.82214C10.0325 1.50958 9.60861 1.33398 9.16659 1.33398H2.49992C2.05789 1.33398 1.63397 1.50958 1.32141 1.82214C1.00885 2.1347 0.833252 2.55862 0.833252 3.00065V9.66732C0.833252 10.1093 1.00885 10.5333 1.32141 10.8458C1.63397 11.1584 2.05789 11.334 2.49992 11.334H4.16659'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)

	const tertiary = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			width={size}
			height={size}
			fill={modifiedColor}
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z' />
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary, tertiary }} variant={variant} />
})

export default CopyIcon
