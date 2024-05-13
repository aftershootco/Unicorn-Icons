import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ChevronDownIcon } from '../icons'

const meta: Meta<typeof ChevronDownIcon> = {
	component: ChevronDownIcon,
	title: 'general/ChevronDownIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ChevronDownIcon>

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
