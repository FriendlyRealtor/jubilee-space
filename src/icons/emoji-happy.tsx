import React from 'react';

function EmojiHappy({ solid, formattedClassName }: { solid: boolean; formattedClassName: string }) {
  if (solid) {
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${formattedClassName}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${formattedClassName}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default EmojiHappy;
