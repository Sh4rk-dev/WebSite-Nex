import type { SVGProps } from 'react';
export const EllipsesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={83}
    width={107}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Ellipses Icon</title>
    <path
      d="M52.534 55.11h1.6a32.188 32.188 0 0 0 1.781-1.848h-5.163c.57.64 1.164 1.257 1.782 1.849ZM49.226 51.413h8.215c.458-.6.896-1.216 1.312-1.849H47.914c.416.633.854 1.25 1.312 1.85ZM46.785 47.715h13.097c.341-.604.663-1.22.966-1.849H45.819c.303.628.625 1.245.966 1.85ZM45 44.018h16.667c.246-.608.474-1.224.684-1.85H44.317c.209.626.437 1.242.683 1.85ZM43.76 40.32h19.148c.164-.61.31-1.226.438-1.85H43.322c.128.624.274 1.24.437 1.85ZM42.998 36.622h20.67c.09-.61.16-1.227.214-1.849H42.786c.053.622.124 1.238.212 1.849ZM42.68 32.924h21.307a32.654 32.654 0 0 0 0-1.849H42.68a32.638 32.638 0 0 0 0 1.85ZM42.785 29.226h21.097a31.992 31.992 0 0 0-.213-1.848h-20.67a32.08 32.08 0 0 0-.214 1.848ZM43.322 25.529h20.024a31.741 31.741 0 0 0-.438-1.85H43.76c-.163.61-.31 1.227-.437 1.85ZM44.316 21.83h18.035a31.695 31.695 0 0 0-.684-1.848H45a31.768 31.768 0 0 0-.684 1.849ZM45.82 18.133h15.028a31.926 31.926 0 0 0-.966-1.849H46.785a31.926 31.926 0 0 0-.966 1.85ZM47.914 14.435h10.84a32.111 32.111 0 0 0-1.313-1.849h-8.215a32.16 32.16 0 0 0-1.312 1.85ZM50.752 10.738h5.164a32.21 32.21 0 0 0-1.782-1.85h-1.6a32.142 32.142 0 0 0-1.782 1.85Z"
      fill="#fff"
    />
    <path
      d="M74.667.583c17.35 0 31.417 14.066 31.417 31.417 0 17.35-14.066 31.417-31.417 31.417S43.25 49.351 43.25 32C43.25 14.65 57.316.583 74.667.583Z"
      stroke="url(#a)"
      strokeWidth={1.167}
    />
    <g filter="url(#b)">
      <circle
        cx={32}
        cy={32}
        r={31.417}
        shapeRendering="crispEdges"
        stroke="url(#c)"
        strokeWidth={1.167}
      />
    </g>
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="a"
        x1={57.778}
        x2={88.889}
        y1={6.222}
        y2={65.778}
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#272727" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="c"
        x1={15.111}
        x2={51.556}
        y1={2.667}
        y2={75.556}
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#272727" />
      </linearGradient>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height={82.667}
        id="b"
        width={73.333}
        x={0}
        y={0}
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={4.667} dy={14} />
        <feGaussianBlur stdDeviation={2.333} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5393_5070"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5393_5070"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
