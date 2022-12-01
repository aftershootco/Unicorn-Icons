import React from 'react';

const InActiveGridIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clip-path='url(#clip0_12903_26925)'>
        <path
          d='M7.50065 3.33334H4.16732C3.70708 3.33334 3.33398 3.70644 3.33398 4.16668V7.50001C3.33398 7.96025 3.70708 8.33334 4.16732 8.33334H7.50065C7.96089 8.33334 8.33398 7.96025 8.33398 7.50001V4.16668C8.33398 3.70644 7.96089 3.33334 7.50065 3.33334Z'
          fill='#777777'
          stroke='#777777'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M15.8327 3.33334H12.4993C12.0391 3.33334 11.666 3.70644 11.666 4.16668V7.50001C11.666 7.96025 12.0391 8.33334 12.4993 8.33334H15.8327C16.2929 8.33334 16.666 7.96025 16.666 7.50001V4.16668C16.666 3.70644 16.2929 3.33334 15.8327 3.33334Z'
          stroke='#777777'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='bevel'
        />
        <path
          d='M7.50065 11.6667H4.16732C3.70708 11.6667 3.33398 12.0398 3.33398 12.5V15.8333C3.33398 16.2936 3.70708 16.6667 4.16732 16.6667H7.50065C7.96089 16.6667 8.33398 16.2936 8.33398 15.8333V12.5C8.33398 12.0398 7.96089 11.6667 7.50065 11.6667Z'
          stroke='#777777'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='bevel'
        />
        <path
          d='M15.8327 11.6667H12.4993C12.0391 11.6667 11.666 12.0398 11.666 12.5V15.8333C11.666 16.2936 12.0391 16.6667 12.4993 16.6667H15.8327C16.2929 16.6667 16.666 16.2936 16.666 15.8333V12.5C16.666 12.0398 16.2929 11.6667 15.8327 11.6667Z'
          stroke='#777777'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='bevel'
        />
      </g>
      <defs>
        <clipPath id='clip0_12903_26925'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default React.memo(InActiveGridIcon);
