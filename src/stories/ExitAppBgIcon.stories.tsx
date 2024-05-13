import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ExitAppBgIcon } from '../icons'

const meta: Meta<typeof ExitAppBgIcon> = {
	component: ExitAppBgIcon,
	title: 'culling/ExitAppBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ExitAppBgIcon>

export const Default: Story = {}

export const red: Story = {
	args: {
		color: 'red',
	},
}

export const yellowBg: Story = {
	args: {
		color: 'black',
		bgColor: 'yellow',
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
