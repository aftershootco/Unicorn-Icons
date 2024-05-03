import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { KeyCircleIcon } from '../icons'

const meta: Meta<typeof KeyCircleIcon> = {
	component: KeyCircleIcon,
	title: 'culling/KeyCircleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof KeyCircleIcon>

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
