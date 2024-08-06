import React from 'react'
const InActiveSortIcon: React.FC<React.HtmlHTMLAttributes<any>> = (props) => {
	return (
		<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g clipPath='url(#clip0_12903_26949)'>
				<path d='M5.83398 2.5V17.5' stroke='#777777' strokeWidth='2' strokeLinejoin='round' />
				<path d='M8.33398 5L5.83398 2.5L3.33398 5' stroke='#777777' strokeWidth='2' strokeLinecap='square' strokeLinejoin='round' />
				<path d='M16.666 15L14.166 17.5L11.666 15' stroke='#777777' strokeWidth='2' strokeLinecap='square' strokeLinejoin='round' />
				<path d='M14.166 17.5V2.5' stroke='#777777' strokeWidth='2' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_12903_26949'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default React.memo(InActiveSortIcon)
