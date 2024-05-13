import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ThumbUpBgIcon } from '../icons'

const meta: Meta<typeof ThumbUpBgIcon> = {
	component: ThumbUpBgIcon,
	title: 'general/ThumbUpBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ThumbUpBgIcon>

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

export const greenBg: Story = {
	args: {
		bgColor: 'green',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
