import fs from 'fs'
import path, { basename } from 'path'

/**
 * Build an object in the format: `{ <name>: <contents> }`.
 * @param {string[]} svgMetadata - A list of filenames.
 * @param {Function} getSvg - A function that returns the contents of an SVG file given a filename.
 * @returns {Object}
 */
export default (svgMetadata, iconsDirectory) =>
	svgMetadata
		.map((data) => {
			const name = basename(data, '.json')
			const json = JSON.parse(fs.readFileSync(path.join(iconsDirectory, data), 'utf8'))
			return { name, json }
		})
		.reduce((objs, JSON) => {
			objs[JSON.name] = JSON.json
			return objs
		}, {})
