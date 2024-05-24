import React from 'react'
import { IconProps } from '../../../types'
import BaseIcon from '../../components/BaseIcon'
import { cn } from '../../utils/cn'

type IconVariant = 'primary'
type Props = Omit<IconProps, 'variant' | 'color' | 'inActive'> & {
	variant?: IconVariant
}

export const ConfettiRightScreen = React.forwardRef<SVGSVGElement, Props>((props, forwardedRef) => {
	//props
	const { variant = 'primary', className, size = 300, ...restProps } = props

	// variants
	const primary = (
		<svg
			viewBox='0 0 245 329'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...(size ? { style: { width: size } } : {})}
			{...restProps}
			ref={forwardedRef}
			className={cn('w-6', className && className)}
		>
			<g opacity='.6'>
				<g opacity='.3'>
					<path
						d='m151.989 128.59 6.482-9.48c5.077 3.413 13.046 2.3 17.038-2.383 1.956-2.284 3.244-5.409 4.615-8.703 1.118-2.688 2.272-5.481 3.904-8.183 4.274-7.059 11.282-12.406 19.235-14.644 4.015-1.126 7.987-1.441 11.839-1.732 4.35-.33 8.438-.65 11.828-2.16 3.136-1.405 5.796-3.97 7.293-7.057 1.341-2.792 1.9-6.172 2.476-9.745.446-2.71.897-5.523 1.727-8.351 1.966-6.696 6.273-11.472 12.159-15.047l6.728 5.172s-5.917 5.313-7.566 8.593c-1.719 3.44-2.023 7.18-2.629 10.923-.695 4.231-.5 9.034-2.586 13.334-2.663 5.504-7.403 10.095-13.017 12.601-5.216 2.33-10.533 2.734-15.67 3.13-3.428.265-6.665.514-9.585 1.335-5.147 1.453-9.691 4.906-12.45 9.483-1.19 1.965-2.131 4.227-3.129 6.642-1.655 3.985-3.352 8.095-6.493 11.773-7.79 9.163-22.262 11.192-32.199 4.499Z'
						fill='#03A9F4'
						fillOpacity='.5'
					/>
					<path
						opacity='.5'
						d='M141.283 55.628c7.494-2.721 12.486 2.36 15.169 5.088.319.328.717.73 1.017 1.004.643-.14 1.378-.725 2.611-1.798 2.035-1.766 4.831-4.18 9.045-3.418 3.662.664 5.427 4.115 7.173 6.306 1.494 1.87 3.137 3.13 5.581 3.476 2.847.402 9.528-1.366 9.528-1.366l3.377 4.094s-6.237 2.544-9.538 3.11c-9.356 1.605-12.653-3.278-14.267-5.3-1.113-1.399-2.166-2.721-3.095-2.888-.678-.123-1.343.326-2.994 1.759-1.977 1.717-4.7 4.061-8.78 3.535-1.987-.253-3.395-1.678-4.874-3.186-2.626-2.671-4.566-4.35-7.428-3.303l-2.525-7.113Z'
						fill='#8EC4F5'
					/>
					<path
						opacity='.5'
						d='M94.111 111.785c7.972.069 10.987-6.385 12.607-9.851.192-.416.433-.927.625-1.285.652-.083 1.54.224 3.061.825 2.506.988 5.947 2.332 9.667.21 3.231-1.847 3.746-5.689 4.663-8.336.785-2.26 1.914-3.996 4.103-5.137 2.551-1.328 9.439-1.887 9.439-1.887l1.82-4.985s-6.729-.32-10.03.246c-9.356 1.604-10.837 7.306-11.685 9.75-.584 1.69-1.136 3.288-1.957 3.754-.598.342-1.374.14-3.408-.66-2.436-.962-5.785-2.264-9.457-.409-1.789.9-2.642 2.713-3.534 4.628-1.586 3.394-2.856 5.622-5.903 5.589l-.01 7.548Z'
						fill='#F2698D'
					/>
					<path
						d='M213.87 212.965c7.493-2.721 12.485 2.359 15.169 5.088.319.328.716.729 1.017 1.004.642-.139 1.377-.725 2.611-1.798 2.034-1.766 4.83-4.18 9.044-3.419 3.663.665 5.428 4.116 7.174 6.306 1.494 1.87 3.137 3.13 5.58 3.477 2.848.402 9.529-1.366 9.529-1.366l3.377 4.094s-6.238 2.544-9.539 3.11c-9.356 1.605-12.653-3.279-14.266-5.3-1.113-1.399-2.166-2.722-3.096-2.888-.678-.123-1.343.326-2.993 1.758-1.977 1.718-4.701 4.062-8.781 3.536-1.986-.253-3.394-1.678-4.873-3.186-2.627-2.671-4.567-4.35-7.429-3.303l-2.524-7.113Z'
						fill='#8EC4F5'
					/>
					<path opacity='.5' d='m142.196 156.411 6.758-13.383 13.722 7.08-8.804 10.942-11.676-4.639Z' fill='#F2698D' />
					<path
						opacity='.5'
						d='m163.988 92.249 4.359-10.082a40.92 40.92 0 0 0 9.888 2.828l-1.7 10.847a52.337 52.337 0 0 1-12.547-3.593Z'
						fill='#069D98'
					/>
					<path
						opacity='.5'
						d='M141.644 106.601a97.424 97.424 0 0 0 2.12-12.471l11.573-.77a106.744 106.744 0 0 1-2.338 13.802l-11.355-.561Z'
						fill='#F2698D'
					/>
					<path
						opacity='.5'
						d='M167.743 75.123c-6.551 1.703-11.196 3.305-17.167 5.86l10.31 9.126 11.107-12.51-4.25-2.476Z'
						fill='#FFE033'
					/>
					<path opacity='.5' d='m126.015 62.34.085-14.812-16.3-.093-.086 14.812 16.301.093Z' fill='#069D98' />
					<path d='m187.998 141.722 12.868 11.095-8.914 9.787-12.87-11.095 8.916-9.787Z' fill='gold' />
					<path
						opacity='.5'
						d='M121.74 147.145a130.396 130.396 0 0 0 11.647-9.533l9.792 8.827a141.276 141.276 0 0 1-12.945 10.579l-8.494-9.873Z'
						fill='#069D98'
					/>
				</g>
			</g>
			<g opacity='.3'>
				<path
					d='M141.788 200.558c9.536-21.627 32.363-38.934 61.072-46.297 25.94-6.648 53.613-5.163 75.841-3.965l-3.069 10.804c-21.271-1.138-45.656-.714-69.506 5.399-24.677 6.319-44.143 20.833-52.058 38.794l-12.28-4.735Z'
					fill='#03A9F4'
					fillOpacity='.3'
				/>
				<path
					d='m113.947-23.296 11.325-11.72c55.07 53.26 121.532 48.541 154.093 38.533l5.795 11.494c-35.996 11.072-110.143 20.768-171.213-38.306Z'
					fill='#EF426F'
				/>
				<path
					d='m151.048 51.2-.641 1.205c6.587-1.254 13.289-2.072 19.983-2.58 3.556-6.15 7.495-11.993 12.498-16.573.144-.127.291-.235.434-.363-7.416.155-14.951.579-22.471 1.455-3.776 5.588-6.911 11.418-9.803 16.855Zm34.249 151.534 3.41-12.795c6.948 1.92 14.284-1.944 18.827-6.188 5.905-5.52 10.021-13.323 13.996-20.883 4.262-8.114 9.089-17.301 16.741-24.365 14.053-12.988 34.055-14.551 50.952-5.524l-3.623 10.392c-12.171-6.49-28.327-4.409-38.449 4.928-5.988 5.518-10.058 13.296-14.023 20.821-4.276 8.133-9.116 17.339-16.655 24.383-9.103 8.49-21.05 12.036-31.176 9.231Z'
					fill='#FFE033'
				/>
				<path
					d='M137.869-44.788c16.514-5.932 27.465 5.007 33.352 10.882.7.707 1.571 1.57 2.231 2.16 1.415-.304 3.037-1.575 5.76-3.902 4.491-3.83 10.664-9.064 19.934-7.45 8.056 1.41 11.916 8.852 15.744 13.57 3.275 4.029 6.882 6.739 12.258 7.47 6.265.85 20.983-3.018 20.983-3.018l7.404 8.819s-13.748 5.54-21.018 6.788c-20.606 3.533-27.827-6.992-31.365-11.347-2.439-3.014-4.747-5.864-6.792-6.216-1.492-.261-2.958.714-6.602 3.82-4.364 3.725-10.376 8.808-19.353 7.7-4.37-.531-7.46-3.599-10.704-6.846-5.762-5.752-10.02-9.363-16.327-7.083l-5.505-15.347Z'
					fill='#F2698D'
				/>
				<path
					d='M190.696 61.346c7.972.07 10.987-6.384 12.607-9.85.192-.416.433-.927.625-1.286.652-.083 1.54.225 3.061.826 2.506.987 5.947 2.331 9.667.21 3.231-1.848 3.746-5.69 4.662-8.336.786-2.26 1.915-3.996 4.104-5.137 2.551-1.328 9.439-1.887 9.439-1.887l1.82-4.985s-6.729-.321-10.03.245c-9.356 1.604-10.837 7.307-11.685 9.75-.584 1.69-1.136 3.288-1.957 3.755-.598.342-1.374.14-3.408-.66-2.436-.962-5.786-2.264-9.457-.41-1.789.901-2.642 2.714-3.534 4.628-1.586 3.394-2.856 5.623-5.903 5.59l-.011 7.547Z'
					fill='#FFE033'
				/>
				<path
					d='M208.817 120.587c-1.67-5.093-.897-9.742-.33-13.835l11.568 1.672s-1.956 4.309-.457 10.211l-10.781 1.952Zm-12.49-45.866-.222-10.695 12.479.195.229 10.71-12.486-.21Z'
					fill='#F2698D'
				/>
				<path d='m239.759 182.514 13.232 6.41-7.013 14.084-13.232-6.413 7.013-14.081Z' fill='#069D98' />
				<path d='m224.471 74.988.183-12.423 8.507 1.185-.19 12.41-8.5-1.172Z' fill='#F2698D' />
				<path
					d='M218.046 108.083s.385 1.758.223 4.051c4.197.917 8.543 1.727 13.272 1.72.303-2.841-.446-4.952-.446-4.952l-13.049-.819Z'
					fill='#FFE033'
				/>
				<path
					d='M224.032 104.749c1.479-4.89-1.718-9.585-1.718-9.585l11.931-4.072s4.267 4.752 1.518 11.406l-11.731 2.251ZM145.483 7.334l3.389 14.42-15.869 3.727-3.388-14.42 15.868-3.727Z'
					fill='#069D98'
				/>
				<path
					d='m97.497 22.977-.893-1.033c6.7-.247 13.416-.945 20.054-1.945 4.839 5.202 9.983 10.02 15.882 13.366.168.093.335.166.504.258-7.264 1.504-14.704 2.772-22.229 3.596-4.928-4.605-9.285-9.588-13.318-14.242Z'
					fill='#FFE033'
				/>
			</g>
		</svg>
	)
	return <BaseIcon variants={{ primary }} variant={variant} />
})

export default React.memo(ConfettiRightScreen)
