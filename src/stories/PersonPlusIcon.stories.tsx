import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PersonPlusIcon } from '../icons/general/PersonPlusIcon'

const meta: Meta<typeof PersonPlusIcon> = {
	component: PersonPlusIcon,
	title: 'general/PersonPlusIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof PersonPlusIcon>

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
