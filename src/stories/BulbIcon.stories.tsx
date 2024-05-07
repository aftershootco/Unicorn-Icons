import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { BulbIcon } from '../icons/general/BulbIcon'

const meta: Meta<typeof BulbIcon> = {
	component: BulbIcon,
	title: 'general/BulbIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof BulbIcon>

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
export const Large: Story = {
	args: {
		size: 30,
	},
}
