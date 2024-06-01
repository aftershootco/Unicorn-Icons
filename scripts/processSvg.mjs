import * as prettier from 'prettier'
import { optimize } from 'svgo'
import { parseSync, stringify } from 'svgson'

/**
 * Optimize SVG with `svgo`.
 * @param {string} svg - An SVG string.
 * @param {object} options - An options object for deciding outline, fill, or mix.
 * @returns {Promise<string>} An optimized svg
 */
async function optimizeSvg(svg, path, iconType) {
	// const removeAttrsMapping = {
	// 	outline: '(stroke|stroke-width)',
	// 	fill: '(stroke-width)',
	// 	mix: '(stroke-width)',
	// }

	const plugins = [
		{
			name: 'preset-default',
			params: {
				overrides: {
					convertShapeToPath: false,
					mergePaths: false,
					removeViewBox: false,
				},
			},
		},
		{
			name: 'removeAttrs',
			params: {
				attrs: '(stroke|stroke-width|style)',
			},
		},
		{
			name: 'removeDimensions',
		},
	]

	const customPlugInUpdateFillValue = {
		name: 'updateFillValue',
		type: 'visitor',
		fn: (ast) => {
			const visit = (node) => {
				if (node.attributes && node.attributes.fill) {
					if (!node.attributes?.noChange) {
						node.attributes.fill = 'currentColor'
					}
				}
				if (node.children) {
					for (const child of node.children) {
						visit(child)
					}
				}
			}
			visit(ast)
		},
	}

	if (iconType === 'fill') {
		plugins.push(customPlugInUpdateFillValue)
	}

	if (iconType === 'no-change') {
		return svg
	}

	const result = optimize(svg, {
		path,
		plugins,
	})

	return result.data
}

/**
 * Set default attibutes on SVG.
 * @param {string} svg - An SVG string.
 * @returns {string} An SVG string, included with the default attributes.
 */
function setAttrs(svg, iconType, svgProcessOption) {
	const contents = parseSync(svg)
	contents.attributes = {
		...contents.attributes,
		...svgProcessOption[iconType],
	}
	return stringify(contents)
}

/**
 * Process SVG string.
 * @param {string} svg An SVG string.
 * @param {object} options - An options object for deciding outline, fill, or mix.
 * @returns {Promise<string>} An optimized svg
 */
function processSvg(svg, path, iconType) {
	return (
		optimizeSvg(svg, path, iconType)
			// .then((optimizedSvg) => setAttrs(optimizedSvg, iconType, svgProcessOption))
			.then((optimizedSvg) => prettier.format(optimizedSvg, { parser: 'babel' }))
			// remove semicolon inserted by prettier
			// because prettier thinks it's formatting JSX not HTML
			.then((svg) => svg.replace(/;/g, ''))
	)
}

export default processSvg

// to be replace
// stroke-linecap -> strokeLinecap
// stroke-linejoin -> strokeLinejoin
// clip-path -> clipPath
