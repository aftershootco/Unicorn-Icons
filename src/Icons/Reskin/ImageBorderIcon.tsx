import React from 'react'

const ImageBorderIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='35' height='35' viewBox='0 0 35 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect x='.5' y='.5' width='34' height='34' rx='17' stroke='gray' stroke-opacity='.5' />
			<rect x='9.5' y='9.5' width='16' height='16' rx='1.5' stroke='#fff' />
			<rect x='13' y='13' width='9' height='9' rx='1' fill='#C1C1C1' />
		</svg>
	)
})

export default ImageBorderIcon
