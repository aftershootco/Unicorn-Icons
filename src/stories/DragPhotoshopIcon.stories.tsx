import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DragPhotoshopIcon } from '../icons'

const meta: Meta<typeof DragPhotoshopIcon> = {
	component: DragPhotoshopIcon,
	title: 'logo/DragPhotoshopIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DragPhotoshopIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
