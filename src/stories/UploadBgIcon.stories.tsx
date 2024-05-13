import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { UploadBgIcon } from '../icons'

const meta: Meta<typeof UploadBgIcon> = {
	component: UploadBgIcon,
	title: 'general/UploadBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof UploadBgIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowBg: Story = {
	args: {
		bgColor: 'yellow',
	},
}

export const inActive: Story = {
	args: {
		inActive: true,
	},
}

export const greenAccent: Story = {
	args: {
		accentColor: 'green',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
