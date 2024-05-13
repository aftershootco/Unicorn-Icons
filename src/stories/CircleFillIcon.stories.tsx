import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CircleFillIcon } from '../icons'

const meta: Meta<typeof CircleFillIcon> = {
	component: CircleFillIcon,
	title: 'general/CircleFillIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CircleFillIcon>

export const Default: Story = {}

export const yellowFill: Story = {
	args: {
		fillColor: 'yellow',
	},
}

export const inActive: Story = {
	args: {
		inActive: true,
		fillColor: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
