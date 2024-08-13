import React from 'react'

const InActiveSprayCanIcon: React.FC<React.HtmlHTMLAttributes<any>> = React.forwardRef((props, ref: any) => {
	return (
		<svg {...props} ref={ref} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clipPath='url(#clip0_12973_18863)'>
				<path
					d='M5 7.76074V16.667H14.375V7.76074M5 7.76074H14.375M5 7.76074C5 5.94856 6.46907 4.47949 8.28125 4.47949M14.375 7.76074V7.52637C14.375 5.84362 13.0109 4.47949 11.3281 4.47949M8.28125 4.47949V2.60449C8.28125 2.08673 8.70098 1.66699 9.21875 1.66699H10.3906C10.9084 1.66699 11.3281 2.08673 11.3281 2.60449V4.47949M8.28125 4.47949H11.3281'
					stroke='#777777'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_12973_18863'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
})

export default React.memo(InActiveSprayCanIcon)
