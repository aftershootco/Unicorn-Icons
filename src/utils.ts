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

export const removeOuterQuotes = (svgString: string) => {
	// Check if the string starts and ends with double quotes
	if (svgString.startsWith('"') && svgString.endsWith('"')) {
		// Remove the outer double quotes
		svgString = svgString.slice(1, -1)
	}
	return svgString
}
