import React from 'react'

const ExportedProjectIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='13' height='16' viewBox='0 0 13 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M1 8v5.6A1.4 1.4 0 0 0 2.4 15h8.4a1.4 1.4 0 0 0 1.4-1.4V8M9.4 3.8 6.6 1 3.8 3.8M6.6 1v9.1'
				stroke='#fff'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default ExportedProjectIcon
