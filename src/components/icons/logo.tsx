import * as React from "react";

export function Logo({
  size,
  className,
}: { size?: number } & React.ComponentProps<"svg">) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 380 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x={2.5} y={2.5} width={375} height={375} rx={13.5} fill="#000" />
      <rect
        x={2.5}
        y={2.5}
        width={375}
        height={375}
        rx={13.5}
        stroke="#fff"
        strokeWidth={5}
      />
      <path
        d="M179.984 106.332l-3.088 92.664-.128 3.85-3.821-.495L89.55 191.54l-7.308-.947 5.352-5.065 86.487-81.854 6.188-5.856-.285 8.514zM209.316 179.959l81.081 9.266 7.47.854-5.462 5.166-85.714 81.081-6.349 6.006.449-8.728 4.632-90.347.192-3.721 3.701.423z"
        stroke="#fff"
        strokeWidth={7}
      />
    </svg>
  );
}
