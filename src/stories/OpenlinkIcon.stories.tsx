import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { OpenlinkIcon } from '../Icons'

const meta: Meta<typeof OpenlinkIcon> = {
	component: OpenlinkIcon,
	title: 'icons/OpenlinkIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof OpenlinkIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
