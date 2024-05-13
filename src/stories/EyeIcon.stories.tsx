import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { EyeIcon } from '../icons'

const meta: Meta<typeof EyeIcon> = {
	component: EyeIcon,
	title: 'culling/EyeIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof EyeIcon>

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
