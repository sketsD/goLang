import React from "react";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;

  const getStarClass = (index: number) => {
    if (rating >= index + 1) return "text-yellow-400";
    return "text-gray-300";
  };

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-6 h-6 ${getStarClass(index)}`}
        >
          <path d="M12 17.27L18.18 21 16.54 14.12 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 14.12 5.82 21 12 17.27z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
