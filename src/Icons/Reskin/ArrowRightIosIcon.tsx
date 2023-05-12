import React from 'react'

const ArrowRightIosIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='11' height='18' viewBox='0 0 11 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M1.53 1.059 9.47 9l-7.94 7.941'
				stroke='#fff'
				stroke-opacity='.8'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}

export default React.memo(ArrowRightIosIcon)
