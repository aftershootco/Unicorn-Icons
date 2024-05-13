import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SelectedFillCircleIcon } from '../icons'

const meta: Meta<typeof SelectedFillCircleIcon> = {
	component: SelectedFillCircleIcon,
	title: 'culling/SelectedFillCircleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof SelectedFillCircleIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowFill: Story = {
	args: {
		fillColor: 'yellow',
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
