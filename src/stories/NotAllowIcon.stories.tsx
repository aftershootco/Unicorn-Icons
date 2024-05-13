import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { NotAllowIcon } from '../icons'

const meta: Meta<typeof NotAllowIcon> = {
	component: NotAllowIcon,
	title: 'culling/NotAllowIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof NotAllowIcon>

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
