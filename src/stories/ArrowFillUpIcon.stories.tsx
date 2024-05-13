import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ArrowFillUpIcon } from '../icons'

const meta: Meta<typeof ArrowFillUpIcon> = {
	component: ArrowFillUpIcon,
	title: 'general/ArrowFillUpIcon(secondary)',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ArrowFillUpIcon>

export const Default: Story = {
	args: {
		variant: 'secondary',
	},
}

export const Red: Story = {
	args: {
		color: 'red',
		variant: 'secondary',
	},
}

export const Large: Story = {
	args: {
		size: 30,
		variant: 'secondary',
	},
}

export const fillRed: Story = {
	args: {
		fillColor: 'red',
		variant: 'secondary',
	},
}
