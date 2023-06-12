import React from 'react'

const FilledStarIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='14' height='13' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='m7 1 1.854 3.62L13 5.205 10 8.02l.708 3.98L7 10.12 3.292 12 4 8.021 1 5.205l4.146-.585L7 1Z'
				fill='#fff'
				stroke='#fff'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default FilledStarIcon
