import { Meta, Story } from '@storybook/react'
import React from 'react'
import { InfoIconTransparent } from '..'

export default {
	title: 'component/InfoIconTransparent',
	component: InfoIconTransparent,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <InfoIconTransparent {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }