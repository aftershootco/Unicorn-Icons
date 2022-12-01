import React from 'react';

const BorderColorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clip-path='url(#clip0_11906_20265)'>
        <path
          d='M15.0007 2.33398H5.00065C3.52789 2.33398 2.33398 3.52789 2.33398 5.00065V15.0007C2.33398 16.4734 3.52789 17.6673 5.00065 17.6673H15.0007C16.4734 17.6673 17.6673 16.4734 17.6673 15.0007V5.00065C17.6673 3.52789 16.4734 2.33398 15.0007 2.33398Z'
          stroke='#ABABAB'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_11906_20265'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default React.memo(BorderColorIcon);
