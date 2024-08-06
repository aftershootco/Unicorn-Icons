import React from 'react'

const InActiveLoupeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g clipPath='url(#clip0_12903_26932)'>
				<path d='M6.66602 6.66666H13.3327V13.3333H6.66602V6.66666Z' fill='#777777' />
				<path
					d='M15.0007 3.33334H5.00065C4.08018 3.33334 3.33398 4.07954 3.33398 5.00001V15C3.33398 15.9205 4.08018 16.6667 5.00065 16.6667H15.0007C15.9211 16.6667 16.6673 15.9205 16.6673 15V5.00001C16.6673 4.07954 15.9211 3.33334 15.0007 3.33334Z'
					stroke='#777777'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
			</g>
			<defs>
				<clipPath id='clip0_12903_26932'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default React.memo(InActiveLoupeIcon)
