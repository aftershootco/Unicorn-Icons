import React from 'react'

const LockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg {...props} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_14097_44372)'>
				<path
					d='M14.166 9.16602H5.83268C4.91221 9.16602 4.16602 9.91221 4.16602 10.8327V15.8327C4.16602 16.7532 4.91221 17.4993 5.83268 17.4993H14.166C15.0865 17.4993 15.8327 16.7532 15.8327 15.8327V10.8327C15.8327 9.91221 15.0865 9.16602 14.166 9.16602Z'
					stroke='#474747'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M9.99935 14.1667C10.4596 14.1667 10.8327 13.7936 10.8327 13.3333C10.8327 12.8731 10.4596 12.5 9.99935 12.5C9.53911 12.5 9.16602 12.8731 9.16602 13.3333C9.16602 13.7936 9.53911 14.1667 9.99935 14.1667Z'
					stroke='#474747'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M6.66602 9.16667V5.83333C6.66602 4.94928 7.0172 4.10143 7.64233 3.47631C8.26745 2.85119 9.11529 2.5 9.99935 2.5C10.8834 2.5 11.7313 2.85119 12.3564 3.47631C12.9815 4.10143 13.3327 4.94928 13.3327 5.83333V9.16667'
					stroke='#474747'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_14097_44372'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default LockIcon
