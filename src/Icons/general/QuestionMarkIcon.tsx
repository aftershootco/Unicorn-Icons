import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const QuestionMarkIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	// props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color
	// variants

	const primary = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			fill='none'
			viewBox='0 0 24 24'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<g stroke={modifiedColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} clipPath='url(#a)'>
				<path d='M8 8c0-.796.369-1.559 1.025-2.121C9.681 5.316 10.572 5 11.5 5h1c.928 0 1.819.316 2.475.879C15.63 6.44 16 7.204 16 8a3 3 0 0 1-2 3c-.614.288-1.14.833-1.501 1.555A5.04 5.04 0 0 0 12 15M12 19v.01' />
			</g>
			<defs>
				<clipPath id='a'>
					<path fill='#fff' d='M0 0h24v24H0z' />
				</clipPath>
			</defs>
		</svg>
	)

	const secondary = (
		<svg
			width={(10 / 14) * size}
			height={size}
			viewBox='0 0 10 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: (10 / 14) * size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<path
				d='M1.66602 3.66666C1.66602 3.00362 1.97331 2.36773 2.52029 1.89889C3.06727 1.43005 3.80913 1.16666 4.58268 1.16666H5.41602C6.18956 1.16666 6.93143 1.43005 7.47841 1.89889C8.02539 2.36773 8.33268 3.00362 8.33268 3.66666C8.36337 4.2077 8.21742 4.74407 7.91682 5.19497C7.61622 5.64587 7.17724 5.98689 6.66602 6.16666C6.15479 6.40635 5.71581 6.86104 5.41521 7.46224C5.11461 8.06344 4.96866 8.7786 4.99935 9.49999'
				stroke={modifiedColor}
				stroke-width='2'
				stroke-linecap='square'
				stroke-linejoin='round'
			/>
			<path d='M5 12.8333V12.8417' stroke={modifiedColor} stroke-width='2' stroke-linecap='square' stroke-linejoin='bevel' />
		</svg>
	)

	const tertiary = (
		<svg
			width={size}
			height={size}
			viewBox='0 0 35 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ width: size, height: size }}
			ref={forwardedRef}
			{...restProps}
		>
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke={modifiedColor} stroke-opacity='.3' />
			<path
				d='M15.447 23.432c0-.72.585-1.317 1.297-1.317.717 0 1.317.6 1.317 1.317 0 .701-.584 1.318-1.317 1.318-.729 0-1.297-.613-1.297-1.318Zm3.465-6.547c-.582.455-.905.862-1.071 1.315-.163.443-.166.905-.166 1.427 0 .15-.038.28-.145.378-.11.101-.339.206-.805.206-.4 0-.58-.075-.682-.196-.113-.134-.188-.393-.188-.917 0-.836.184-1.441.43-1.893.247-.453.562-.766.846-1.01.117-.1.247-.2.388-.308l.17-.13c.203-.159.418-.333.613-.527.391-.388.728-.88.728-1.526 0-.552-.245-.974-.642-1.248-.386-.268-.899-.386-1.44-.386-.55 0-.955.104-1.267.276-.313.172-.511.4-.665.61a8.86 8.86 0 0 0-.136.197 8.516 8.516 0 0 1-.066.096c-.061.088-.116.16-.173.218a.534.534 0 0 1-.42.17c-.224 0-.472-.075-.66-.227a.837.837 0 0 1-.311-.683c0-.918 1.103-2.477 3.76-2.477 2.524 0 4.085 1.384 4.085 3.108 0 .88-.398 1.65-.88 2.265a7.467 7.467 0 0 1-1.303 1.262Z'
				fill={modifiedColor}
				stroke='#262626'
				stroke-width='.5'
			/>
		</svg>
	)

	return <BaseIcon variants={{ primary, secondary, tertiary }} variant={variant} />
})

export default React.memo(QuestionMarkIcon)
