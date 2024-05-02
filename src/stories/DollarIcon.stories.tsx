import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DollarIcon } from '../icons/general/DollarIcon'

const meta: Meta<typeof DollarIcon> = {
	component: DollarIcon,
	title: 'General/DollarIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DollarIcon>

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
