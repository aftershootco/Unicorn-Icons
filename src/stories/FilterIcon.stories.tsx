import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import FilterIcon from '../icons/culling/FilterIcon'

const meta: Meta<typeof FilterIcon> = {
	component: FilterIcon,
	title: 'culling/FilterIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FilterIcon>

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
