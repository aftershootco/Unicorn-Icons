import { Meta, Story } from '@storybook/react'
import React from 'react'
import { TwitterColorIcon } from '..'

export default {
	title: 'component/TwitterColorIcon',
	component: TwitterColorIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <TwitterColorIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }
