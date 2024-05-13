import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MaximizeIcon } from '../icons'

const meta: Meta<typeof MaximizeIcon> = {
	component: MaximizeIcon,
	title: 'culling/MaximizeIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof MaximizeIcon>

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
