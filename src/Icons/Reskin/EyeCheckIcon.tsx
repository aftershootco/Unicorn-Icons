import React from 'react'

const EyeCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg {...props} width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_12221_38683)'>
				<path
					d='M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z'
					stroke='#E2E2E2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M9 14.25C6 14.25 3.50025 12.5002 1.5 9C3.50025 5.49975 6 3.75 9 3.75C12 3.75 14.4997 5.49975 16.5 9C16.185 9.552 15.8565 10.0605 15.5167 10.5247'
					stroke='#E2E2E2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M11.25 14.25L12.75 15.75L15.75 12.75' stroke='#E2E2E2' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_12221_38683'>
					<rect width='18' height='18' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default EyeCheckIcon
