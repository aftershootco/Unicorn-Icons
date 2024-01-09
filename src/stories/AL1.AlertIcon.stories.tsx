import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import AlertIcon from '../Icons/special/AlertIcon'

const meta: Meta<typeof AlertIcon> = {
	component: AlertIcon,
	title: 'Special/AlertIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AlertIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}