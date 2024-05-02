import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary' | 'secondary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

const AlertTriangleIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	// variants
	const primary = (
		<svg
			width={size}
			height={(52 / 58) * size}
			viewBox='0 0 58 52'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: (52 / 58) * size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path d='M29 38V38.03M29 20V26V20Z' stroke={modifiedColor} stroke-width='3' stroke-linecap='round' stroke-linejoin='round' />
			<path
				d='M8.00155 50H50.0015C50.9805 49.9932 51.9428 49.7469 52.8047 49.2827C53.6666 48.8184 54.4018 48.1504 54.9462 47.3368C55.4906 46.5231 55.8276 45.5887 55.9279 44.6149C56.0282 43.6411 55.8887 42.6575 55.5215 41.75L34.2215 5.00005C33.7027 4.06224 32.9421 3.28054 32.0188 2.73621C31.0955 2.19187 30.0433 1.90479 28.9715 1.90479C27.8998 1.90479 26.8476 2.19187 25.9243 2.73621C25.001 3.28054 24.2404 4.06224 23.7215 5.00005L2.42155 41.75C2.06137 42.6368 1.91855 43.5968 2.005 44.55C2.09145 45.5031 2.40467 46.4218 2.9185 47.2293C3.43234 48.0367 4.13188 48.7095 4.95873 49.1915C5.78557 49.6736 6.71573 49.9508 7.67155 50'
				stroke={modifiedColor}
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)

	const secondary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 13 13'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			{...restProps}
			ref={forwardedRef}
		>
			<path
				d='M3.0328 9.7001H10.0327C10.1959 9.69896 10.3563 9.65791 10.4999 9.58054C10.6435 9.50317 10.7661 9.39183 10.8568 9.25623C10.9475 9.12062 11.0037 8.96488 11.0204 8.80258C11.0371 8.64029 11.0139 8.47637 10.9527 8.32512L7.40274 2.2002C7.31626 2.0439 7.1895 1.91362 7.03562 1.82289C6.88175 1.73217 6.70638 1.68433 6.52775 1.68433C6.34912 1.68433 6.17376 1.73217 6.01988 1.82289C5.86601 1.91362 5.73924 2.0439 5.65276 2.2002L2.10281 8.32512C2.04278 8.4729 2.01898 8.63291 2.03338 8.79177C2.04779 8.95063 2.1 9.10374 2.18563 9.23831C2.27127 9.37288 2.38786 9.48502 2.52567 9.56535C2.66347 9.64569 2.8185 9.69189 2.9778 9.7001'
				stroke={modifiedColor}
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M6.5332 7.70016V7.70516M6.5332 4.7002V5.70018V4.7002Z' stroke={modifiedColor} stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
	return <BaseIcon variants={{ primary, secondary }} variant={variant} />
})

export default React.memo(AlertTriangleIcon)
