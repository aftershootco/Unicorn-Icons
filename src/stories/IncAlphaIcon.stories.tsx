import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { IncAlphaIcon } from '../Icons'

const meta: Meta<typeof IncAlphaIcon> = {
	component: IncAlphaIcon,
	title: 'Icons/IncAlphaIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof IncAlphaIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
