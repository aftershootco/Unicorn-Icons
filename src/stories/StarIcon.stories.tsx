import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { StarIcon } from '../icons'

const meta: Meta<typeof StarIcon> = {
	component: StarIcon,
	title: 'general/StarIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof StarIcon>

export const Default: Story = {}

export const Yellow: Story = {
	args: {
		color: 'yellow',
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
