import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FacebookIcon } from '../icons'

const meta: Meta<typeof FacebookIcon> = {
	component: FacebookIcon,
	title: 'social/FacebookIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FacebookIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
