import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ArrowUpIcon } from '../Icons'

const meta: Meta<typeof ArrowUpIcon> = {
	component: ArrowUpIcon,
	title: 'Icons/ArrowUpIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof ArrowUpIcon>

export const Primary: Story = {}
