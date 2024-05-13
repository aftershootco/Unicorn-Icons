import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ConfettiLeftScreen } from '../icons'

const meta: Meta<typeof ConfettiLeftScreen> = {
	component: ConfettiLeftScreen,
	title: 'edit/ConfettiLeftScreen',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ConfettiLeftScreen>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 500,
	},
}
