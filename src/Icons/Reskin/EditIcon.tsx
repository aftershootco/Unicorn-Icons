import React from 'react'

const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g clipPath='url(#clip0_13023_6690)'>
				<path
					d='M6.75 5.25H4.5C4.10218 5.25 3.72064 5.40804 3.43934 5.68934C3.15804 5.97064 3 6.35218 3 6.75V13.5C3 13.8978 3.15804 14.2794 3.43934 14.5607C3.72064 14.842 4.10218 15 4.5 15H11.25C11.6478 15 12.0294 14.842 12.3107 14.5607C12.592 14.2794 12.75 13.8978 12.75 13.5V11.25'
					stroke='#777777'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M6.75 11.2499H9L15.375 4.87493C15.6734 4.57656 15.841 4.17188 15.841 3.74993C15.841 3.32797 15.6734 2.92329 15.375 2.62493C15.0766 2.32656 14.672 2.15894 14.25 2.15894C13.828 2.15894 13.4234 2.32656 13.125 2.62493L6.75 8.99993V11.2499Z'
					stroke='#777777'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path d='M12 3.75L14.25 6' stroke='#777777' strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_13023_6690'>
					<rect width='18' height='18' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default React.memo(EditIcon)
