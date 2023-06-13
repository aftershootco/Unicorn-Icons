import React from 'react'

const MoveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='29' height='29' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<rect x='0.352539' y='0.701172' width='28' height='28' rx='14' fill='#2279CE' />
			<g clip-path='url(#clip0_14037_31520)'>
				<path
					d='M16.0193 7.20117V10.5345C16.0193 10.7555 16.1071 10.9675 16.2634 11.1238C16.4196 11.28 16.6316 11.3678 16.8526 11.3678H20.186'
					stroke='#E2E2E2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M19.3526 18.0345L21.8526 20.5345L19.3526 23.0345M13.936 22.2012H10.186C9.74393 22.2012 9.32 22.0256 9.00744 21.713C8.69488 21.4005 8.51929 20.9765 8.51929 20.5345V8.86784C8.51929 8.42581 8.69488 8.00189 9.00744 7.68933C9.32 7.37677 9.74393 7.20117 10.186 7.20117H16.0193L20.186 11.3678V15.5345L13.936 22.2012ZM16.0193 20.5345H21.8526H16.0193Z'
					stroke='#E2E2E2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_14037_31520'>
					<rect x='4.35254' y='4.70117' width='20' height='20' rx='10' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default React.memo(MoveIcon)