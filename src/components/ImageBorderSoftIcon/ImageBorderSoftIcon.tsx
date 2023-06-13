import React from 'react'

const ImageBorderSoftIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect x='.5' y='.5' width='13.571' height='13.571' rx='1.5' stroke='#fff' />
			<rect x='3.428' y='3.429' width='7.714' height='7.714' rx='1' fill='#C1C1C1' />
		</svg>
	)
})

export default ImageBorderSoftIcon
