import React from 'react'

const LeftArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='8' height='14' viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M6.75 1.5L1.25 7L6.75 12.5' stroke='#777777' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
}

export default React.memo(LeftArrow)
