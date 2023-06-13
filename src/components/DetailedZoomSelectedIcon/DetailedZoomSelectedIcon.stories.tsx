import { Meta, Story } from '@storybook/react'
import React from 'react'
import { DetailedZoomSelectedIcon } from '..'

export default {
	title: 'component/DetailedZoomSelectedIcon',
	component: DetailedZoomSelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <DetailedZoomSelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }
