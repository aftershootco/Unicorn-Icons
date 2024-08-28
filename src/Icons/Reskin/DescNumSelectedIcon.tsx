import React from 'react'

const DescNumSelectedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg {...props} width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='32' height='32' rx='4' fill='#2279CE' />
			<g clip-path='url(#clip0_5146_718)'>
				<path d='M8 19L11 22L14 19' stroke='#E2E2E2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M11 10V22' stroke='#E2E2E2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M21 18C21.5304 18 22.0391 18.2107 22.4142 18.5858C22.7893 18.9609 23 19.4696 23 20V23C23 23.5304 22.7893 24.0391 22.4142 24.4142C22.0391 24.7893 21.5304 25 21 25C20.4696 25 19.9609 24.7893 19.5858 24.4142C19.2107 24.0391 19 23.5304 19 23V20C19 19.4696 19.2107 18.9609 19.5858 18.5858C19.9609 18.2107 20.4696 18 21 18V18Z'
					stroke='#E2E2E2'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M21 11C22.1046 11 23 10.1046 23 9C23 7.89543 22.1046 7 21 7C19.8954 7 19 7.89543 19 9C19 10.1046 19.8954 11 21 11Z'
					stroke='#E2E2E2'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M23 9V12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H19.5'
					stroke='#E2E2E2'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_5146_718'>
					<rect width='24' height='24' fill='white' transform='translate(4 4)' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default DescNumSelectedIcon
