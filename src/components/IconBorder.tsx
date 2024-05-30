import React from 'react'
import { cn } from '../utils/cn'

type IconBorderProps = {
	children: React.ReactNode
	className?: string
}

const IconBorder = (props: IconBorderProps) => {
	const { children, className } = props

	return (
		<div
			className={cn(
				'flex items-center border-2 p-2 justify-center group box-border w-10 h-10 border-[#555555] rounded-full bg-transparent',
				className,
			)}
		>
			{children}
		</div>
	)
}

export default IconBorder
