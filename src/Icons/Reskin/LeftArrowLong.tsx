import React from 'react'

const LeftArrowLong: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg {...props} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_14836_8665)'>
				<path d='M4.16602 10H15.8327' stroke='#E2E2E2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M4.16602 10L7.49935 13.3333' stroke='#E2E2E2' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M4.16602 9.99935L7.49935 6.66602' stroke='#E2E2E2' strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_14836_8665'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default LeftArrowLong
