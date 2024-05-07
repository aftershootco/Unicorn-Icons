import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { C1UploadIcon } from '../icons'

const meta: Meta<typeof C1UploadIcon> = {
	component: C1UploadIcon,
	title: 'general/C1UploadIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof C1UploadIcon>

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
