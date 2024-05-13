import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ConfettiSideScreen } from '../icons'

const meta: Meta<typeof ConfettiSideScreen> = {
	component: ConfettiSideScreen,
	title: 'edit/ConfettiSideScreen',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ConfettiSideScreen>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 500,
	},
}
