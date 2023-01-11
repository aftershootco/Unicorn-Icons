import React from 'react'

const InActiveHelp: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...props }, ref: any) => {
	return (
		<svg ref={ref} width='10' height='14' viewBox='0 0 10 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M1.66602 3.66666C1.66602 3.00362 1.97331 2.36773 2.52029 1.89889C3.06727 1.43005 3.80913 1.16666 4.58268 1.16666H5.41602C6.18956 1.16666 6.93143 1.43005 7.47841 1.89889C8.02539 2.36773 8.33268 3.00362 8.33268 3.66666C8.36337 4.2077 8.21742 4.74407 7.91682 5.19497C7.61622 5.64587 7.17724 5.98689 6.66602 6.16666C6.15479 6.40635 5.71581 6.86104 5.41521 7.46224C5.11461 8.06344 4.96866 8.7786 4.99935 9.49999'
				stroke='#777777'
				stroke-width='2'
				stroke-linecap='square'
				stroke-linejoin='round'
			/>
			<path d='M5 12.8333V12.8417' stroke='#777777' stroke-width='2' stroke-linecap='square' stroke-linejoin='bevel' />
		</svg>
	)
}

export default React.memo(InActiveHelp)
