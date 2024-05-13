import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CrossIcon } from '../icons'

const meta: Meta<typeof CrossIcon> = {
	component: CrossIcon,
	title: 'general/CrossIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CrossIcon>

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
		size: 40,
	},
}

export const onhover: Story = {
	args: {
		className: 'hover:scale w-[1000px]',
	},
}
