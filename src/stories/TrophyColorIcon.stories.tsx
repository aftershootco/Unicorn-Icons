import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { TrophyColorIcon } from '../icons/general/TrophyColorIcon'

const meta: Meta<typeof TrophyColorIcon> = {
	component: TrophyColorIcon,
	title: 'general/TrophyColorIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof TrophyColorIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
