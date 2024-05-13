import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LightroomClassicIcon } from '../icons'

const meta: Meta<typeof LightroomClassicIcon> = {
	component: LightroomClassicIcon,
	title: 'logo/LightroomClassicIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof LightroomClassicIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
