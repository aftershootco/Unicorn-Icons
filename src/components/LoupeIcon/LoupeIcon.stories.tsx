import { Meta, Story } from '@storybook/react'
import React from 'react'
import { LoupeIcon } from '..'

export default {
	title: 'component/LoupeIcon',
	component: LoupeIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <LoupeIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }
