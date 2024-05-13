import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { NotSelectedCircleIcon } from '../icons'

const meta: Meta<typeof NotSelectedCircleIcon> = {
	component: NotSelectedCircleIcon,
	title: 'culling/NotSelectedCircleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof NotSelectedCircleIcon>

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
