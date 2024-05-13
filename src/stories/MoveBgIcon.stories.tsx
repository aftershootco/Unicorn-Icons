import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MoveBgIcon } from '../icons'

const meta: Meta<typeof MoveBgIcon> = {
	component: MoveBgIcon,
	title: 'culling/MoveBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof MoveBgIcon>

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

export const yellowBg: Story = {
	args: {
		bgColor: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
