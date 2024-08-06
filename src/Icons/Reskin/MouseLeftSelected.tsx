import React from 'react'

const MouseLeftSelected: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M11.6667 2.5H8.33333C6.49238 2.5 5 3.99238 5 5.83333V14.1667C5 16.0076 6.49238 17.5 8.33333 17.5H11.6667C13.5076 17.5 15 16.0076 15 14.1667V5.83333C15 3.99238 13.5076 2.5 11.6667 2.5Z'
				stroke='#767676'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10 8.16667V2.5H7.11729C6.03219 2.5 5.14504 3.36526 5.11792 4.45002L5 9.16667H9C9.55228 9.16667 10 8.71895 10 8.16667Z'
				fill='#777777'
			/>
		</svg>
	)
}

export default React.memo(MouseLeftSelected)
