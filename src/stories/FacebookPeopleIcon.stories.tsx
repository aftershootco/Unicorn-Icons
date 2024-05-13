import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FacebookPeopleIcon } from '../icons'

const meta: Meta<typeof FacebookPeopleIcon> = {
	component: FacebookPeopleIcon,
	title: 'culling/FacebookPeopleIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FacebookPeopleIcon>

export const Default: Story = {
	args: {
		size: 100,
	},
}

export const Large: Story = {
	args: {
		size: 300,
	},
}
