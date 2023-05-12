import React from 'react'

const ExpandIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path d='M11 1h5v5M6 16H1v-5M16.001 1l-5.833 5.833M1 16l5.833-5.833' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
	)
})

export default ExpandIcon
