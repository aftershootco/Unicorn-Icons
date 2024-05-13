import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ThumbDownBgIcon } from '../icons'

const meta: Meta<typeof ThumbDownBgIcon> = {
	component: ThumbDownBgIcon,
	title: 'general/ThumbDownBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ThumbDownBgIcon>

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
