import React from 'react';

const StarDisplay = ({ starCount }) => {
  // Calculate full stars, half stars, and empty spaces
  const fullStars = Math.floor(starCount);
  const hasHalfStar = starCount % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {/* Render full stars */}
      {Array.from({ length: fullStars }, (_, index) => (
        <svg
          key={`full-${index}`}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-yellow-500"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="currentColor"
          />
        </svg>
      ))}

      {/* Render half star */}
      {hasHalfStar && (
        <svg
          key="half"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-yellow-500"
        >
          <defs>
            <clipPath id="halfStarClip">
              <rect x="0" y="0" width="12" height="24" />
            </clipPath>
          </defs>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="currentColor"
            clipPath="url(#halfStarClip)"
          />
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="#e4e4e4"
            style={{ transform: 'translateX(12px)' }}
          />
        </svg>
      )}

      {/* Render empty stars */}
      {Array.from({ length: emptyStars }, (_, index) => (
        <svg
          key={`empty-${index}`}
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-300"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarDisplay;

