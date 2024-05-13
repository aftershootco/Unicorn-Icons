import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FailFillBgIcon } from '../icons'

const meta: Meta<typeof FailFillBgIcon> = {
	component: FailFillBgIcon,
	title: 'edit/FailFillBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FailFillBgIcon>

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

export const greenFill: Story = {
	args: {
		fillColor: 'green',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
