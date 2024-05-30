import fs from 'fs'
import getArgumentOptions from 'minimist'
import path from 'path'
import { readSvgDirectory, writeSvgFile } from './helpers.mjs'
import processSvg from './processSvg.mjs'

const ICONS_DIR = path.resolve(process.cwd(), 'icons-original/outline')
const OPTIMIZED_ICONS_DIR = path.resolve(process.cwd(), 'icons-optimized')

const cliArguments = getArgumentOptions(process.argv.slice(2))

const { iconType = 'outline' } = cliArguments

// Ensure the optimized directory exists
if (!fs.existsSync(OPTIMIZED_ICONS_DIR)) {
	fs.mkdirSync(OPTIMIZED_ICONS_DIR, { recursive: true })
}

console.log(`Optimizing SVGs...`)

const svgFiles = readSvgDirectory(ICONS_DIR)

const optimizeSvgFiles = async () => {
	for (const svgFile of svgFiles) {
		const content = fs.readFileSync(path.join(ICONS_DIR, svgFile), 'utf-8')
		const optimizedSvg = await processSvg(content, svgFile, iconType)
		writeSvgFile(svgFile, OPTIMIZED_ICONS_DIR, optimizedSvg)
	}
}

optimizeSvgFiles()
	.then(() => {
		console.log('SVG optimization complete.')
	})
	.catch((error) => {
		console.error('Error optimizing SVGs:', error)
	})
