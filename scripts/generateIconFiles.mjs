import fs from 'fs'
import path from 'path'
import { toPascalCase } from './helpers.mjs'

export default ({ svgObjs, outputDirectory, template, iconFileExtension = '.js', iconsDir }) => {
	const svgs = Object.keys(svgObjs)

	const iconsDistDirectory = path.join(outputDirectory, `icons-neo`)

	if (!fs.existsSync(iconsDistDirectory)) {
		fs.mkdirSync(iconsDistDirectory)
	}

	const writeIconFiles = svgs.map(async (svgName) => {
		const location = path.join(iconsDistDirectory, `${svgName}${iconFileExtension}`)
		const componentName = toPascalCase(svgName)

		let { attributes: originalAttributes, children } = svgObjs[svgName]

		const groupSvgChildrenObj = {
			name: 'g',
			type: 'element',
			value: '',
			parent: null,
			children: children,
		}
		// children = children.map(({ name, attributes }) => [name, attributes])

		// const getSvg = () => readSvg(`${svgName}.svg`, iconsDir)

		const elementTemplate = template({
			componentName,
			originalAttributes,
			groupSvgChildrenObj,
		})

		await fs.promises.writeFile(location, elementTemplate, 'utf-8')
	})

	Promise.all(writeIconFiles)
		.then(() => {
			console.log('Successfully built', svgs.length, 'icons.')
		})
		.catch((error) => {
			throw new Error(`Something went wrong generating icon files,\n ${error}`)
		})
}
