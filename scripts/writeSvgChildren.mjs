import fs from 'fs'
import path from 'path'
import { stringify } from 'svgson'

const ICONS_DIR = path.resolve(currentDir, '../icons')

const svgFiles = readSvgDirectory(ICONS_DIR)

const svgObjs = renderIconsObject(svgFiles, ICONS_DIR, renderUniqueKey)

export default async () => {
	const svgs = Object.keys(svgObjs)

	const svgChildrenDirectory = path.join(outputDirectory, `svg-children`)

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
			console.log('Successfully write', svgs.length, 'svg objs.')
		} catch (error) {
			throw new Error(`Something went wrong generating iconNode files,\n ${error}`)
		}
	})
}
