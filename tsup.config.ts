import { defineConfig } from 'tsup'

export default defineConfig({
	loader: {
		'.jpg': 'base64',
		'.png': 'base64',
		'.svg': 'file',
		'.webp': 'file',
	},
	sourcemap: true,
	treeshake: true,
	external: ['./src/img/**/*'],
})
