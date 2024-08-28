import React from 'react'

const CopyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M12.5001 4.66602H5.83341C4.91294 4.66602 4.16675 5.41221 4.16675 6.33268V12.9993C4.16675 13.9198 4.91294 14.666 5.83341 14.666H12.5001C13.4206 14.666 14.1667 13.9198 14.1667 12.9993V6.33268C14.1667 5.41221 13.4206 4.66602 12.5001 4.66602Z'
				stroke='#777777'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10.8333 4.66732V3.00065C10.8333 2.55862 10.6577 2.1347 10.3451 1.82214C10.0325 1.50958 9.60861 1.33398 9.16659 1.33398H2.49992C2.05789 1.33398 1.63397 1.50958 1.32141 1.82214C1.00885 2.1347 0.833252 2.55862 0.833252 3.00065V9.66732C0.833252 10.1093 1.00885 10.5333 1.32141 10.8458C1.63397 11.1584 2.05789 11.334 2.49992 11.334H4.16659'
				stroke='#777777'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export default CopyIcon
