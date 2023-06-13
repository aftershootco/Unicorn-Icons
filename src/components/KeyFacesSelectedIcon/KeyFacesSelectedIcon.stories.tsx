import { Meta, Story } from '@storybook/react'
import React from 'react'
import { KeyFacesSelectedIcon } from '..'

export default {
	title: 'component/KeyFacesSelectedIcon',
	component: KeyFacesSelectedIcon,
} as Meta

const Template: Story<React.HtmlHTMLAttributes<any>> = (args: React.HtmlHTMLAttributes<any>) => <KeyFacesSelectedIcon {...args} />

const Default = Template.bind({})
Default.args = {
	header: 'Header',
	body: 'Body',
}

export { Default }
