import React from 'react'

const HighenabledIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg width='8' height='9' viewBox='0 0 8 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<path
				d='M5.5653 2.80923C3.95886 1.83187 4.71219 0.452391 4.74451 0.395051C4.79141 0.313453 4.79127 0.213064 4.74412 0.131607C4.697 0.0501504 4.61002 0 4.51591 0C3.68898 0 3.04144 0.234949 2.59128 0.698344C1.82208 1.49015 1.85776 2.7225 1.87298 3.24875C1.87467 3.30704 1.87613 3.35742 1.87613 3.39483C1.87613 3.78555 1.93881 4.14628 1.99413 4.46453C2.02978 4.66961 2.06056 4.84673 2.06603 4.98598C2.07188 5.13505 2.04351 5.17059 2.04351 5.17059C2.03962 5.17519 2.00728 5.1924 1.91983 5.1924C1.82009 5.1924 1.74656 5.15981 1.68142 5.08678C1.42696 4.80145 1.40936 4.02235 1.45802 3.59849C1.46672 3.52375 1.44308 3.44886 1.39303 3.39268C1.343 3.3365 1.27136 3.30437 1.19612 3.30437C0.511541 3.30437 0 4.42389 0 5.42486C0 5.8954 0.0946406 6.35636 0.281303 6.79489C0.46176 7.21884 0.719086 7.60148 1.04616 7.93213C1.72735 8.62075 2.62547 9 3.57511 9C4.52856 9 5.42646 8.62611 6.10339 7.94725C6.77856 7.27014 7.15039 6.3743 7.15039 5.42482C7.15038 4.2133 6.20246 3.19685 5.5653 2.80923ZM3.57511 8.47266C1.92306 8.47266 1.45802 7.16214 1.45802 5.51002C1.45802 5.10824 1.19612 4 0.790383 4.26774C0.829424 4.18982 1.15659 7.3611 1.19612 7.30478C1.20053 7.73979 2.69493 8.1574 3 8.5C3.16457 8.6848 1.67066 5.71973 1.91985 5.71973C2.15263 5.71973 2.33003 5.64917 2.44707 5.51002C2.66588 5.2499 2.59872 4.86346 2.51371 4.37421C2.46204 4.07696 2.40349 3.74004 2.40349 3.39481C2.40349 3.34976 3.65328 0.760764 3.65149 0.698344C3.63705 0.199863 2.35566 1.69771 2.96954 1.0658C3.24512 0.782103 0.971279 7.99121 1.45802 7.93213C1.40307 8.11459 3 8.5 3.5 8.5C3.49596 9.07143 5 8 6.10339 7.5C6.6183 7.81326 7 5.5 6.62305 5.42484C6.5 5 5.25574 8.47266 3.57511 8.47266Z'
				fill='#FD6640'
			/>
		</svg>
	)
}

export default React.memo(HighenabledIcon)