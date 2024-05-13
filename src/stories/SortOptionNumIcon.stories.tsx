import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SortOptionNumIcon } from '../icons'

const meta: Meta<typeof SortOptionNumIcon> = {
	component: SortOptionNumIcon,
	title: 'culling/SortOptionNumIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof SortOptionNumIcon>

export const Default: Story = {}

export const Yellow: Story = {
	args: {
		color: 'yellow',
	},
}
export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const bgGreen: Story = {
	args: {
		bgColor: 'green',
	},
}

export const InActive: Story = {
	args: {
		inActive: true,
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
