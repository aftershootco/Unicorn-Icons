import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import AdjustProfile from '../icons-neo/adjust_profile'

const meta: Meta<typeof AdjustProfile> = {
	component: AdjustProfile,
	title: 'neo/AdjustProfile',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AdjustProfile>

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
