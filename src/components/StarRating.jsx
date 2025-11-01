// StarRating.jsx
import React from "react";
import { MdStarRate } from "react-icons/md";

const StarRating = ({ rating = 0, size = 24, className = "" }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {[...Array(5)].map((_, i) => {
        const idx = i;
        // Determine state
        const isFull = idx < fullStars;
        const isHalf = idx === fullStars && hasHalf;
        const wrapperStyle = { width: size, height: size, position: "relative" };

        if (isFull) {
          return (
            <div key={i} style={wrapperStyle}>
              <MdStarRate size={size} className="max-[1600px]:w-[19px] text-yellow-400" />
            </div>
          );
        }

        if (isHalf) {
          return (
            <div key={i} style={wrapperStyle}>
              <div
                style={{
                  width: Math.round(size / 2),
                  height: size,
                  overflow: "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <MdStarRate size={size} className="max-[1600px]:w-[19px] text-yellow-400" />
              </div>
            </div>
          );
        }

        return (
          <div key={i} style={wrapperStyle}>
            <MdStarRate size={size} className="text-gray-400" />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
