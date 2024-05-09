import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AlertFillIcon } from '../icons'

const meta: Meta<typeof AlertFillIcon> = {
	component: AlertFillIcon,
	title: 'general/AlertFillIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AlertFillIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowFill: Story = {
	args: {
		color: 'red',
		fillColor: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
