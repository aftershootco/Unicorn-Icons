import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import DEFAULT_ICON from '../../constant'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant'> & {
	variant?: IconVariant
	inActive?: boolean
}

export const AftershootEditIcon = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', color = DEFAULT_ICON.COLOR, size = 150, inActive = false, ...restProps } = props

	const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

	const iconSize = typeof size === 'number' ? `${size}px` : size

	// variants
	const primary = (
		<svg viewBox='0 0 156 13' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ width: iconSize }} {...restProps} ref={forwardedRef}>
			<path
				d='M64.024 3.48c1.174 0 2.072.334 2.763 1.004.69.669 1.105 1.673 1.105 3.011v5.153h-2.694V7.897c0-.736-.138-1.272-.483-1.606-.346-.335-.76-.536-1.382-.536-.69 0-1.243.201-1.657.603-.415.401-.622 1.003-.622 1.807v4.483H58.36V.201h2.694v4.35c.345-.335.76-.603 1.312-.803a4.778 4.778 0 0 1 1.658-.268Zm10.434 9.303c-.967 0-1.865-.201-2.625-.603-.76-.401-1.381-.937-1.796-1.673-.414-.736-.69-1.472-.69-2.41 0-.936.207-1.672.69-2.408.415-.737 1.036-1.272 1.796-1.673.76-.402 1.658-.603 2.625-.603.967 0 1.865.201 2.624.603.76.401 1.382.936 1.796 1.673.415.736.69 1.472.69 2.409 0 .937-.206 1.673-.69 2.41-.414.735-1.036 1.27-1.796 1.672-.76.402-1.588.603-2.624.603Zm0-2.142c.69 0 1.243-.2 1.727-.67.483-.468.69-1.07.69-1.806s-.207-1.339-.69-1.807c-.415-.469-1.037-.67-1.727-.67-.69 0-1.243.201-1.727.67-.483.468-.69 1.07-.69 1.807 0 .736.207 1.338.69 1.807.484.401 1.036.669 1.727.669Zm11.528 2.142c-.967 0-1.865-.201-2.624-.603-.76-.401-1.382-.937-1.796-1.673-.415-.736-.69-1.472-.69-2.41 0-.936.206-1.672.69-2.408.414-.737 1.036-1.272 1.796-1.673.76-.402 1.657-.603 2.624-.603.967 0 1.865.201 2.625.603.76.401 1.381.936 1.796 1.673.414.736.69 1.472.69 2.409 0 .937-.207 1.673-.69 2.41-.415.735-1.036 1.27-1.796 1.672-.76.402-1.658.603-2.625.603Zm0-2.142c.691 0 1.243-.2 1.727-.67.484-.468.69-1.07.69-1.806s-.207-1.339-.69-1.807c-.414-.469-1.036-.67-1.727-.67-.69 0-1.243.201-1.726.67-.484.468-.691 1.07-.691 1.807 0 .736.207 1.338.69 1.807.415.401 1.037.669 1.727.669ZM9.6 10.106H3.938l-1.105 2.543H0L5.387.87H8.15l5.387 11.779h-2.97l-.966-2.543ZM8.704 8.03 6.769 3.547 4.835 8.031h3.868Zm8.354-4.215h2.417v2.007h-2.348v6.827h-2.694V5.822h-1.45V3.815h1.45v-.402c0-1.004.346-1.874.967-2.476C16.022.335 16.92 0 18.094 0c.414 0 .76.067 1.174.134.345.067.69.2.898.334l-.69 1.874c-.346-.2-.691-.334-1.106-.334-.829 0-1.243.468-1.243 1.338v.469h-.07Zm20.582 4.35s0 .268-.07.736h-7.044c.138.535.414 1.004.898 1.338.483.335 1.036.469 1.795.469a4.14 4.14 0 0 0 1.313-.2c.414-.135.76-.402 1.036-.67l1.45 1.54c-.898 1.003-2.141 1.472-3.868 1.472-1.036 0-2.003-.201-2.762-.603-.83-.401-1.45-.937-1.865-1.673-.415-.736-.691-1.472-.691-2.41 0-.87.207-1.672.622-2.408.414-.737 1.036-1.272 1.795-1.674.76-.401 1.589-.602 2.556-.602.898 0 1.727.2 2.486.602.76.402 1.313.937 1.727 1.674.414.602.622 1.472.622 2.409ZM32.805 5.42c-.622 0-1.105.2-1.52.535-.414.335-.69.803-.76 1.406h4.56c-.07-.603-.346-1.004-.76-1.339-.415-.401-.898-.602-1.52-.602Zm8.84-.601c.345-.469.76-.737 1.312-1.004a5.528 5.528 0 0 1 1.934-.335v2.41c-.276 0-.483-.068-.621-.068-.76 0-1.382.201-1.796.67-.414.401-.69 1.07-.69 1.874v4.283H39.09V3.614h2.555v1.205ZM51.8 12.85a9.503 9.503 0 0 1-2.762-.402c-.898-.268-1.589-.603-2.141-1.004l.966-2.075c.553.402 1.105.67 1.865.87.691.2 1.45.335 2.141.335.83 0 1.382-.134 1.796-.335.415-.268.553-.535.553-.937a.816.816 0 0 0-.346-.67c-.207-.2-.483-.334-.898-.468-.345-.133-.828-.267-1.45-.401-.898-.2-1.658-.402-2.28-.67a3.338 3.338 0 0 1-1.519-1.003c-.414-.469-.621-1.071-.621-1.874 0-.67.207-1.272.552-1.874a4.356 4.356 0 0 1 1.727-1.338c.76-.335 1.727-.469 2.832-.469.76 0 1.52.067 2.279.268.76.2 1.381.468 1.934.803L55.53 3.68c-1.105-.602-2.21-.936-3.384-.936-.76 0-1.382.133-1.727.401-.345.268-.553.602-.553 1.004s.208.736.622.937c.414.2 1.105.401 2.003.602.898.201 1.658.402 2.28.67.62.2 1.104.535 1.519 1.003.414.469.621 1.071.621 1.874 0 .67-.207 1.272-.621 1.874a4.355 4.355 0 0 1-1.727 1.338 9.99 9.99 0 0 1-2.763.402Zm-24.589-2.075v2.007h-2.9c-1.52 0-2.695-1.204-2.695-2.61v-4.35h-1.45V3.815h1.45V1.606h2.694v2.209h2.348v2.007H24.31v3.815c0 .602.553 1.138 1.174 1.138h1.727Zm71.07-.218v2.008h-2.97c-1.52 0-2.694-1.204-2.694-2.61v-4.35h-1.45V3.597h1.45V1.39h2.694v2.208h2.348v2.008h-2.348V9.42c0 .602.553 1.137 1.174 1.137h1.796Z'
				fill={modifiedColor}
			/>
			<path d='M108.281 9.903V7.146h5.53V5.003h-5.53V2.416h6.262V.204h-9.001v11.91h9.222v-2.21h-6.483Z' fill='url(#a)' />
			<path
				d='M116.957 12.115h5.411c3.896 0 6.568-2.348 6.568-5.955 0-3.608-2.672-5.956-6.568-5.956h-5.411v11.91Zm2.757-2.263V2.467h2.518c2.365 0 3.913 1.412 3.913 3.693 0 2.28-1.548 3.692-3.913 3.692h-2.518Z'
				fill='url(#b)'
			/>
			<path d='M131.015 12.115h2.756V.205h-2.756v11.91Z' fill='url(#c)' />
			<path d='M139.065 12.115h2.756V2.45h3.812V.204h-10.379V2.45h3.811v9.665Z' fill='url(#d)' />
			<path
				d='M150.946 12.32c3.404 0 5.054-1.702 5.054-3.693 0-4.373-6.925-2.859-6.925-5.054 0-.748.629-1.361 2.263-1.361 1.055 0 2.195.306 3.301.936l.851-2.093C154.384.357 152.852 0 151.355 0c-3.386 0-5.02 1.685-5.02 3.71 0 4.423 6.926 2.892 6.926 5.12 0 .733-.664 1.277-2.297 1.277-1.43 0-2.927-.51-3.931-1.242l-.936 2.076c1.055.817 2.961 1.378 4.849 1.378Z'
				fill='url(#e)'
			/>
			<defs>
				<linearGradient id='a' x1='104.832' y1='10.277' x2='156.716' y2='10.277' gradientUnits='userSpaceOnUse'>
					<stop stop-color='#FF5757' />
					<stop offset='.51' stop-color='#FC8D26' />
					<stop offset='1' stop-color='#FFC657' />
				</linearGradient>
				<linearGradient id='b' x1='104.832' y1='10.277' x2='156.716' y2='10.277' gradientUnits='userSpaceOnUse'>
					<stop stop-color='#FF5757' />
					<stop offset='.51' stop-color='#FC8D26' />
					<stop offset='1' stop-color='#FFC657' />
				</linearGradient>
				<linearGradient id='c' x1='104.832' y1='10.277' x2='156.716' y2='10.277' gradientUnits='userSpaceOnUse'>
					<stop stop-color='#FF5757' />
					<stop offset='.51' stop-color='#FC8D26' />
					<stop offset='1' stop-color='#FFC657' />
				</linearGradient>
				<linearGradient id='d' x1='104.832' y1='10.277' x2='156.716' y2='10.277' gradientUnits='userSpaceOnUse'>
					<stop stop-color='#FF5757' />
					<stop offset='.51' stop-color='#FC8D26' />
					<stop offset='1' stop-color='#FFC657' />
				</linearGradient>
				<linearGradient id='e' x1='104.832' y1='10.277' x2='156.716' y2='10.277' gradientUnits='userSpaceOnUse'>
					<stop stop-color='#FF5757' />
					<stop offset='.51' stop-color='#FC8D26' />
					<stop offset='1' stop-color='#FFC657' />
				</linearGradient>
			</defs>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(AftershootEditIcon)
