import { useState } from "react";

const starCount = 10;

export default function StarRating() {
  const [starValue, setStarValue] = useState<number>(0);
  const [hoverValue, setHoverValue] = useState<number>(0);

  return (
    <div className="container mx-auto mt-5 flex min-h-full w-full flex-col items-center justify-center gap-x-3 gap-y-5 border p-5">
      <h1>Star Rating</h1>

      <div>
        {new Array(starCount).fill(0).map((_, i) => {
          return (
            <span
              key={i}
              className={`cursor-pointer ${
                (hoverValue === 0 && i < starValue) || i < hoverValue
                  ? "gold"
                  : ""
              }`}
              onClick={() => setStarValue(i + 1)}
              onMouseEnter={() => setHoverValue(i + 1)}
              onMouseLeave={() => setHoverValue(0)}
            >
              &#9734;
            </span>
          );
        })}
      </div>
    </div>
  );
}
