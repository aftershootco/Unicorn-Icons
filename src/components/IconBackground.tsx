import React from 'react'
import { cn } from '../utils/cn'

type IconBackgroundProps = {
	children: React.ReactNode
	withBorder?: boolean
	className?: string
}

const IconBackground = (props: IconBackgroundProps) => {
	const { children, withBorder = false, className } = props

	return (
		<div
			className={cn(
				'flex items-center justify-center p-2 group box-border w-10 h-10 border-green-500 rounded-full bg-[#555555]',
				withBorder && 'border-2 ',
				className,
			)}
		>
			{children}
		</div>
	)
}

export default IconBackground
