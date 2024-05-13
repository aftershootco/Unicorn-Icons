import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { GoogleColorIcon } from '../icons'

const meta: Meta<typeof GoogleColorIcon> = {
	component: GoogleColorIcon,
	title: 'social/GoogleColorIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof GoogleColorIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
