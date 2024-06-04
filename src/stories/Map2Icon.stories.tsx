import type { Meta, StoryObj } from '@storybook/react'
    import React from 'react'
    import IconBorder from '../components/IconBorder'
    import IconBackground from '../components/IconBackground'
    import Map2Icon from '../icons/map-2-icon'
    
    const meta: Meta<typeof Map2Icon> = {
        component: Map2Icon,
        title: 'outline/Map2Icon',
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
    type Story = StoryObj<typeof Map2Icon>
    
    export const Default: Story = {}
    
    
            export const Color: Story = {
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
            className: 'text-red-400 stroke-1 hover:text-blue-400',
        },
    }
    
    