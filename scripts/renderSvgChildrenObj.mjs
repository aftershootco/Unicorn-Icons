import { basename } from 'path'
import { readSvg } from './helpers.mjs'
/**
 * Build an object in the format: `{ <name>: <contents> }`.
 * @param {string[]} svgFiles - A list of filenames.
 * @param {Function} getSvg - A function that returns the contents of an SVG file given a filename.
 * @returns {Object}
 */

export default (svgChildren, svgChildrenDirectory, renderUniqueKey) =>
	svgChildren.map((svgFile) => {
		const name = basename(svgFile, '.svg').split('.')[0]
		const svg = readSvg(svgFile, svgChildrenDirectory)
		// const contents = parseSync(svg)
		console.log('============', svgChildrenDirectory)

		// if (!(contents.children && contents.children.length)) {
		// 	throw new Error(`${name}.svg has no children!`)
		// }

		// if (hasDuplicatedChildren(contents.children)) {
		// 	throw new Error(`Duplicated children in ${name}.svg`)
		// }

		// if (renderUniqueKey) {
		// 	contents.children = contents.children.map((child) => {
		// 		child.attributes.key = generateHashedKey(child)

		// 		return child
		// 	})
		// }

		// return { name, svg }
	})
// .reduce((icons, icon) => {
// 	icons[icon.name] = icon.contents
// 	return icons
// }, {})
