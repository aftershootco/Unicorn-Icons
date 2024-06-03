import fs from 'fs'
import path from 'path'
import { stringify } from 'svgson'
import { getCurrentDirPath, readSvgDirectory } from './helpers.mjs'
import renderIconsObject from './renderIconsObject.mjs'

const currentDir = getCurrentDirPath(import.meta.url)
const ICONS_DIR = path.resolve(currentDir, '../icons-optimized')

const svgFiles = readSvgDirectory(ICONS_DIR)
const svgObjs = renderIconsObject(svgFiles, ICONS_DIR, true)

const svgs = Object.keys(svgObjs)

const svgChildrenDirectory = path.resolve(currentDir, `../svg-children`)

if (!fs.existsSync(svgChildrenDirectory)) {
	fs.mkdirSync(svgChildrenDirectory)
}

const writeSvgChildren = svgs.map(async (svgName) => {
	const location = path.resolve(svgChildrenDirectory, `${svgName}.svg`)

	let { children } = svgObjs[svgName]

	const childrenSvgGroup = {
		name: 'g',
		type: 'element',
		value: '',
		parent: null,
		children: children,
	}

	const output = stringify(childrenSvgGroup)

	await fs.promises.writeFile(location, output, 'utf-8')

	try {
		await Promise.all(writeSvgChildren)
		console.log('SVG CHILDREN successfully write')
	} catch (error) {
		throw new Error(`Something went wrong generating iconNode files,\n ${error}`)
	}
})
