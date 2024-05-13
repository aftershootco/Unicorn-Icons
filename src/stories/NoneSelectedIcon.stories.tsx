import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { NoneSelectedIcon } from '../icons'

const meta: Meta<typeof NoneSelectedIcon> = {
	component: NoneSelectedIcon,
	title: 'culling/NoneSelectedIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof NoneSelectedIcon>

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
