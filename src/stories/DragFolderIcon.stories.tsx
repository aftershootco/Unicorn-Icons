import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DragFolderIcon } from '../icons'

const meta: Meta<typeof DragFolderIcon> = {
	component: DragFolderIcon,
	title: 'logo/DragFolderIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DragFolderIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
