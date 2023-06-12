import React from 'react'

const FailedIcon: React.FC<React.SVGProps<SVGSVGElement>> = React.memo((props) => {
	return (
		<svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='19' cy='19' r='19' fill='#D9D9D9' fill-opacity='.1' />
			<path d='M19 30.984c6.627 0 12-5.369 12-11.992C31 12.37 25.627 7 19 7S7 12.37 7 18.992c0 6.623 5.373 11.992 12 11.992Z' fill='#CE5347' />
			<path d='m15.451 13.329-1.855 1.856 9.468 9.468 1.856-1.856-9.469-9.468Z' fill='#fff' />
			<path d='m23.064 13.329-9.468 9.468 1.855 1.856 9.47-9.469-1.857-1.855Z' fill='#fff' />
		</svg>
	)
})

export default FailedIcon
