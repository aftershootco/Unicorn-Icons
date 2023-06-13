import React from 'react'

const ErrorIcon2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='58' height='52' viewBox='0 0 58 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M29 38v.03M29 20v6-6ZM8.002 50h42a6 6 0 0 0 5.52-8.25L34.222 5a5.999 5.999 0 0 0-10.5 0l-21.3 36.75A6 6 0 0 0 7.672 50'
				stroke='#D83D3D'
				stroke-width='3'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}

export default React.memo(ErrorIcon2)