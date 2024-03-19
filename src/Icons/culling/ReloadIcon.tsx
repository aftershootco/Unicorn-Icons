import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

const ReloadIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 21 21'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<g clip-path='url(#clip0_13276_22786)'>
				<path
					d='M16.5239 9.93756C16.5619 10.2111 16.8144 10.402 17.0879 10.364C17.3615 10.326 17.5524 10.0734 17.5144 9.79991L16.5239 9.93756ZM3.64091 8.00979C3.53471 8.26469 3.65527 8.55742 3.91018 8.66362C4.16508 8.76981 4.45781 8.64925 4.56401 8.39435L3.64091 8.00979ZM4.18579 4.86873C4.18579 4.59259 3.96193 4.36873 3.68579 4.36873C3.40965 4.36873 3.18579 4.59259 3.18579 4.86873H4.18579ZM3.68579 8.20207H3.18579C3.18579 8.47821 3.40965 8.70207 3.68579 8.70207V8.20207ZM7.01912 8.70207C7.29527 8.70207 7.51912 8.47821 7.51912 8.20207C7.51912 7.92592 7.29527 7.70207 7.01912 7.70207V8.70207ZM4.18103 11.4666C4.14302 11.1931 3.89048 11.0022 3.61697 11.0402C3.34345 11.0782 3.15254 11.3308 3.19055 11.6043L4.18103 11.4666ZM17.064 13.3944C17.1702 13.1395 17.0496 12.8468 16.7947 12.7406C16.5398 12.6344 16.2471 12.7549 16.1409 13.0098L17.064 13.3944ZM16.5191 16.5354C16.5191 16.8116 16.743 17.0354 17.0191 17.0354C17.2953 17.0354 17.5191 16.8116 17.5191 16.5354H16.5191ZM17.0191 13.2021H17.5191C17.5191 12.926 17.2953 12.7021 17.0191 12.7021V13.2021ZM13.6858 12.7021C13.4096 12.7021 13.1858 12.926 13.1858 13.2021C13.1858 13.4782 13.4096 13.7021 13.6858 13.7021V12.7021ZM17.5144 9.79991C17.2955 8.2248 16.5648 6.76534 15.4348 5.64637L14.7312 6.35692C15.7053 7.32155 16.3352 8.5797 16.5239 9.93756L17.5144 9.79991ZM15.4348 5.64637C14.3049 4.5274 12.8383 3.81098 11.2612 3.60747L11.1332 4.59925C12.4928 4.77469 13.7571 5.39229 14.7312 6.35692L15.4348 5.64637ZM11.2612 3.60747C9.68399 3.40396 8.08366 3.72466 6.70667 4.52016L7.20691 5.38605C8.39396 4.70027 9.77356 4.42381 11.1332 4.59925L11.2612 3.60747ZM6.70667 4.52016C5.32969 5.31566 4.25246 6.54183 3.64091 8.00979L4.56401 8.39435C5.09121 7.12887 6.01986 6.07182 7.20691 5.38605L6.70667 4.52016ZM3.18579 4.86873V8.20207H4.18579V4.86873H3.18579ZM3.68579 8.70207H7.01912V7.70207H3.68579V8.70207ZM3.19055 11.6043C3.40945 13.1794 4.14015 14.6388 5.2701 15.7578L5.97375 15.0473C4.99965 14.0826 4.36973 12.8245 4.18103 11.4666L3.19055 11.6043ZM5.2701 15.7578C6.40006 16.8768 7.86657 17.5932 9.44375 17.7967L9.57172 16.8049C8.21208 16.6295 6.94785 16.0119 5.97375 15.0473L5.2701 15.7578ZM9.44375 17.7967C11.0209 18.0002 12.6213 17.6795 13.9982 16.884L13.498 16.0181C12.311 16.7039 10.9314 16.9804 9.57172 16.8049L9.44375 17.7967ZM13.9982 16.884C15.3752 16.0885 16.4525 14.8623 17.064 13.3944L16.1409 13.0098C15.6137 14.2753 14.6851 15.3323 13.498 16.0181L13.9982 16.884ZM17.5191 16.5354V13.2021H16.5191V16.5354H17.5191ZM17.0191 12.7021H13.6858V13.7021H17.0191V12.7021Z'
					fill={modifiedColor}
				/>
			</g>
			<defs>
				<clipPath id='clip0_13276_22786'>
					<rect x='0.352539' y='0.702148' width='20' height='20' rx='10' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg
			viewBox='0 0 10 10'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M8.50476 4.5688C8.54277 4.84231 8.79531 5.03323 9.06882 4.99522C9.34234 4.95721 9.53325 4.70466 9.49524 4.43115L8.50476 4.5688ZM0.78845 3.30769C0.682257 3.5626 0.802812 3.85533 1.05772 3.96152C1.31263 4.06772 1.60536 3.94716 1.71155 3.69226L0.78845 3.30769ZM1.5 1.49998C1.5 1.22383 1.27614 0.999975 1 0.999975C0.723858 0.999975 0.5 1.22383 0.5 1.49998H1.5ZM1 3.49998H0.5C0.5 3.77612 0.723858 3.99998 1 3.99998V3.49998ZM3 3.99998C3.27614 3.99998 3.5 3.77612 3.5 3.49998C3.5 3.22383 3.27614 2.99998 3 2.99998V3.99998ZM1.49524 5.43118C1.45723 5.15766 1.20469 4.96675 0.931176 5.00476C0.657662 5.04277 0.466749 5.29531 0.504759 5.56882L1.49524 5.43118ZM9.21155 6.69228C9.31774 6.43737 9.19719 6.14464 8.94228 6.03845C8.68737 5.93226 8.39464 6.05281 8.28845 6.30772L9.21155 6.69228ZM8.5 8.5C8.5 8.77614 8.72386 9 9 9C9.27614 9 9.5 8.77614 9.5 8.5H8.5ZM9 6.5H9.5C9.5 6.22386 9.27614 6 9 6V6.5ZM7 6C6.72386 6 6.5 6.22386 6.5 6.5C6.5 6.77614 6.72386 7 7 7V6ZM9.49524 4.43115C9.35786 3.44263 8.89928 2.5267 8.19014 1.82445L7.4865 2.535C8.03978 3.08291 8.39758 3.79754 8.50476 4.5688L9.49524 4.43115ZM8.19014 1.82445C7.481 1.1222 6.56063 0.67258 5.57082 0.544863L5.44285 1.53664C6.21512 1.63629 6.93321 1.98709 7.4865 2.535L8.19014 1.82445ZM5.57082 0.544863C4.58101 0.417145 3.57666 0.618409 2.71248 1.11765L3.21272 1.98354C3.88696 1.59402 4.67058 1.43699 5.44285 1.53664L5.57082 0.544863ZM2.71248 1.11765C1.84831 1.6169 1.17225 2.38642 0.78845 3.30769L1.71155 3.69226C2.011 2.97346 2.53847 2.37306 3.21272 1.98354L2.71248 1.11765ZM0.5 1.49998V3.49998H1.5V1.49998H0.5ZM1 3.99998H3V2.99998H1V3.99998ZM0.504759 5.56882C0.642135 6.55734 1.10071 7.47328 1.80986 8.17553L2.5135 7.46498C1.96022 6.91707 1.60242 6.20244 1.49524 5.43118L0.504759 5.56882ZM1.80986 8.17553C2.519 8.87778 3.43937 9.32739 4.42918 9.45511L4.55715 8.46334C3.78488 8.36369 3.06679 8.01289 2.5135 7.46498L1.80986 8.17553ZM4.42918 9.45511C5.41899 9.58283 6.42334 9.38157 7.28752 8.88232L6.78728 8.01643C6.11304 8.40595 5.32942 8.56298 4.55715 8.46334L4.42918 9.45511ZM7.28752 8.88232C8.15169 8.38308 8.82775 7.61355 9.21155 6.69228L8.28845 6.30772C7.989 7.02651 7.46153 7.62691 6.78728 8.01643L7.28752 8.88232ZM9.5 8.5V6.5H8.5V8.5H9.5ZM9 6H7V7H9V6Z'
				fill={modifiedColor}
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(ReloadIcon)