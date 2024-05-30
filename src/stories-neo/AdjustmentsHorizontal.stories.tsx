import type { Meta, StoryObj } from '@storybook/react'
    import React from 'react'
    
    import WithBg from '../components/WithBg'
    import AdjustmentsHorizontal from '../icons-neo/adjustments-horizontal'
    
    const meta: Meta<typeof AdjustmentsHorizontal> = {
        component: AdjustmentsHorizontal,
        title: 'omega/AdjustmentsHorizontal',
        decorators: [
            (Story) => (
                <div style={{ margin: '1rem', display: 'flex', alignContent: 'center', gap: 6 }}>
                    <Story />
                    <WithBg>
                        <Story />
                    </WithBg>
                    <WithBg bgBorderRadius={2}>
                        <Story />
                    </WithBg>
                </div>
            ),
        ],
    }
    
    export default meta
    type Story = StoryObj<typeof AdjustmentsHorizontal>
    
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
            size: 50,
        },
    }
    
    export const Hover: Story = {
        args: {
            className: 'group-hover:text-green-500 hover:text-green-500 cursor-pointer',
        },
    }
 
    

    export const ClassName: Story = {
        args: {
            className: 'text-red-500 w-[50px] h-[50px]',
        },
    }
    
    