import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CopyIcon } from '../icons'

const meta: Meta<typeof CopyIcon> = {
	component: CopyIcon,
	title: 'general/CopyIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CopyIcon>

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
