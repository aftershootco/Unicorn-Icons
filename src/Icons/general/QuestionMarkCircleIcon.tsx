import React from 'react'
import { IconProps } from '../../../types/Icons/types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	bgColor?: string
	bgOpacity?: number
	inActive?: boolean
}

export const QuestionMarkCircleIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke={modifiedColor} stroke-opacity='.5' />
			<path
				d='M15.447 23.432c0-.72.585-1.317 1.297-1.317.717 0 1.317.6 1.317 1.317 0 .701-.584 1.318-1.317 1.318-.729 0-1.297-.613-1.297-1.318Zm3.465-6.547c-.582.455-.905.862-1.071 1.315-.163.443-.166.905-.166 1.427 0 .15-.038.28-.145.378-.11.101-.339.206-.805.206-.4 0-.58-.075-.682-.196-.113-.134-.188-.393-.188-.917 0-.836.184-1.441.43-1.893.247-.453.562-.766.846-1.01.117-.1.247-.2.388-.308l.17-.13c.203-.159.418-.333.613-.527.391-.388.728-.88.728-1.526 0-.552-.245-.974-.642-1.248-.386-.268-.899-.386-1.44-.386-.55 0-.955.104-1.267.276-.313.172-.511.4-.665.61a8.86 8.86 0 0 0-.136.197 8.516 8.516 0 0 1-.066.096c-.061.088-.116.16-.173.218a.534.534 0 0 1-.42.17c-.224 0-.472-.075-.66-.227a.837.837 0 0 1-.311-.683c0-.918 1.103-2.477 3.76-2.477 2.524 0 4.085 1.384 4.085 3.108 0 .88-.398 1.65-.88 2.265a7.467 7.467 0 0 1-1.303 1.262Z'
				fill={modifiedColor}
				stroke={modifiedColor}
				stroke-width='.5'
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(QuestionMarkCircleIcon)
