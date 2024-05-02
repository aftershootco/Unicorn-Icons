import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ConfettiRightScreen } from '../icons'

const meta: Meta<typeof ConfettiRightScreen> = {
	component: ConfettiRightScreen,
	title: 'edit/ConfettiRightScreen',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ConfettiRightScreen>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 500,
	},
}
