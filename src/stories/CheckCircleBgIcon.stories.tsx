import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CheckCircleBgIcon } from '../icons'

const meta: Meta<typeof CheckCircleBgIcon> = {
	component: CheckCircleBgIcon,
	title: 'general/CheckCircleBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CheckCircleBgIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowBg: Story = {
	args: {
		color: 'black',
		bgColor: 'yellow',
	},
}

export const inActive: Story = {
	args: {
		inActive: true,
	},
}

export const bgOpacity: Story = {
	args: {
		bgOpacity: 1,
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
