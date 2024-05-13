import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CheckBoxIcon } from '../icons'

const meta: Meta<typeof CheckBoxIcon> = {
	component: CheckBoxIcon,
	title: 'edit/CheckBoxIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CheckBoxIcon>

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

export const yellowBg: Story = {
	args: {
		color: 'black',
		bgColor: 'yellow',
	},
}

export const yellowAccent: Story = {
	args: {
		color: 'black',
		accentColor: 'yellow',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
