import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MailBgIcon } from '../icons/general/MailBgIcon'

const meta: Meta<typeof MailBgIcon> = {
	component: MailBgIcon,
	title: 'general/MailBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof MailBgIcon>

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
