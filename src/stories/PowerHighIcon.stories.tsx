import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PowerHighIcon } from '../icons'

const meta: Meta<typeof PowerHighIcon> = {
	component: PowerHighIcon,
	title: 'enable/PowerHighIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof PowerHighIcon>

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
