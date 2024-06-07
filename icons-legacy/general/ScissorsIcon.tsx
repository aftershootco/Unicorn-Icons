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

export const ScissorsIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, color = DEFAULT_ICON.COLOR, size, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			viewBox='0 0 20 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<mask
				id='mask0_2964_1117'
				style={{
					maskType: 'alpha',
				}}
				maskUnits='userSpaceOnUse'
				x={0}
				y={0}
				width={20}
				height={18}
			>
				<path
					d='M12.9165 6.86313C14.2712 8.33219 16.4639 8.53197 18.0441 7.33031C19.6243 6.12865 20.1033 3.89719 19.1642 2.11214C18.225 0.327103 16.1583 -0.459457 14.3311 0.272812C12.5039 1.00508 11.4815 3.02971 11.9401 5.00731H10.9638C10.7076 5.00843 10.4621 5.11405 10.2803 5.3014L9.82139 5.77803L9.3625 5.3014C9.18064 5.11405 8.93518 5.00843 8.67904 5.00731H7.70267C8.16133 3.02971 7.13888 1.00508 5.31171 0.272812C3.48454 -0.459457 1.41774 0.327103 0.478611 2.11214C-0.460522 3.89719 0.0184555 6.12865 1.59867 7.33031C3.17889 8.53197 5.37163 8.33219 6.72629 6.86313L7.75149 7.92795L2.86963 12.9985C2.32015 13.5685 2.0111 14.3418 2.01042 15.1484V16.6696C2.01042 16.9496 2.22898 17.1767 2.4986 17.1767H2.78175C2.91413 17.1786 3.04139 17.1236 3.13325 17.0245L12.9165 6.86313ZM2.58648 5.42309C1.92954 4.73668 1.83108 3.6638 2.35133 2.86084C2.87158 2.05788 3.86556 1.74859 4.72517 2.12219C5.58478 2.49578 6.07048 3.44817 5.88511 4.39667C5.69975 5.34518 4.89498 6.0255 3.96316 6.02144C3.4461 6.01916 2.95101 5.80398 2.58648 5.42309ZM17.0563 2.5633C17.6136 3.05898 17.8563 3.83726 17.6847 4.57818C17.5131 5.31909 16.9562 5.89757 16.2428 6.0758C15.5295 6.25402 14.7802 6.0019 14.3029 5.42309C13.7457 4.92742 13.5029 4.14913 13.6745 3.40822C13.8461 2.66731 14.4031 2.08882 15.1164 1.9106C15.8298 1.73237 16.5791 1.98449 17.0563 2.5633ZM16.5095 17.0245C16.6014 17.1236 16.7287 17.1786 16.861 17.1767H17.1442C17.4138 17.1767 17.6324 16.9496 17.6324 16.6696V15.1484C17.6317 14.3418 17.3226 13.5685 16.7732 12.9985L13.102 9.17531L11.0321 11.3252L16.5095 17.0245Z'
					fill={modifiedColor}
				/>
			</mask>
			<g mask='url(#mask0_2964_1117)'>
				<rect x={-5.35718} y={-9.125} width={27.0089} height={28.6786} rx={5} fill={modifiedColor} />
			</g>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ScissorsIcon)
