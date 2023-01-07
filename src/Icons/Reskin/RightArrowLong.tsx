import React from 'react'

const RightArrowLong: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg {...props} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_14836_8670)'>
				<path d='M4.16602 10H15.8327' stroke='#E2E2E2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M12.5 13.3333L15.8333 10' stroke='#E2E2E2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M12.5 6.66602L15.8333 9.99935' stroke='#E2E2E2' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_14836_8670'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default RightArrowLong
