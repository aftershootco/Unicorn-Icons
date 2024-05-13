import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { UploadCloudIcon } from '../icons'

const meta: Meta<typeof UploadCloudIcon> = {
	component: UploadCloudIcon,
	title: 'general/UploadCloudIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof UploadCloudIcon>

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
