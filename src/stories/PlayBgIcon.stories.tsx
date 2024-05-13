import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PlayBgIcon } from '../icons'

const meta: Meta<typeof PlayBgIcon> = {
	component: PlayBgIcon,
	title: 'general/PlayBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof PlayBgIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const bgRed: Story = {
	args: {
		bgColor: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
