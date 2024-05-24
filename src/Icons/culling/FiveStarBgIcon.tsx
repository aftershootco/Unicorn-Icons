import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'
import { cn } from '../../utils/cn'

type IconVariant = 'primary' | 'secondary' | 'tertiary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
	inActive?: boolean
}

export const FiveStarBgIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const {
		variant = 'primary',
		className,

		bgColor = DEFAULT_ICON.BG_COLOR,
		bgOpacity = DEFAULT_ICON.BG_OPACITY,
		color = DEFAULT_ICON.COLOR,
		size,
		inActive = false,
		...restProps
	} = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<rect width='32' height='32' rx='6' fill={bgColor} />
			<g clipPath='url(#clip0_184_15943)'>
				<path
					d='M15.9998 21.75L9.82784 24.995L11.0068 18.122L6.00684 13.255L12.9068 12.255L15.9928 6.00195L19.0788 12.255L25.9788 13.255L20.9788 18.122L22.1578 24.995L15.9998 21.75Z'
					fill={modifiedColor}
				/>
				<path
					d='M15.9926 20.9444C15.1126 20.9444 14.4086 20.7044 13.8806 20.2244C13.3606 19.7364 13.1006 19.0764 13.1006 18.2444H14.6126C14.6126 18.7084 14.7366 19.0764 14.9846 19.3484C15.2326 19.6124 15.5686 19.7444 15.9926 19.7444C16.4086 19.7444 16.7366 19.6044 16.9766 19.3244C17.2246 19.0444 17.3486 18.6404 17.3486 18.1124C17.3486 17.6324 17.2286 17.2644 16.9886 17.0084C16.7486 16.7524 16.4286 16.6244 16.0286 16.6244C15.5006 16.6244 15.0806 16.8524 14.7686 17.3084L13.3766 17.1284L13.7126 12.5684H18.4406V13.9004H14.9846L14.8526 15.9284C15.3086 15.6084 15.8326 15.4484 16.4246 15.4484C17.1366 15.4484 17.7206 15.6764 18.1766 16.1324C18.6326 16.5884 18.8606 17.2484 18.8606 18.1124C18.8606 19.0084 18.6046 19.7044 18.0926 20.2004C17.5806 20.6964 16.8806 20.9444 15.9926 20.9444Z'
					fill={bgColor}
				/>
			</g>
			<defs>
				<clipPath id='clip0_184_15943'>
					<rect width='24' height='24' fill='white' transform='translate(4 4)' />
				</clipPath>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(FiveStarBgIcon)
