import React from 'react'

const BorderColorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M13.9987 1.33325H3.9987C2.52594 1.33325 1.33203 2.52716 1.33203 3.99992V13.9999C1.33203 15.4727 2.52594 16.6666 3.9987 16.6666H13.9987C15.4715 16.6666 16.6654 15.4727 16.6654 13.9999V3.99992C16.6654 2.52716 15.4715 1.33325 13.9987 1.33325Z'
				stroke='#777777'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default React.memo(BorderColorIcon)
