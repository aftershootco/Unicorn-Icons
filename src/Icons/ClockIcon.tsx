import React from 'react'

const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g clip-path='url(#clip0_517_1773)'>
				<path
					d='M6 10C7.933 10 9.5 8.433 9.5 6.5C9.5 4.567 7.933 3 6 3C4.067 3 2.5 4.567 2.5 6.5C2.5 8.433 4.067 10 6 10Z'
					stroke='#E2E2E2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path d='M6 5V6.5H7' stroke='#E2E2E2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M3.5 2L2.125 3' stroke='#E2E2E2' stroke-linecap='round' stroke-linejoin='round' />
				<path d='M8.5 2L9.875 3' stroke='#E2E2E2' stroke-linecap='round' stroke-linejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_517_1773'>
					<rect width='12' height='12' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}
export default React.memo(ClockIcon)
