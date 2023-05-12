import React from 'react'

const Step1Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='52' height='51' viewBox='0 0 52 51' fill='none' xmlns='http://www.w3.org/2000/svg'  {...props}>
			<path
				d='M22.769 7.654c.734-2.692 2.61-6.037 7.343-6.037 0 0 13.055-4.162 13.055 9.138 0 11.178 2.53 12.402 5.222 15.094a46.179 46.179 0 0 1-10.444 1.224v1.306c0 1.305-.245 3.916 6.283 5.222C50.755 34.906 51 40.128 51 40.128H33.865'
				stroke='#fff'
				stroke-miterlimit='10'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M30.455 42.608c-6.527-.897-6.527-3.263-6.527-4.569v-.734a11.912 11.912 0 0 0 3.426-5.712c1.959 0 2.448-4.16 2.448-4.732 0-.571-.163-2.937-1.06-3.182 3.263-11.423-6.528-16.319-15.014-10.444-3.59 0-4.732 5.222-3.426 10.444-.898 0-1.061 2.448-1.061 3.1 0 .653.49 4.733 2.448 4.733.652 2.366 2.447 4.324 3.998 5.711v.816c0 1.306-.49 3.754-7.099 4.57C1.98 43.425 1 49.788 1 49.788h35.9s.082-6.283-6.445-7.18Z'
				stroke='#fff'
				stroke-miterlimit='10'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}

export default React.memo(Step1Icon)
