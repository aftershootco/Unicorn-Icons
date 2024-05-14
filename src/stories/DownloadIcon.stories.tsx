import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DownloadIcon } from '../icons'

const meta: Meta<typeof DownloadIcon> = {
	component: DownloadIcon,
	title: 'culling/DownloadIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DownloadIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const inActive: Story = {
	args: {
		inActive: true,
	},
}

export const accentColor: Story = {
	args: {
		accentColor: '#0977e0',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
