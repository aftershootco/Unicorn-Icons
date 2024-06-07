import { basename } from 'path'
import { readSvg } from './helpers.mjs'
/**
 * Build an object in the format: `{ <name>: <contents> }`.
 * @param {string[]} svgChildren - A list of filenames.
 * @returns {Object}
 */

export default async (svgChildren, svgChildrenDirectory, renderUniqueKey) =>
	svgChildren
		.map((svgFile) => {
			const name = basename(svgFile, '.svg').split('.')[0]
			const svgChild = readSvg(svgFile, svgChildrenDirectory)
			return { name, svgChild }
		})
		.reduce((svgObjs, svg) => {
			svgObjs[svg.name] = svg.svgChild
			return svgObjs
		}, {})
