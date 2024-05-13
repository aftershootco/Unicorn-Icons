import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CrownBgIcon } from '../icons'

const meta: Meta<typeof CrownBgIcon> = {
	component: CrownBgIcon,
	title: 'general/CrownBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof CrownBgIcon>

export const Default: Story = {}

export const Red: Story = {
	args: {
		color: 'red',
	},
}

export const greenBg: Story = {
	args: {
		bgColor: 'green',
	},
}

export const Large: Story = {
	args: {
		size: 30,
	},
}
