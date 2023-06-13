import React from 'react'

const OptionFailedIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='37' height='36' viewBox='0 0 37 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M18.012 36c9.947 0 18.012-8.059 18.012-18S27.959 0 18.012 0C8.064 0 0 8.059 0 18s8.064 18 18.012 18Z' fill='#CE5347' />
			<path d='M12.686 9.5 9.9 12.285l14.213 14.212 2.785-2.785L12.686 9.5Z' fill='#fff' />
			<path d='M24.113 9.499 9.9 23.71l2.786 2.786 14.212-14.213L24.113 9.5Z' fill='#fff' />
		</svg>
	)
})

export default OptionFailedIcon