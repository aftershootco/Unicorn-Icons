import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import IconBackground from '../components/IconBackground'
import IconBorder from '../components/IconBorder'
import X from '../icons-neo/x'

const meta: Meta<typeof X> = {
	component: X,
	title: 'omega/X',
	decorators: [
		(Story) => (
			<div style={{ margin: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
				<Story />
				<IconBorder>
					<Story />
				</IconBorder>
				<IconBackground>
					<Story />
				</IconBackground>
				<IconBackground withBorder>
					<Story />
				</IconBackground>
				<IconBackground className='rounded-sm'>
					<Story />
				</IconBackground>
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof X>

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

export const Hover: Story = {
	args: {
		className: 'group-hover:text-green-500 hover:text-green-500 cursor-pointer',
	},
}

export const ClassName: Story = {
	args: {
		className: 'text-red-400 stroke-[5px] hover:text-blue-400',
	},
}
