import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AfterShootLogoIcon } from '../icons'

const meta: Meta<typeof AfterShootLogoIcon> = {
	component: AfterShootLogoIcon,
	title: 'logo/AfterShootLogoIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof AfterShootLogoIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 30,
	},
}
