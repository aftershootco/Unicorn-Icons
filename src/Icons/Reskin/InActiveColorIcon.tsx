import React from 'react'
const InActiveColorIcon: React.FC<React.HtmlHTMLAttributes<any>> = (props) => {
	return (
		<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<circle cx='6' cy='6' r='6' fill='#777777' />
		</svg>
	)
}

export default React.memo(InActiveColorIcon)
