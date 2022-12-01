import React from 'react';
const InActiveStarIcon: React.FC<React.HtmlHTMLAttributes<any>> = (props) => {
  return (
    <svg
      width='14'
      height='13'
      viewBox='0 0 14 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.99989 10.8333L2.88522 12.9966L3.67122 8.41462L0.337891 5.16996L4.93789 4.50329L6.99522 0.334625L9.05256 4.50329L13.6526 5.16996L10.3192 8.41462L11.1052 12.9966L6.99989 10.8333Z'
        fill='#777777'
      />
    </svg>
  );
};

export default React.memo(InActiveStarIcon);
