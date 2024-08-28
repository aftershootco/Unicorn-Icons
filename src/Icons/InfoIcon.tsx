import React from 'react'

const InfoIcon: React.FC<React.HtmlHTMLAttributes<any>> = React.forwardRef((props, ref: any) => {
	return (
		<svg ref={ref} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g clipPath='url(#clip0_12231_35410)'>
				<path
					d='M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z'
					fill='#E2E2E2'
					fillOpacity='0.1'
				/>
				<path d='M10 6.66602H10.0083' stroke='#777777' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
				<path d='M9.16699 10H10.0003V13.3333H10.8337' stroke='#777777' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_12231_35410'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
})

export default React.memo(InfoIcon)
