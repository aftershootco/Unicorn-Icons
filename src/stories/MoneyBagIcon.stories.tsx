import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MoneyBagIcon } from '../icons'

const meta: Meta<typeof MoneyBagIcon> = {
	component: MoneyBagIcon,
	title: 'culling/MoneyBagIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof MoneyBagIcon>

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
