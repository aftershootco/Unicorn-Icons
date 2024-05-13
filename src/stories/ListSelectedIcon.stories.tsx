import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ListSelectedIcon } from '../icons'

const meta: Meta<typeof ListSelectedIcon> = {
	component: ListSelectedIcon,
	title: 'culling/ListSelectedIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ListSelectedIcon>

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
