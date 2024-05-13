import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { DeleteBgIcon } from '../icons'

const meta: Meta<typeof DeleteBgIcon> = {
	component: DeleteBgIcon,
	title: 'general/DeleteBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof DeleteBgIcon>

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
		color: 'white',
		bgColor: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
