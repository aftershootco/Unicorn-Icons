import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { FiveStarBgIcon } from '../icons'

const meta: Meta<typeof FiveStarBgIcon> = {
	component: FiveStarBgIcon,
	title: 'culling/FiveStarBgIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof FiveStarBgIcon>

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

export const WhiteBg: Story = {
	args: {
		color: 'black',
		bgColor: 'white',
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
