import tinycolor from 'tinycolor2'

export function generateLighterColor(color: string, factor = 0.2) {
	const modifiedColor = tinycolor(color)
	const lighterColor = modifiedColor.lighten(factor * 100).toString()
	return lighterColor
}

export function generateDarkerColor(color: string, factor = 0.2) {
	const modifiedColor = tinycolor(color)
	const darkerColor = modifiedColor.darken(factor * 100).toString()
	return darkerColor
}

export function generateCoolerColor(color: string, factor = 0.2) {
	const modifiedColor = tinycolor(color)
	const coolerColor = modifiedColor.desaturate(factor * 100).toString()
	return coolerColor
}
