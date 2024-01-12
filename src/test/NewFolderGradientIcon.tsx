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

export const NewFolderGradientIcon = React.forwardRef<HTMLSpanElement, Props>((props, forwardedRef) => {
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
<svg width="329" height="200" viewBox="0 0 329 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse opacity="0.4" rx="161" ry="186" transform="matrix(2.1817e-08 -1 -1 -7.83036e-09 168 209)" fill="url(#paint0_linear_14989_10969)"/>
<g filter="url(#filter0_b_14989_10969)">
<rect width="329" height="203.229" fill="#0A0909" fill-opacity="0.1"/>
</g>
<defs>
<filter id="filter0_b_14989_10969" x="-80" y="-80" width="489" height="363.229" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="40"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_14989_10969"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_14989_10969" result="shape"/>
</filter>
<linearGradient id="paint0_linear_14989_10969" x1="0" y1="186" x2="322" y2="186" gradientUnits="userSpaceOnUse">
<stop stop-color="#7E68B0"/>
<stop offset="0.167211" stop-color="#F6821F"/>
<stop offset="0.313529" stop-color="#FFC40E"/>
<stop offset="0.497398" stop-color="#EF4023"/>
<stop offset="0.635417" stop-color="#013CC2"/>
<stop offset="0.87562" stop-color="#018AD2"/>
<stop offset="1" stop-color="#21B24B"/>
</linearGradient>
</defs>
</svg>
)
  return <BaseIcon variants={{ primary }} variant={variant} {...restProps} ref={forwardedRef}  />
})

export default React.memo(NewFolderGradientIcon)