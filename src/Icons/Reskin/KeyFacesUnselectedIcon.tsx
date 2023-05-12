import React from 'react'

const KeyFacesUnselectedIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Z'
				stroke='gray'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M7 13s1.5 2 4 2 4-2 4-2' stroke='gray' stroke-linecap='round' stroke-linejoin='round' />
			<path d='M8 8h.01M14 8h.01' stroke='gray' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default KeyFacesUnselectedIcon
