import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FacebookBgIcon } from '../icons'

const meta: Meta<typeof FacebookBgIcon> = {
	component: FacebookBgIcon,
	title: 'social/FacebookBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FacebookBgIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowBg: Story = {
	args: {
		color: '#1DA1F2',
		bgColor: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
