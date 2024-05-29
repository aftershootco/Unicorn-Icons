import type { Meta, StoryObj } from '@storybook/react'
    import React from 'react'
    
    import WithBg from '../components/WithBg'
    import CurveArrow from '../icons-neo/curveArrow'
    
    const meta: Meta<typeof CurveArrow> = {
        component: CurveArrow,
        title: 'omega/CurveArrow',
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
    type Story = StoryObj<typeof CurveArrow>
    
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
    
    export const ClassName: Story = {
        args: {
            className: 'text-red-500 w-[70px] h-[70px]',
        },
    }

    export const Hover: Story = {
        args: {
            className: 'hover:text-green-500 cursor-pointer',
        },
    }

    export const FillColor: Story = {
        args: {
            fillColor: 'fill-red-500',
        },
    }
    
    