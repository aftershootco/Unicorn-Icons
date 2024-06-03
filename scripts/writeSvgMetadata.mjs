import fs from 'fs'
import getArgumentOptions from 'minimist'
import path, { basename } from 'path'

import { getDirectories, readSvgDirectory } from './helpers.mjs'

const UNICON_CONFIG = JSON.parse(fs.readFileSync('./unicons.config.json', 'utf8'))

const INPUT_ICON_DIR = UNICON_CONFIG.icon_input_dir
const svgProcessOptions = UNICON_CONFIG.svg_process_options

const ICONS_INPUT_BASE_PATH = path.resolve(process.cwd(), INPUT_ICON_DIR)

const ICON_DIRS = await getDirectories(ICONS_INPUT_BASE_PATH)

const cliArguments = getArgumentOptions(process.argv.slice(2))

const { outpuDir = '/icons-metadata' } = cliArguments

const OUTPUT_DIR = path.resolve(process.cwd(), outpuDir)

// Ensure the optimized directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
	fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

console.log(`Writing Metadata...`)

// const svgFiles = readSvgDirectory(ICONS_INPUT_PATH)

const writeFiles = async () => {
	for (const FOLDER_PATH of ICON_DIRS) {
		const svgFiles = readSvgDirectory(FOLDER_PATH)

		const iconType = path.basename(FOLDER_PATH)
		if (iconType.startsWith('_')) {
			continue
		}

		for (const svgFile of svgFiles) {
			const baseName = basename(svgFile, '.svg')

			const svgJSON = {
				icon_type: iconType,
				name: baseName,
				svg_process_option: svgProcessOptions[iconType],
			}

			const content = JSON.stringify(svgJSON, null, 2)
			const jsonName = baseName + '.json'

			fs.writeFileSync(path.join(OUTPUT_DIR, jsonName), content, 'utf-8')
		}
	}
}

writeFiles()
	.then(() => {
		console.log('SVG Metadata generated.')
	})
	.catch((error) => {
		console.error('Error generating metadata.', error)
	})
