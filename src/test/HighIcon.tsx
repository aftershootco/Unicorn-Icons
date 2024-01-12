import React from 'react'
import { IconProps } from '../../types/Icons/types'
import BaseIcon from '../components/BaseIcon'
import DEFAULT_ICON from '../constant'

type IconVariant = 'primary' | 'secondary' | 'tertiary';
type Props = Omit<IconProps, 'variant'> & {
  variant?: IconVariant;
  bgColor?: string;
  inActive?: boolean;
};

export const HighIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
  //props
  const {
    variant = 'primary',
    color = DEFAULT_ICON.COLOR,
    bgColor = DEFAULT_ICON.BG_COLOR,
    size = DEFAULT_ICON.SIZE,
    inActive = false,
    ...restProps
  } = props

  const modifiedColor = inActive ? DEFAULT_ICON.INACTIVE_COLOR : color

  // variants
  const primary = (
<svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5653 2.80923C3.95886 1.83187 4.71219 0.452391 4.74451 0.395051C4.79141 0.313453 4.79127 0.213064 4.74413 0.131607C4.697 0.0501504 4.61002 0 4.51591 0C3.68898 0 3.04144 0.234949 2.59128 0.698344C1.82208 1.49015 1.85776 2.7225 1.87298 3.24875C1.87467 3.30704 1.87613 3.35742 1.87613 3.39483C1.87613 3.78555 1.93881 4.14628 1.99413 4.46453C2.02978 4.66961 2.06056 4.84673 2.06603 4.98598C2.07188 5.13504 2.04467 5.16922 2.04351 5.17059C2.03962 5.17519 2.00728 5.1924 1.91983 5.1924C1.82009 5.1924 1.74656 5.15981 1.68142 5.08678C1.42696 4.80145 1.40936 4.02235 1.45802 3.59849C1.46672 3.52375 1.44308 3.44886 1.39303 3.39268C1.343 3.3365 1.27136 3.30437 1.19612 3.30437C0.511541 3.30437 0 4.42389 0 5.42486C0 5.8954 0.0946406 6.35636 0.281303 6.79489C0.46176 7.21884 0.719086 7.60148 1.04616 7.93213C1.72735 8.62075 2.62547 9 3.57511 9C4.52856 9 5.42646 8.62611 6.10339 7.94725C6.77856 7.27014 7.15039 6.3743 7.15039 5.42482C7.15038 4.2133 6.20246 3.19685 5.5653 2.80923ZM3.57511 8.47266C1.92306 8.47266 0.527361 7.07694 0.527361 5.42482C0.527361 5.02304 0.623232 4.60129 0.790383 4.26774C0.829424 4.18982 0.869484 4.12297 0.909018 4.06665C0.91343 4.50165 0.982336 5.09465 1.2874 5.43725C1.45197 5.62205 1.67066 5.71973 1.91985 5.71973C2.15263 5.71973 2.33003 5.64917 2.44707 5.51002C2.66588 5.2499 2.59872 4.86346 2.51371 4.37421C2.46205 4.07696 2.40349 3.74004 2.40349 3.39481C2.40349 3.34976 2.40193 3.29588 2.40013 3.23346C2.3857 2.73498 2.35566 1.69771 2.96954 1.0658C3.24512 0.782104 3.62987 0.609451 4.1166 0.550371C4.06165 0.732832 4.01428 0.964459 4.01245 1.22381C4.00841 1.79524 4.22698 2.61229 5.29123 3.25976C5.80614 3.57302 6.62305 4.43781 6.62305 5.42484C6.62303 7.10541 5.25574 8.47266 3.57511 8.47266Z" fill="#FD6640"/>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(HighIcon)
