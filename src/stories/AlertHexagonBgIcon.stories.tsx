import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AlertHexagonBgIcon } from '../icons'

const meta: Meta<typeof AlertHexagonBgIcon> = {
	component: AlertHexagonBgIcon,
	title: 'general/AlertHexagonBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AlertHexagonBgIcon>

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

export const bgOpacity: Story = {
	args: {
		bgOpacity: 1,
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
