import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { GroupingMoreIcon } from '../icons'

const meta: Meta<typeof GroupingMoreIcon> = {
	component: GroupingMoreIcon,
	title: 'culling/GroupingMoreIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof GroupingMoreIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 300,
	},
}
