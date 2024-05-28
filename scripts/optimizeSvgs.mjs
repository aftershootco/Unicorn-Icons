import fs from 'fs'
import path from 'path'
import { readSvgDirectory, writeSvgFile } from './helpers.mjs'
import processSvg from './processSvg.mjs'

const ICONS_DIR = path.resolve(process.cwd(), 'icons')

if (!fs.existsSync(ICONS_DIR)) {
	fs.mkdirSync(ICONS_DIR, { recursive: true })
}

console.log(`Optimizing SVGs...`)

const svgFiles = readSvgDirectory(ICONS_DIR)

svgFiles.forEach((svgFile) => {
	const content = fs.readFileSync(path.join(ICONS_DIR, svgFile))
	processSvg(content, svgFile).then((svg) => writeSvgFile(svgFile, ICONS_DIR, svg))
})
