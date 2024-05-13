import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { RightArrowBgIcon } from '../icons'

const meta: Meta<typeof RightArrowBgIcon> = {
	component: RightArrowBgIcon,
	title: 'edit/RightArrowBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof RightArrowBgIcon>

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

export const Large: Story = {
	args: {
		size: 30,
	},
}
