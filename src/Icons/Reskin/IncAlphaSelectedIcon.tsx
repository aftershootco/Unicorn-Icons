import React from 'react'

const IncAlphaSelectedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg {...props} width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='32' height='32' rx='4' fill='#2279CE' />
			<g clip-path='url(#clip0_5146_668)'>
				<path
					d='M19 14V9C19 7.62 19.62 7 21 7C22.38 7 23 7.62 23 9V14M23 11H19'
					stroke='#E2E2E2'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M23 25H19L23 18H19' stroke='#E2E2E2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M8 19L11 22L14 19' stroke='#E2E2E2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M11 10V22' stroke='#E2E2E2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_5146_668'>
					<rect width='24' height='24' fill='white' transform='translate(4 4)' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default IncAlphaSelectedIcon
