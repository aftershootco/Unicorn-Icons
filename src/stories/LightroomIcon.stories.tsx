import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LightroomIcon } from '../icons'

const meta: Meta<typeof LightroomIcon> = {
	component: LightroomIcon,
	title: 'logo/LightroomIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LightroomIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
