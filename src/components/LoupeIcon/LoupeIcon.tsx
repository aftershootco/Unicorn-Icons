import React from 'react'

const LoupeIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect width='16' height='16' rx='2' fill='#535353' />
			<rect x='3' y='3' width='10' height='10' rx='2' fill='gray' />
		</svg>
	)
})

export default LoupeIcon
