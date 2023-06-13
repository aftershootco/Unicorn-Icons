import React from 'react'

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='11' height='11' viewBox='0 0 11 11' fill='white' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M6.279 5.5L11 10.221l-.779.779L5.5 6.279.779 11 0 10.221 4.721 5.5 0 .779.779 0 5.5 4.721 10.221 0 11 .779 6.279 5.5z'
				fill='white'
			/>
		</svg>
	)
}

export default React.memo(CloseIcon)
