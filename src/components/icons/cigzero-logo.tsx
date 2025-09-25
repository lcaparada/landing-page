import * as React from "react";

export function CigzeroLogo({ size }: { size: number }) {
  const aspectRatio = 413 / 367;
  const width = size;
  const height = size / aspectRatio;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 413 367"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={196.963}
        cy={173.357}
        r={149.357}
        stroke="#fff"
        strokeWidth={40}
      />
      <g filter="url(#filter0_d_1019_519)">
        <path
          d="M333.902 33.486L35.808 283.616c-5.465 4.586-6.704 12.617-2.571 18.432 2.85 4.009 5.026 6.595 8.564 10.182 5.03 5.1 13.186 5.279 18.659.658L357.837 61.807c5.141-4.34 6.606-11.815 3.04-17.52-2.775-4.442-4.97-7.032-9.061-10.724-5.039-4.546-12.715-4.44-17.914-.077z"
          fill="#fff"
        />
      </g>
      <path
        d="M33.999 303.077c-4.97-5.923-4.197-14.753 1.726-19.723L133.87 201l24.625 29.347-98.145 82.354c-5.923 4.97-14.754 4.197-19.724-1.726L34 303.077z"
        fill="#EF9E59"
      />
      <path
        d="M69.033 267.73l4.287 7.426h-8.574l4.287-7.426zM142.508 227.605l4.287 7.426h-8.574l4.287-7.426zM79.876 251.588l7.986 10.274-7.5 2.73-.486-13.004zM120.522 219.801l7.986 10.274-7.499 2.73-.487-13.004zM117.522 252.813l-4.335 7.452-2.287-12.972 6.622 5.52zM138.887 218.42l-4.334 7.452-2.288-12.972 6.622 5.52zM97.745 246.551l6.244.02-7.309 6.133 1.065-6.153zM73.513 283.778l6.245.02-7.31 6.133 1.065-6.153zM53.057 295.045l9.721 3.483-7.98 6.696-1.741-10.179zM52.097 281.539l7.426-4.287v8.574l-7.426-4.287zM122.967 240.373l7.425-4.287v8.574l-7.425-4.287zM32.816 291.44l7.426-4.287v8.574l-7.426-4.287zM95.348 262.78l7.426-4.287v8.574l-7.426-4.287zM86.49 274.765l7.425-4.287v8.575l-7.425-4.288zM105.249 234.119l7.426-4.287v8.574l-7.426-4.287z"
        fill="#F6BC77"
      />
      <g filter="url(#filter1_d_1019_519)">
        <path
          transform="rotate(-45 167.462 169.391)"
          fill="#fff"
          d="M167.462 169.391H203.939V216.41219999999998H167.462z"
        />
      </g>
      <path
        transform="rotate(-45 87.941 89.87)"
        fill="#fff"
        d="M87.941 89.8691H124.418V361.2701H87.941z"
      />
      <ellipse
        cx={348.905}
        cy={46.068}
        rx={5.56481}
        ry={15}
        transform="rotate(-40 348.905 46.068)"
        fill="#D2D2D2"
      />
      <defs>
        <filter
          id="filter0_d_1019_519"
          x={0.782715}
          y={0.183594}
          width={412.055}
          height={366.027}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={10} dy={10} />
          <feGaussianBlur stdDeviation={20} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1019_519"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1019_519"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1019_519"
          x={137.462}
          y={113.598}
          width={139.042}
          height={139.042}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={10} dy={10} />
          <feGaussianBlur stdDeviation={20} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1019_519"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1019_519"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
