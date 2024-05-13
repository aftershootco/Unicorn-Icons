import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { GroupingLessIcon } from '../icons'

const meta: Meta<typeof GroupingLessIcon> = {
	component: GroupingLessIcon,
	title: 'culling/GroupingLessIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof GroupingLessIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 300,
	},
}
