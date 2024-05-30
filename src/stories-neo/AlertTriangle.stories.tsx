import type { Meta, StoryObj } from '@storybook/react'
    import React from 'react'
    
    import WithBg from '../components/WithBg'
    import AlertTriangle from '../icons-neo/alert-triangle'
    
    const meta: Meta<typeof AlertTriangle> = {
        component: AlertTriangle,
        title: 'omega/AlertTriangle',
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
    type Story = StoryObj<typeof AlertTriangle>
    
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
    
    