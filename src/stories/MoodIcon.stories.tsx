import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MoodIcon } from '../icons'

const meta: Meta<typeof MoodIcon> = {
	component: MoodIcon,
	title: 'edit/MoodIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof MoodIcon>

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

export const greenAccent: Story = {
	args: {
		accentColor: 'green',
	},
}

export const Large: Story = {
	args: {
		size: 100,
	},
}
