import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AlertTriangleBgIcon } from '../icons'

const meta: Meta<typeof AlertTriangleBgIcon> = {
	component: AlertTriangleBgIcon,
	title: 'general/AlertTriangleBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AlertTriangleBgIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const greenBg: Story = {
	args: {
		bgColor: 'green',
	},
}

export const InActive: Story = {
	args: {
		inActive: true,
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
