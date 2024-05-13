import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { UploadCloudBgIcon } from '../icons'

const meta: Meta<typeof UploadCloudBgIcon> = {
	component: UploadCloudBgIcon,
	title: 'general/UploadCloudBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof UploadCloudBgIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowBg: Story = {
	args: {
		color: 'black',
		bgColor: 'yellow',
	},
}

export const inActive: Story = {
	args: {
		inActive: true,
	},
}

export const redAccent: Story = {
	args: {
		accentColor: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
