import { CamelToPascal } from './types'

/**
 * Converts string to kebab case
 *
 * @param {string} string
 * @returns {string} A kebabized string
 */
export const toKebabCase = (string: string) => string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

/**
 * Converts string to pascal case
 *
 * @param {string} string
 * @returns {string} A pascalized string
 */
export const toPascalCase = <T extends string>(string: T): CamelToPascal<T> => {
	const camelCase = string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => (p2 ? p2.toUpperCase() : p1.toLowerCase()))

	return (camelCase.charAt(0).toUpperCase() + camelCase.slice(1)) as CamelToPascal<T>
}

/**
 * Merges classes into a single string
 *
 * @param {array} classes
 * @returns {string} A string of classes
 */
export const mergeClasses = <ClassType = string | undefined | null>(...classes: ClassType[]) =>
	classes
		.filter((className, index, array) => {
			return Boolean(className) && array.indexOf(className) === index
		})
		.join(' ')

/**
 * Converts a hex color and opacity to an RGBA color.
 * @param {string} hex - The hex color code (e.g., "#ff5733" or "#f53").
 * @param {number} opacity - The opacity value (0 to 1).
 * @returns {string} The RGBA color code.
 */
export function hexToRgba(hex: string, opacity: number = 1): string {
	// Ensure the hex color starts with '#'
	if (hex.startsWith('#')) {
		hex = hex.slice(1)
	}

	// Expand shorthand hex color to full form (e.g., "f53" -> "ff5533")
	if (hex.length === 3) {
		hex = hex
			.split('')
			.map((char) => char + char)
			.join('')
	}

	// Convert hex color to RGB
	const bigint = parseInt(hex, 16)
	const r = (bigint >> 16) & 255
	const g = (bigint >> 8) & 255
	const b = bigint & 255

	// Return RGBA color
	return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

// Example usage
const hexColor: string = '#ff5733'
const opacity: number = 0.5
const rgbaColor: string = hexToRgba(hexColor, opacity)
console.log(rgbaColor) // Output: "rgba(255, 87, 51, 0.5)"
