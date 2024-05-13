import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CheckFillIcon } from '../icons'

const meta: Meta<typeof CheckFillIcon> = {
	component: CheckFillIcon,
	title: 'general/CheckFillIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CheckFillIcon>

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

export const yellowFill: Story = {
	args: {
		color: 'black',
		fillColor: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
