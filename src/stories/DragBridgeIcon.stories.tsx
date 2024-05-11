import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DragBridgeIcon } from '../icons'

const meta: Meta<typeof DragBridgeIcon> = {
	component: DragBridgeIcon,
	title: 'logo/DragBridgeIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DragBridgeIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
