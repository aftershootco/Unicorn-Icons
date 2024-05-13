import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { GridThreeLitIcon } from '../icons'

const meta: Meta<typeof GridThreeLitIcon> = {
	component: GridThreeLitIcon,
	title: 'culling/GridThreeLitIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof GridThreeLitIcon>

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
