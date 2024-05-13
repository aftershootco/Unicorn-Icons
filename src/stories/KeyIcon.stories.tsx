import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { KeyIcon } from '../icons'

const meta: Meta<typeof KeyIcon> = {
	component: KeyIcon,
	title: 'culling/KeyIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof KeyIcon>

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
