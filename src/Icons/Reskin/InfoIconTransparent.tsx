import React from 'react'

const InfoIconTransparent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g clipPath='url(#clip0_11906_20062)'>
				<path
					d='M11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25Z'
					stroke='#777777'
					strokeWidth='2'
					strokeLinecap='square'
					strokeLinejoin='round'
				/>
				<path d='M11 7.33398H11.0092' stroke='#777777' strokeWidth='2' strokeLinecap='square' strokeLinejoin='round' />
				<path d='M10.084 11H11.0007V14.6667H11.9173' stroke='#777777' strokeWidth='2' strokeLinecap='square' strokeLinejoin='round' />
			</g>
			<defs>
				<clipPath id='clip0_11906_20062'>
					<rect width='22' height='22' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default React.memo(InfoIconTransparent)
