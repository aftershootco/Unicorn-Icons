import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CreditIcon } from '../icons'

const meta: Meta<typeof CreditIcon> = {
	component: CreditIcon,
	title: 'general/CreditIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta

type Story = StoryObj<typeof CreditIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
