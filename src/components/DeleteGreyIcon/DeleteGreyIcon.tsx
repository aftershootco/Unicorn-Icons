import React from 'react'

const DeleteGreyIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M2.5 5h15M6.668 5V3.333a1.667 1.667 0 0 1 1.667-1.667h3.333a1.667 1.667 0 0 1 1.667 1.667V5m2.5 0v11.666a1.667 1.667 0 0 1-1.667 1.667H5.835a1.667 1.667 0 0 1-1.667-1.666V5h11.667ZM8.332 9.166v5m3.336-5v5'
				stroke='#fff'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
})

export default DeleteGreyIcon
