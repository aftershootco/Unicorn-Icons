import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { LrUploadIcon } from '../new-components/LrUploadIcon'

const meta: Meta<typeof LrUploadIcon> = {
  component: LrUploadIcon,
  title: 'NEW/LrUploadIcon',
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof LrUploadIcon>

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
