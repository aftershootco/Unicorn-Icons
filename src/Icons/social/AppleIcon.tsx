import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

export const Apple = React.forwardRef<HTMLSpanElement, IconProps>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, ...restProps } = props

	// variants
	const primary = (
		<svg width={(17 / 20) * size} height={size} viewBox='0 0 17 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M13.934 10.57c-.01-1.64.727-2.876 2.215-3.787-.832-1.201-2.09-1.863-3.75-1.99-1.572-.125-3.29.923-3.92.923-.665 0-2.187-.88-3.384-.88C2.625 4.875 0 6.822 0 10.783c0 1.17.212 2.38.637 3.625.567 1.64 2.613 5.656 4.747 5.591 1.116-.026 1.905-.798 3.357-.798 1.41 0 2.139.798 3.383.798 2.153-.031 4.004-3.682 4.543-5.326-2.888-1.373-2.733-4.02-2.733-4.104Zm-2.506-7.332C12.638 1.79 12.528.474 12.492 0c-1.069.062-2.304.733-3.007 1.558-.775.884-1.23 1.978-1.133 3.211 1.154.089 2.208-.51 3.076-1.531Z'
				fill={color}
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef} />
})

export default React.memo(Apple)
