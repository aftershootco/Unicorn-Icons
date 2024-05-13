import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ImageIcon } from '../icons'

const meta: Meta<typeof ImageIcon> = {
	component: ImageIcon,
	title: 'culling/ImageIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ImageIcon>

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
