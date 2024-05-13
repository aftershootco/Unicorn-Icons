import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
}

export const AftershootWhiteIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = DEFAULT_ICON.SIZE, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 91 88' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} ref={forwardedRef} {...restProps}>
			<path
				d='M56.5614 72.696C53.8564 72.6593 51.1676 72.2696 48.562 71.5366C43.6735 70.1898 38.8386 67.7662 35.9546 65.2124C31.104 60.9211 29.0521 54.8033 30.8518 49.991C31.9392 47.0783 35.3526 42.1961 45.9807 42.1961H61.6327C61.1374 40.2857 60.5462 38.4018 59.8614 36.5517C56.0571 26.3395 50.554 21.162 43.5033 21.162C39.1695 21.162 35.548 23.4395 32.4309 28.1247C29.714 32.2127 27.4982 38.0033 25.8498 45.3344C22.9722 58.1417 22.8745 71.1872 22.8745 71.3174L17.0625 71.292C17.0625 70.7362 17.157 57.5477 20.1639 44.1242C21.9668 36.0689 24.463 29.6017 27.5802 24.8974C31.8005 18.5446 37.1586 15.3047 43.5033 15.3047C53.0912 15.3047 60.6273 21.9402 65.3015 34.4934C66.2266 37.012 67.0012 39.5842 67.6212 42.1961H77.7292V48.0534H68.8095C69.4985 52.0495 69.8757 56.0938 69.9378 60.1492C69.9378 65.4633 67.6118 69.4497 63.3883 71.3778C61.2482 72.3498 58.8591 72.696 56.5614 72.696ZM45.9901 48.0534C40.7738 48.0534 37.2374 49.5114 36.2887 52.0557C35.34 54.6 36.7899 58.1576 39.7841 60.8099C42.0188 62.7824 46.0626 64.7772 50.0938 65.8921C54.5505 67.1182 58.5218 67.1627 60.9897 66.0478C62.3356 65.4347 64.1258 64.1419 64.1258 60.1555C64.0461 56.0942 63.6339 52.0464 62.8934 48.0534H45.9901Z'
				fill={modifiedColor}
			/>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(AftershootWhiteIcon)
