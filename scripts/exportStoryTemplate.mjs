import { toPascalCase } from './helpers.mjs'

export default ({ iconName, iconOutputFolderName, isFillIcon, storyGroupName = 'testing', iconType }) => {
	const iconNamePascalCase = toPascalCase(iconName)

	const forFill = isFillIcon
		? ` export const FillColor: Story = {
        args: {
            fillColor: "red",
        },
    }`
		: ''

	const forColorTemplate =
		iconType === 'outline'
			? ` 
            export const Red: Story = {
                args: {
                    color: 'red',
                       },
            }`
			: `
            export const Red: Story = {
                args: {
                    className: 'text-red-500',
                },
            }
            `

	return `import type { Meta, StoryObj } from '@storybook/react'
    import React from 'react'
    import IconBorder from '../components/IconBorder'
    import IconBackground from '../components/IconBackground'
    import ${iconNamePascalCase} from '../${iconOutputFolderName}/${iconName}'
    
    const meta: Meta<typeof ${iconNamePascalCase}> = {
        component: ${iconNamePascalCase},
        title: '${storyGroupName}/${iconNamePascalCase}',
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
    type Story = StoryObj<typeof ${iconNamePascalCase}>
    
    export const Default: Story = {}
    
   ${forColorTemplate}
    
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
 
    ${forFill}

    export const ClassName: Story = {
        args: {
            className: 'text-red-400 stroke-1 hover:text-blue-400',
        },
    }
    
    `
}
