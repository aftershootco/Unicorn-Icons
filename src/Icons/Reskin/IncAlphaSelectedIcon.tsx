import React from 'react'

const IncAlphaSelectedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='24' height='24' rx='4' fill='#2279CE' />
			<g clip-path='url(#clip0_11845_14535)'>
				<path
					d='M14.5 10.3333V6.16667C14.5 5.01667 15.0167 4.5 16.1667 4.5C17.3167 4.5 17.8333 5.01667 17.8333 6.16667V10.3333M17.8333 7.83333H14.5'
					stroke='#ABABAB'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M17.8333 19.4998H14.5L17.8333 13.6665H14.5' stroke='#ABABAB' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M5.33398 14.5L7.83398 17L10.334 14.5' stroke='#ABABAB' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M7.83398 7V17' stroke='#ABABAB' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_11845_14535'>
					<rect width='20' height='20' fill='white' transform='translate(2 2)' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default IncAlphaSelectedIcon
