import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ConfettiIcon } from '../icons/general/ConfettiIcon'

const meta: Meta<typeof ConfettiIcon> = {
	component: ConfettiIcon,
	title: 'general/ConfettiIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ConfettiIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const inActive: Story = {
	args: {
		inActive: true,
	},
}
export const Large: Story = {
	args: {
		size: 30,
	},
}
