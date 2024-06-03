import fs from 'fs'
import getArgumentOptions from 'minimist'
import path from 'path'

import exportIconTemplate from './exportIconTemplate.mjs'
import generateExportsFile from './generateExportsFile.mjs'
import generateIconFiles from './generateIconFiles.mjs'
import generateStories from './generateStories.mjs'
import { getCurrentDirPath, readSvgDirectory, readSvgMetadata } from './helpers.mjs'
import renderIconsObject from './renderIconsObject.mjs'
import renderMetadataObj from './renderMetadataObj.mjs'

const cliArguments = getArgumentOptions(process.argv.slice(2))

const currentDir = getCurrentDirPath(import.meta.url)
const ICONS_DIR = path.resolve(currentDir, '../icons-optimized')
const OUTPUT_DIR = path.resolve(process.cwd(), cliArguments.output || './src')
const UNICON_CONFIG = JSON.parse(fs.readFileSync('./unicons.config.json', 'utf8'))

const OUTPUT_FOLDER_NAME = UNICON_CONFIG.icon_output_dir ?? 'icons-neo'
const STORIES_OUTPUT_FOLDER_NAME = UNICON_CONFIG.stories_output_dir ?? 'stories-neo'

if (!fs.existsSync(OUTPUT_DIR)) {
	fs.mkdirSync(OUTPUT_DIR)
}

const { renderUniqueKey = false, iconFileExtension = '.tsx', exportFileName = 'index.js' } = cliArguments

async function buildIcons() {
	const svgFiles = readSvgDirectory(ICONS_DIR)
	const svgMetada = readSvgMetadata(ICONS_DIR)

	const svgObjs = renderIconsObject(svgFiles, ICONS_DIR, renderUniqueKey)
	const svgMetadata = renderMetadataObj(svgMetada, ICONS_DIR)

	generateIconFiles({
		outputFolderName: OUTPUT_FOLDER_NAME,
		svgObjs: svgObjs,
		outputDirectory: OUTPUT_DIR,
		iconsDir: ICONS_DIR,
		template: exportIconTemplate,
		iconFileExtension,
		svgMetadata,
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
		metadata: svgMetadata,
	})
}

try {
	buildIcons()
} catch (error) {
	console.error(error)
}
