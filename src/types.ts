export type CamelToPascal<T extends string> = T extends `${infer FirstChar}${infer Rest}` ? `${Capitalize<FirstChar>}${Rest}` : never

import { ForwardRefExoticComponent, ReactSVG, RefAttributes, SVGProps } from 'react'

export type IconNode = [elementName: keyof ReactSVG, attrs: Record<string, string>][]

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>
type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes

export interface ASIProps extends ElementAttributes {
	size?: string | number
	inActive: boolean
	fillColor?: string
	absoluteStrokeWidth?: boolean
}

export type LucideIcon = ForwardRefExoticComponent<Omit<ASIProps, 'ref'> & RefAttributes<SVGSVGElement>>
