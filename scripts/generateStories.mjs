import fs from 'fs'
import path from 'path'
import exportStoryTemplate from './exportStoryTemplate.mjs'
import { toPascalCase } from './helpers.mjs'

export default ({ outputDirectory, iconNodes, iconOutputFolderName, storyGroupName }) => {
	const icons = Object.keys(iconNodes)

	// Ensure the output directory exists
	if (!fs.existsSync(outputDirectory)) {
		fs.mkdirSync(outputDirectory, { recursive: true })
	}

	icons.forEach(async (iconName) => {
		const iconNamePascalCase = toPascalCase(iconName)
		const storyName = `${iconNamePascalCase}.stories.tsx`
		const storyTemplate = exportStoryTemplate({ iconName, iconOutputFolderName, storyGroupName })

		const filePath = path.join(outputDirectory, storyName)

		await fs.promises.writeFile(filePath, storyTemplate, 'utf-8')
	})

	console.log(`STORIES created - ${icons.length} stories`)
}
