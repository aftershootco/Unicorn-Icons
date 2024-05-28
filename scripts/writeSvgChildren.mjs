import fs from 'fs'
import path from 'path'
import { stringify } from 'svgson'

export default async ({ svgObjs, outputDirectory }) => {
	const svgs = Object.keys(svgObjs)

	const svgChildrenDirectory = path.join(outputDirectory, `svg-children`)

	if (!fs.existsSync(svgChildrenDirectory)) {
		fs.mkdirSync(svgChildrenDirectory)
	}

	const writeSvgChildren = svgs.map(async (svgName) => {
		const location = path.resolve(svgChildrenDirectory, `${svgName}.children.svg`)

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
			console.log('Successfully write', icons.length, 'svg objs.')
		} catch (error) {
			throw new Error(`Something went wrong generating iconNode files,\n ${error}`)
		}
	})
}
