import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ThunderBgIcon } from '../icons'

const meta: Meta<typeof ThunderBgIcon> = {
	component: ThunderBgIcon,
	title: 'culling/ThunderBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ThunderBgIcon>

export const Default: Story = {}

export const yellowBg: Story = {
	args: {
		bgColor: 'yellow',
	},
}

export const inActive: Story = {
	args: {
		inActive: false,
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
