import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DragCaptureOneIcon } from '../../Icons'

const meta: Meta<typeof DragCaptureOneIcon> = {
	component: DragCaptureOneIcon,
	title: 'Test/DragCaptureOneIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DragCaptureOneIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
