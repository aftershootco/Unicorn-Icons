import * as React from 'react'

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
	size?: number
	inActive?: boolean
	className?: string
}
