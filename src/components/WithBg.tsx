import React from 'react'
import DEFAULT_ICON from '../constant'
import defaultBgStyles from '../defaultBgStyles'

type WithBgProps = {
	children: React.ReactNode
	bgColor?: string
	bgOpacity?: number
	bgSize?: number
	bgBorderRadius?: number
}

const WithBg = (props: WithBgProps) => {
	const {
		children,
		bgColor = DEFAULT_ICON.BG_COLOR,
		bgOpacity = DEFAULT_ICON.BG_OPACITY,
		bgSize = DEFAULT_ICON.BG_PADDING,
		bgBorderRadius = DEFAULT_ICON.BG_BORDER_RADIUS,
	} = props

	return (
		<div
			style={{
				...defaultBgStyles,
				padding: bgSize,
				borderRadius: bgBorderRadius,
				backgroundColor: bgColor,
			}}
		>
			{children}
		</div>
	)
}

export default WithBg
