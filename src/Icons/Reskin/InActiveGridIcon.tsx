import React from 'react'

const InActiveGridIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<g clipPath='url(#clip0_12136_30321)'>
				<path
					d='M7.50065 3.33325H4.16732C3.70708 3.33325 3.33398 3.70635 3.33398 4.16659V7.49992C3.33398 7.96016 3.70708 8.33325 4.16732 8.33325H7.50065C7.96089 8.33325 8.33398 7.96016 8.33398 7.49992V4.16659C8.33398 3.70635 7.96089 3.33325 7.50065 3.33325Z'
					fill='#777777'
					stroke='#777777'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M15.8327 3.33325H12.4993C12.0391 3.33325 11.666 3.70635 11.666 4.16659V7.49992C11.666 7.96016 12.0391 8.33325 12.4993 8.33325H15.8327C16.2929 8.33325 16.666 7.96016 16.666 7.49992V4.16659C16.666 3.70635 16.2929 3.33325 15.8327 3.33325Z'
					stroke='#777777'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
				<path
					d='M7.50065 11.6667H4.16732C3.70708 11.6667 3.33398 12.0398 3.33398 12.5001V15.8334C3.33398 16.2937 3.70708 16.6667 4.16732 16.6667H7.50065C7.96089 16.6667 8.33398 16.2937 8.33398 15.8334V12.5001C8.33398 12.0398 7.96089 11.6667 7.50065 11.6667Z'
					stroke='#777777'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
				<path
					d='M15.8327 11.6667H12.4993C12.0391 11.6667 11.666 12.0398 11.666 12.5001V15.8334C11.666 16.2937 12.0391 16.6667 12.4993 16.6667H15.8327C16.2929 16.6667 16.666 16.2937 16.666 15.8334V12.5001C16.666 12.0398 16.2929 11.6667 15.8327 11.6667Z'
					stroke='#777777'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='bevel'
				/>
			</g>
			<defs>
				<clipPath id='clip0_12136_30321'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default React.memo(InActiveGridIcon)
