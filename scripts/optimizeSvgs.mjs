import fs from 'fs'
import path from 'path'
import { getDirectories, readSvgDirectory, writeSvgFile } from './helpers.mjs'
import processSvg from './processSvg.mjs'

const UNICON_CONFIG = JSON.parse(fs.readFileSync('./unicons.config.json', 'utf8'))

const INPUT_ICON_DIR = UNICON_CONFIG.icon_input_dir

const ICONS_INPUT_BASE_PATH = path.resolve(process.cwd(), INPUT_ICON_DIR)
const OUTPUT_OPTIMIZED_ICONS_DIR = path.resolve(process.cwd(), 'icons-optimized')

const ICON_DIRS = await getDirectories(ICONS_INPUT_BASE_PATH)

// Ensure the optimized directory exists
if (!fs.existsSync(OUTPUT_OPTIMIZED_ICONS_DIR)) {
	fs.mkdirSync(OUTPUT_OPTIMIZED_ICONS_DIR, { recursive: true })
}

console.log(`Optimizing SVGs...`)

// const svgFiles = readSvgDirectory(ICONS_INPUT_PATH)

const optimizeSvgFiles = async () => {
	for (const FOLDER_PATH of ICON_DIRS) {
		const svgFiles = readSvgDirectory(FOLDER_PATH)

		const iconType = path.basename(FOLDER_PATH)
		if (iconType.startsWith('_')) {
			continue
		}

		for (const svgFile of svgFiles) {
			const content = fs.readFileSync(path.resolve(FOLDER_PATH, svgFile), 'utf-8')
			const optimizedSvg = await processSvg(content, svgFile, iconType)
			writeSvgFile(svgFile, OUTPUT_OPTIMIZED_ICONS_DIR, optimizedSvg)
		}
	}
}

optimizeSvgFiles()
	.then(() => {
		console.log('SVG optimization complete.')
	})
	.catch((error) => {
		console.error('Error optimizing SVGs:', error)
	})
