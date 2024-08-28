import React from 'react'

const ArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='6' height='12' viewBox='0 0 6 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M0.25 11.5L5.75 6L0.25 0.5L0.25 11.5Z' fill='#777777' />
		</svg>
	)
})

export default ArrowIcon
