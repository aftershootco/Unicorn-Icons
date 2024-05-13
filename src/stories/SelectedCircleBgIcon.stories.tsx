import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SelectedCircleBgIcon } from '../icons'

const meta: Meta<typeof SelectedCircleBgIcon> = {
	component: SelectedCircleBgIcon,
	title: 'culling/SelectedCircleBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof SelectedCircleBgIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowBg: Story = {
	args: {
		bgColor: 'yellow',
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
