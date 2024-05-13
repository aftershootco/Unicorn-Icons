import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ImageCrossedBgIcon } from '../icons'

const meta: Meta<typeof ImageCrossedBgIcon> = {
	component: ImageCrossedBgIcon,
	title: 'culling/ImageCrossedBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ImageCrossedBgIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const redBg: Story = {
	args: {
		bgColor: 'red',
	},
}

export const InActive: Story = {
	args: {
		inActive: true,
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
