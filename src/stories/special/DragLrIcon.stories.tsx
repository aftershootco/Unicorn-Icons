import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DragLrIcon } from '../../Icons'

const meta: Meta<typeof DragLrIcon> = {
	component: DragLrIcon,
	title: 'special/DragLrIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DragLrIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}