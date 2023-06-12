import React from 'react'

const TrainFailIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='83' height='83' viewBox='0 0 83 83' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='41.5' cy='41.5' r='41.5' fill='#424242' />
			<path d='M41.012 60c9.947 0 18.012-8.059 18.012-18s-8.065-18-18.012-18C31.064 24 23 32.059 23 42s8.064 18 18.012 18Z' fill='#CE5347' />
			<path d='M35.686 33.5 32.9 36.285l14.213 14.212 2.785-2.785L35.686 33.5Z' fill='#fff' />
			<path d='M47.113 33.499 32.9 47.71l2.786 2.785 14.212-14.212-2.785-2.785Z' fill='#fff' />
		</svg>
	)
})

export default TrainFailIcon
