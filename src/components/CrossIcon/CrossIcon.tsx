import React from 'react'

const CrossIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M15.805 1 1 16M1 1l14.805 15' stroke='#fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default CrossIcon