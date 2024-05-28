import fs from 'fs'
import path from 'path'
import { readSvgDirectory } from './helpers.mjs'
import renderIconsObject from './renderIconsObject.mjs'

const currentDir = process.cwd()
const ICONS_DIR = path.resolve(currentDir, './icons')
const svgFiles = readSvgDirectory(ICONS_DIR)
const icons = renderIconsObject(svgFiles, ICONS_DIR, true)

const iconObjDirectory = path.resolve(currentDir, 'icons-objs')

if (fs.existsSync(iconObjDirectory)) {
	fs.rmSync(iconObjDirectory, { recursive: true, force: true })
}

if (!fs.existsSync(iconObjDirectory)) {
	fs.mkdirSync(iconObjDirectory, { recursive: true })
}

const writeObjFiles = Object.entries(icons).map(async ([iconName, { attributes, children }]) => {
	const location = path.resolve(iconObjDirectory, `${iconName}.obj.json`)
	const svgLocation = path.resolve(iconObjDirectory, `${iconName}.new.json`)

	const svgObj = {
		objName: iconName,
		originalAttributes: attributes,
		originalSvgChildren: children,
	}

	const childrenSvg = {
		name: 'g',
		type: 'element',
		value: '',
		parent: null,
		children: children,
	}

	const output = JSON.stringify(svgObj, null, 2)
	const childrenContent = JSON.stringify(childrenSvg, null, 2)

	await fs.promises.writeFile(location, output, 'utf-8')
	await fs.promises.writeFile(svgLocation, childrenContent, 'utf-8')
})

try {
	await Promise.all(writeObjFiles)
	console.log('Successfully write', icons.length, 'svg objs.')
} catch (error) {
	throw new Error(`Something went wrong generating iconNode files,\n ${error}`)
}
