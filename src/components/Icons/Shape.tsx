import type { SVGProps } from 'react';

export const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={16}
    width={25}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Shape Icon</title>
    <circle cx={8.5} cy={8} fill="#121212" r={8} />
    <circle cx={16.5} cy={8} r={7.5} stroke="#F63" />
  </svg>
);
