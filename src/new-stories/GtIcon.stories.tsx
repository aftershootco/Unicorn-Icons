import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { GtIcon } from '../new-components'

const meta: Meta<typeof GtIcon> = {
  component: GtIcon,
  title: 'NEW/GtIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof GtIcon>

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
};
export const Large: Story = {
  args: {
    size: 30,
  },
}
