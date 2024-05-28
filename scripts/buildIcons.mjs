import fs from 'fs'
import getArgumentOptions from 'minimist'
import path from 'path'

import generateIconFiles from './generateIconFiles.mjs'
import { getCurrentDirPath, readSvgDirectory } from './helpers.mjs'
import renderIconsObject from './renderIconsObject.mjs'

// import generateExportsFile from './generateExportsFile.mjs'
// import generateStories from './generateStories.mjs'

const cliArguments = getArgumentOptions(process.argv.slice(2))

const currentDir = getCurrentDirPath(import.meta.url)

const ICONS_DIR = path.resolve(currentDir, '../icons')

const OUTPUT_DIR = path.resolve(process.cwd(), cliArguments.output || './src')

if (!fs.existsSync(OUTPUT_DIR)) {
	fs.mkdirSync(OUTPUT_DIR)
}

const { renderUniqueKey = false, templateSrc, silent = false, iconFileExtension = '.tsx', exportFileName = 'index.js', pretty = true } = cliArguments

async function buildIcons() {
	if (templateSrc == null) {
		throw new Error('No `templateSrc` argument given.')
	}

	const svgFiles = readSvgDirectory(ICONS_DIR)

	const svgObjs = renderIconsObject(svgFiles, ICONS_DIR, renderUniqueKey)

	const { default: iconFileTemplate } = await import(path.resolve(process.cwd(), templateSrc))

	generateIconFiles({
		svgObjs: svgObjs,
		outputDirectory: OUTPUT_DIR,
		iconsDir: ICONS_DIR,
		template: iconFileTemplate,
		iconFileExtension,
		// iconMetaData,
	})

	// Generates entry files for the compiler filled with icons exports
	// generateExportsFile(path.join(OUTPUT_DIR, 'icons', exportFileName), path.join(OUTPUT_DIR, 'icons'), icons)

	// generateStories({ iconNodes: icons })
}

try {
	buildIcons()
} catch (error) {
	console.error(error)
}
