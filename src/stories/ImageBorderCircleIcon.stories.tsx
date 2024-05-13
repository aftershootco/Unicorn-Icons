import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ImageBorderCircleIcon } from '../icons'

const meta: Meta<typeof ImageBorderCircleIcon> = {
	component: ImageBorderCircleIcon,
	title: 'culling/ImageBorderCircleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ImageBorderCircleIcon>

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
