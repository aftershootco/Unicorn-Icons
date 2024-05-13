import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SortOptionAlphaIcon } from '../icons'

const meta: Meta<typeof SortOptionAlphaIcon> = {
	component: SortOptionAlphaIcon,
	title: 'culling/SortOptionAlphaIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof SortOptionAlphaIcon>

export const Default: Story = {}

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
