import React from 'react';

interface PsiIconProps {
  size?: number | string;
  className?: string;
  strokeWidth?: number | string;
}

export default function PsiIcon({ size = 24, className, strokeWidth = "2" }: PsiIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Central vertical stem */}
      <line x1="12" y1="2" x2="12" y2="22" />
      {/* Horizontal base */}
      <line x1="7" y1="22" x2="17" y2="22" />
      {/* Outer curved bowl */}
      <path d="M5 4c0 7.5 4 10 7 10s7-2.5 7-10" />
    </svg>
  );
}
