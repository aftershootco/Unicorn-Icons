import React from 'react'

const ArrowDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='24px'
			viewBox='0 0 24 24'
			width='24px'
			fill='#FFFFFF'
			{...props}
		>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M11 5v11.17l-4.88-4.88c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 16.17V5c0-.55-.45-1-1-1s-1 .45-1 1z' />
		</svg>
	)
}

export default React.memo(ArrowDownIcon)
