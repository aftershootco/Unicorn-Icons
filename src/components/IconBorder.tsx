import React from 'react'
import { cn } from '../utils/cn'

interface IconBorderProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
	className?: string
}

const IconBorder = (props: IconBorderProps) => {
	const { children, className, ...rest } = props

	return (
		<div
			className={cn(
				'flex items-center border-2 p-2 justify-center group box-border w-10 h-10 border-[#555555] rounded-full bg-transparent',
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	)
}

export default IconBorder
