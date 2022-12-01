import React from 'react';
const AlertIcon: React.FC<React.HtmlHTMLAttributes<any>> = (props) => {
  return (
    <svg
      width='58'
      height='52'
      viewBox='0 0 58 52'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M29 38V38.03M29 20V26V20Z'
        stroke='#D83D3D'
        stroke-width='3'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M8.00155 50H50.0015C50.9805 49.9932 51.9428 49.7469 52.8047 49.2827C53.6666 48.8184 54.4018 48.1504 54.9462 47.3368C55.4906 46.5231 55.8276 45.5887 55.9279 44.6149C56.0282 43.6411 55.8887 42.6575 55.5215 41.75L34.2215 5.00005C33.7027 4.06224 32.9421 3.28054 32.0188 2.73621C31.0955 2.19187 30.0433 1.90479 28.9715 1.90479C27.8998 1.90479 26.8476 2.19187 25.9243 2.73621C25.001 3.28054 24.2404 4.06224 23.7215 5.00005L2.42155 41.75C2.06137 42.6368 1.91855 43.5968 2.005 44.55C2.09145 45.5031 2.40467 46.4218 2.9185 47.2293C3.43234 48.0367 4.13188 48.7095 4.95873 49.1915C5.78557 49.6736 6.71573 49.9508 7.67155 50'
        stroke='#D83D3D'
        stroke-width='3'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default React.memo(AlertIcon);
