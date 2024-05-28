import fs from 'fs'
import getArgumentOptions from 'minimist'
import path from 'path'

import { getCurrentDirPath, readSvgDirectory } from './helpers.mjs'

const cliArguments = getArgumentOptions(process.argv.slice(2))

const currentDir = getCurrentDirPath(import.meta.url)

const ICONS_DIR = path.resolve(currentDir, '../icons')

const OUTPUT_DIR = path.resolve(process.cwd(), cliArguments.output || './src')

if (!fs.existsSync(OUTPUT_DIR)) {
	fs.mkdirSync(OUTPUT_DIR)
}

const svgFiles = readSvgDirectory(ICONS_DIR)

console.log('------>', svgFiles)
//
