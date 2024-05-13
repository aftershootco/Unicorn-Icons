import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SortDuplicateCircleIcon } from '../icons'

const meta: Meta<typeof SortDuplicateCircleIcon> = {
	component: SortDuplicateCircleIcon,
	title: 'culling/SortDuplicateCircleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof SortDuplicateCircleIcon>

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
