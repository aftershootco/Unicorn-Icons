import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AlertFillTriangleIcon } from '../icons'

const meta: Meta<typeof AlertFillTriangleIcon> = {
	component: AlertFillTriangleIcon,
	title: 'general/AlertFillTriangleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AlertFillTriangleIcon>

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

export const greenFill: Story = {
	args: {
		fillColor: 'green',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
