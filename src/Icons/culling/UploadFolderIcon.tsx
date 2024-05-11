import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const UploadFolderIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 24 21' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<path
				d='M3.83333 1.66669H8.5L12 5.16669H20.1667C20.7855 5.16669 21.379 5.41252 21.8166 5.8501C22.2542 6.28769 22.5 6.88118 22.5 7.50002V16.8334C22.5 17.4522 22.2542 18.0457 21.8166 18.4833C21.379 18.9209 20.7855 19.1667 20.1667 19.1667H3.83333C3.21449 19.1667 2.621 18.9209 2.18342 18.4833C1.74583 18.0457 1.5 17.4522 1.5 16.8334V4.00002C1.5 3.38118 1.74583 2.78769 2.18342 2.3501C2.621 1.91252 3.21449 1.66669 3.83333 1.66669'
				stroke={modifiedColor}
				stroke-width='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path d='M12 15.6667V9.83335' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
			<path d='M8.5 13.3334L12 9.83337L15.5 13.3334' stroke={modifiedColor} stroke-width='2' strokeLinecap='round' strokeLinejoin='round' />
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(UploadFolderIcon)
