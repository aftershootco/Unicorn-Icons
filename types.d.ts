import * as React from 'react'
import { ClassNameValue } from 'tailwind-merge'

export type IconVariant = 'primary' | 'secondary' | 'tertiary'

export type TOnHoverAttr = {
	size?: number
	color?: string
	rotate?: number
	opacity?: number
}

export interface IconProps extends React.SVGAttributes<SVGElement> {
	variant?: IconVariant
	color?: string
	size?: number | string
	inActive?: boolean
	className?: ClassNameValue
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	size?: number | string
}
