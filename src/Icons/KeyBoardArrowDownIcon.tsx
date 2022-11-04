import React from 'react'

const KeyBoardArrowDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' {...props} height='24px' viewBox='0 0 24 24' width='24px' fill='#FFFFFF'>
			<path d='M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z' />
		</svg>
	)
}

export default React.memo(KeyBoardArrowDownIcon)