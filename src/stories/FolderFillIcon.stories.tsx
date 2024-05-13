import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FolderFillIcon } from '../icons'

const meta: Meta<typeof FolderFillIcon> = {
	component: FolderFillIcon,
	title: 'general/FolderFillIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FolderFillIcon>

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

export const Large: Story = {
	args: {
		size: 30,
	},
}
