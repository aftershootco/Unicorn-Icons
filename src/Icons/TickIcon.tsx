import React from 'react'

const TickIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='7' height='6' viewBox='0 0 7 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M5.81589 0.403509C6.0147 0.533503 6.07051 0.800058 5.94052 0.998869L3.0158 5.47197C2.94688 5.57739 2.83521 5.64724 2.71028 5.66321C2.58534 5.67917 2.4597 5.63954 2.3665 5.55482L0.474038 3.83441C0.298274 3.67463 0.285322 3.40261 0.445108 3.22684C0.604893 3.05108 0.876912 3.03812 1.05268 3.19791L2.57189 4.57901L5.22056 0.528122C5.35055 0.32931 5.61708 0.273521 5.81589 0.403509Z'
				fill='#E2E2E2'
			/>
		</svg>
	)
}

export default TickIcon
