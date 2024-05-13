import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CheckBoxPartialIcon } from '../icons'

const meta: Meta<typeof CheckBoxPartialIcon> = {
	component: CheckBoxPartialIcon,
	title: 'edit/CheckBoxPartialIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CheckBoxPartialIcon>

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
