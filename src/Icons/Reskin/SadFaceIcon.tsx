import React from 'react'

const SadFaceIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M17.667 34.333c9.204 0 16.666-7.462 16.666-16.666C34.333 8.462 26.871 1 17.667 1 8.462 1 1 8.462 1 17.667c0 9.204 7.462 16.666 16.667 16.666Z'
				stroke='#fff'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M24.333 24.333S21.833 21 17.667 21C13.5 21 11 24.333 11 24.333'
				stroke='#fff'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M12.668 12.666h.017m9.983 0h.017' stroke='#fff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default SadFaceIcon
