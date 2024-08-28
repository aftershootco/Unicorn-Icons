import React from 'react'

const DescAlphaNotSelectedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg {...props} width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='32' height='32' rx='4' fill='#303030' />
			<g clip-path='url(#clip0_5146_692)'>
				<path
					d='M19 25V20C19 18.62 19.62 18 21 18C22.38 18 23 18.62 23 20V25M23 22H19'
					stroke='#777777'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M23 14H19L23 7H19' stroke='#777777' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M8 19L11 22L14 19' stroke='#777777' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M11 10V22' stroke='#777777' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_5146_692'>
					<rect width='24' height='24' fill='white' transform='translate(4 4)' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default DescAlphaNotSelectedIcon
