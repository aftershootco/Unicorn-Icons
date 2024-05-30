import fs from 'fs'
import getArgumentOptions from 'minimist'
import path from 'path'

import exportIconTemplate from './exportIconTemplate.mjs'
import generateExportsFile from './generateExportsFile.mjs'
import generateIconFiles from './generateIconFiles.mjs'
import generateStories from './generateStories.mjs'
import { getCurrentDirPath, readSvgDirectory } from './helpers.mjs'
import renderIconsObject from './renderIconsObject.mjs'

const cliArguments = getArgumentOptions(process.argv.slice(2))

const currentDir = getCurrentDirPath(import.meta.url)
const ICONS_DIR = path.resolve(currentDir, '../icons-optimized')
const OUTPUT_DIR = path.resolve(process.cwd(), cliArguments.output || './src')
const OUTPUT_FOLDER_NAME = 'icons-neo'
const STORIES_OUTPUT_FOLDER_NAME = 'stories-neo'

if (!fs.existsSync(OUTPUT_DIR)) {
	fs.mkdirSync(OUTPUT_DIR)
}

const { renderUniqueKey = false, iconFileExtension = '.tsx', exportFileName = 'index.js' } = cliArguments

async function buildIcons() {
	const svgFiles = readSvgDirectory(ICONS_DIR)

	const svgObjs = renderIconsObject(svgFiles, ICONS_DIR, renderUniqueKey)

	generateIconFiles({
		outputFolderName: OUTPUT_FOLDER_NAME,
		svgObjs: svgObjs,
		outputDirectory: OUTPUT_DIR,
		iconsDir: ICONS_DIR,
		template: exportIconTemplate,
		iconFileExtension,
	})

	// Generates entry files for the compiler filled with icons exports
	generateExportsFile({
		inputEntry: path.join(OUTPUT_DIR, OUTPUT_FOLDER_NAME, exportFileName),
		outputDirectory: path.join(OUTPUT_DIR, OUTPUT_FOLDER_NAME),
		iconNodes: svgObjs,
	})

	generateStories({
		outputDirectory: path.join(OUTPUT_DIR, STORIES_OUTPUT_FOLDER_NAME),
		iconNodes: svgObjs,
		iconOutputFolderName: OUTPUT_FOLDER_NAME,
		storyGroupName: 'omega',
	})
}

try {
	buildIcons()
} catch (error) {
	console.error(error)
}
