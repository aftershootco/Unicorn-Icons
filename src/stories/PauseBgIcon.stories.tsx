import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PauseBgIcon } from '../icons'

const meta: Meta<typeof PauseBgIcon> = {
	component: PauseBgIcon,
	title: 'general/PauseBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof PauseBgIcon>

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
