import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ReloadIcon } from '../icons'

const meta: Meta<typeof ReloadIcon> = {
	component: ReloadIcon,
	title: 'culling/ReloadIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ReloadIcon>

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
