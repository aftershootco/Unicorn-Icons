import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const ViewAllIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<path
				d='M2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H5.5C5.63261 2 5.75979 2.05268 5.85355 2.14645C5.94732 2.24021 6 2.36739 6 2.5C6 2.63261 5.94732 2.75979 5.85355 2.85355C5.75979 2.94732 5.63261 3 5.5 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V5.5C3 5.63261 2.94732 5.75979 2.85355 5.85355C2.75979 5.94732 2.63261 6 2.5 6C2.36739 6 2.24021 5.94732 2.14645 5.85355C2.05268 5.75979 2 5.63261 2 5.5V4ZM2 12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14H5.5C5.63261 14 5.75979 13.9473 5.85355 13.8536C5.94732 13.7598 6 13.6326 6 13.5C6 13.3674 5.94732 13.2402 5.85355 13.1464C5.75979 13.0527 5.63261 13 5.5 13H4C3.73478 13 3.48043 12.8946 3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12V10.5C3 10.3674 2.94732 10.2402 2.85355 10.1464C2.75979 10.0527 2.63261 10 2.5 10C2.36739 10 2.24021 10.0527 2.14645 10.1464C2.05268 10.2402 2 10.3674 2 10.5V12ZM12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4V5.5C14 5.63261 13.9473 5.75979 13.8536 5.85355C13.7598 5.94732 13.6326 6 13.5 6C13.3674 6 13.2402 5.94732 13.1464 5.85355C13.0527 5.75979 13 5.63261 13 5.5V4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3H10.5C10.3674 3 10.2402 2.94732 10.1464 2.85355C10.0527 2.75979 10 2.63261 10 2.5C10 2.36739 10.0527 2.24021 10.1464 2.14645C10.2402 2.05268 10.3674 2 10.5 2H12ZM14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14H10.5C10.3674 14 10.2402 13.9473 10.1464 13.8536C10.0527 13.7598 10 13.6326 10 13.5C10 13.3674 10.0527 13.2402 10.1464 13.1464C10.2402 13.0527 10.3674 13 10.5 13H12C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12V10.5C13 10.3674 13.0527 10.2402 13.1464 10.1464C13.2402 10.0527 13.3674 10 13.5 10C13.6326 10 13.7598 10.0527 13.8536 10.1464C13.9473 10.2402 14 10.3674 14 10.5V12ZM5.5 9C5.5 8.33696 5.76339 7.70107 6.23223 7.23223C6.70107 6.76339 7.33696 6.5 8 6.5C8.66304 6.5 9.29893 6.76339 9.76777 7.23223C10.2366 7.70107 10.5 8.33696 10.5 9C10.5 9.66304 10.2366 10.2989 9.76777 10.7678C9.29893 11.2366 8.66304 11.5 8 11.5C7.33696 11.5 6.70107 11.2366 6.23223 10.7678C5.76339 10.2989 5.5 9.66304 5.5 9ZM3.314 7.964C3.43706 8.0133 3.57467 8.01171 3.69656 7.95958C3.81845 7.90745 3.91465 7.80904 3.964 7.686L3.969 7.676L3.997 7.616C4.024 7.561 4.069 7.479 4.133 7.376C4.31178 7.09667 4.52701 6.84243 4.773 6.62C5.376 6.073 6.384 5.5 8 5.5C9.617 5.5 10.624 6.073 11.226 6.62C11.531 6.897 11.738 7.173 11.866 7.377C11.9271 7.47315 11.9822 7.57301 12.031 7.676C12.031 7.676 12.275 8.128 12.686 7.964C12.809 7.91465 12.9074 7.81845 12.9596 7.69656C13.0117 7.57467 13.0133 7.43706 12.964 7.314V7.312L12.962 7.308L12.957 7.298C12.9387 7.25423 12.9187 7.2112 12.897 7.169C12.8405 7.05698 12.7784 6.94785 12.711 6.842C12.4844 6.48661 12.2113 6.16308 11.899 5.88C11.125 5.177 9.882 4.5 7.999 4.5C6.117 4.5 4.874 5.177 4.101 5.88C3.78833 6.16299 3.5149 6.48652 3.288 6.842C3.19559 6.98815 3.1134 7.14051 3.042 7.298L3.038 7.308L3.036 7.313C2.9867 7.43606 2.98829 7.57467 3.04042 7.69656C3.09255 7.81845 3.19096 7.91465 3.314 7.964Z'
				fill={modifiedColor}
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ViewAllIcon)
