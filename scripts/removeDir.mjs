import fs from 'fs'
import getArgumentOptions from 'minimist'

const cliArguments = getArgumentOptions(process.argv.slice(2))

const { targetDir } = cliArguments

if (!targetDir) {
	console.error('targetDir is required')
	process.exit(1)
}

fs.rmSync(targetDir, { recursive: true })

console.log(`DIRECTORY removed - ${targetDir}`)
