import React from 'react'

const EyeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg {...props} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_15098_12802)'>
				<path
					d='M9.99992 11.6668C10.9204 11.6668 11.6666 10.9206 11.6666 10.0002C11.6666 9.07969 10.9204 8.3335 9.99992 8.3335C9.07944 8.3335 8.33325 9.07969 8.33325 10.0002C8.33325 10.9206 9.07944 11.6668 9.99992 11.6668Z'
					stroke='#777777'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M18.3334 9.99984C16.1109 13.889 13.3334 15.8332 10.0001 15.8332C6.66675 15.8332 3.88925 13.889 1.66675 9.99984C3.88925 6.11067 6.66675 4.1665 10.0001 4.1665C13.3334 4.1665 16.1109 6.11067 18.3334 9.99984Z'
					stroke='#777777'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_15098_12802'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default EyeIcon
