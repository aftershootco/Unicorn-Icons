import React from 'react'

const ClockIcon4: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Z'
				stroke='#fff'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M11 5v6l4 2' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default ClockIcon4
