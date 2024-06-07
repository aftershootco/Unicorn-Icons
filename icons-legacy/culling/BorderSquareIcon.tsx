import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const BorderSquareIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color = DEFAULT_ICON.COLOR, size, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6 text-white', inActive && 'text-[#777777]', className && className)}
		>
			<path
				d='M13.9987 1.33325H3.9987C2.52594 1.33325 1.33203 2.52716 1.33203 3.99992V13.9999C1.33203 15.4727 2.52594 16.6666 3.9987 16.6666H13.9987C15.4715 16.6666 16.6654 15.4727 16.6654 13.9999V3.99992C16.6654 2.52716 15.4715 1.33325 13.9987 1.33325Z'
				stroke='currentColor'
				stroke-width='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(BorderSquareIcon)
