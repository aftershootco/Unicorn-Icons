import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PowerMidIcon } from '../icons'

const meta: Meta<typeof PowerMidIcon> = {
	component: PowerMidIcon,
	title: 'enable/PowerMidIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof PowerMidIcon>

export const Default: Story = {}

export const Enable: Story = {
	args: {
		isFill: true,
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
