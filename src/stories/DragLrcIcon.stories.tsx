import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DragLrcIcon } from '../icons'

const meta: Meta<typeof DragLrcIcon> = {
	component: DragLrcIcon,
	title: 'logo/DragLrcIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DragLrcIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
