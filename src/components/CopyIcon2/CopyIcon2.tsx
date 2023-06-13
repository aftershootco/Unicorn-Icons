import React from 'react'

const CopyIcon2: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Z'
				stroke='#fff'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path d='M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
}

export default React.memo(CopyIcon2)
