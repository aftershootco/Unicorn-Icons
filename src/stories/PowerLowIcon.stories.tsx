import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PowerLowIcon } from '../icons'

const meta: Meta<typeof PowerLowIcon> = {
	component: PowerLowIcon,
	title: 'enable/PowerLowIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof PowerLowIcon>

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
