import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { EditsLogoTextIcon } from '../icons'

const meta: Meta<typeof EditsLogoTextIcon> = {
	component: EditsLogoTextIcon,
	title: 'logo/EditsLogoTextIcon',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem' }}>
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof EditsLogoTextIcon>

export const Default: Story = {}

export const Large: Story = {
	args: {
		size: 100,
	},
}
