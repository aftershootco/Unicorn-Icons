import React from 'react'
import { cn } from '../utils/cn'

interface IconBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
	withBorder?: boolean
	className?: string
}

const IconBackground = (props: IconBackgroundProps) => {
	const { children, withBorder = false, className, ...rest } = props

	return (
		<div
			className={cn(
				'flex items-center justify-center p-2 group box-border w-10 h-10 border-green-500 rounded-full bg-[#555555]',
				withBorder && 'border-2 ',
				className,
				{ ...rest },
			)}
		>
			{children}
		</div>
	)
}

export default IconBackground
