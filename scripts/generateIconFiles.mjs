import fs from 'fs'
import path from 'path'
import prettier from 'prettier'
import { getCurrentDirPath, readSvgDirectory, toPascalCase } from './helpers.mjs'
import renderSvgChildrenObj from './renderSvgChildrenObj.mjs'

const currentDir = getCurrentDirPath(import.meta.url)

const SVG_CHILDREN_DIR = path.resolve(currentDir, '../svg-children')

const svgChildren = readSvgDirectory(SVG_CHILDREN_DIR)
const svgChildrenObjs = await renderSvgChildrenObj(svgChildren, SVG_CHILDREN_DIR)

export default async ({ outputFolderName, svgObjs, outputDirectory, template, iconFileExtension = '.jsx', iconsDir }) => {
	const svgs = Object.keys(svgObjs)

	const iconsDistDirectory = path.join(outputDirectory, outputFolderName)

	if (!fs.existsSync(iconsDistDirectory)) {
		fs.mkdirSync(iconsDistDirectory)
	}

	const writeIconFiles = svgs.map(async (svgName) => {
		const location = path.join(iconsDistDirectory, `${svgName}${iconFileExtension}`)
		const componentName = toPascalCase(svgName)

		let { attributes: originalAttributes, children } = svgObjs[svgName]

		const elementTemplate = template({
			componentName,
			originalAttributes,
			svgChildren: svgChildrenObjs[svgName],
		})

		const outpust = await prettier.format(elementTemplate, {
			parser: 'typescript',
		})

		await fs.promises.writeFile(location, outpust, 'utf-8')
	})

	Promise.all(writeIconFiles)
		.then(() => {
			console.log('UNICON ICONS built -', svgs.length, 'icons.')
		})
		.catch((error) => {
			throw new Error(`Something went wrong generating icon files,\n ${error}`)
		})
}
