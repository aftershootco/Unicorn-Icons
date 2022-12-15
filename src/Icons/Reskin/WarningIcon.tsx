import React from 'react'

const WarningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg {...props} width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='19' height='19' rx='9.5' fill='#A39006' />
			<g clip-path='url(#clip0_12188_33329)'>
				<path d='M9.5 11.125V11.1304M9.5 7.875V8.95833V7.875Z' stroke='#E2E2E2' stroke-linecap='round' stroke-linejoin='round' />
				<path
					d='M5.70823 13.2918H13.2916C13.4683 13.2905 13.6421 13.2461 13.7977 13.1623C13.9533 13.0784 14.0861 12.9578 14.1843 12.8109C14.2826 12.664 14.3435 12.4953 14.3616 12.3195C14.3797 12.1436 14.3545 11.966 14.2882 11.8022L10.4424 5.16678C10.3487 4.99745 10.2114 4.85631 10.0447 4.75803C9.87798 4.65975 9.688 4.60791 9.49448 4.60791C9.30097 4.60791 9.11098 4.65975 8.94428 4.75803C8.77758 4.85631 8.64025 4.99745 8.54657 5.16678L4.70073 11.8022C4.6357 11.9623 4.60991 12.1356 4.62552 12.3077C4.64113 12.4798 4.69768 12.6457 4.79046 12.7915C4.88324 12.9373 5.00954 13.0588 5.15883 13.1458C5.30813 13.2328 5.47607 13.2829 5.64865 13.2918'
					stroke='#E2E2E2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_12188_33329'>
					<rect width='13' height='13' fill='white' transform='translate(3 3)' />
				</clipPath>
			</defs>
		</svg>
	)
}

export default WarningIcon
