import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CloseCircleIcon } from '../icons'

const meta: Meta<typeof CloseCircleIcon> = {
	component: CloseCircleIcon,
	title: 'general/CloseCircleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CloseCircleIcon>

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
