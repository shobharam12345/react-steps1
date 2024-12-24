import { useState } from "react";

const totalRating = 10;
const color = "#e03131";

function StarRating() {
    const [tempRating, setTempRating] = useState(0);

    console.log(tempRating);

    function handleMouseEnter(index) {
        setTempRating(index + 1);
    }

    function handleMouseOut() {
        setTempRating();
    }

    return (
        <div>
            {new Array(totalRating).fill(0).map(function (_, index) {
                return (
                    <Star
                        color={color}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseOut={handleMouseOut}
                        index={index}
                        fill={index + 1 <= tempRating ? false : true}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

function Star(prop) {
    const { color, handleMouseEnter,handleMouseOut, index, } = prop;
    return (
        <span 
        style={{
            display:"inline-block",
            backgroundColor:"gray",
            height:"2rem",
            width:"2rem",
        }}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseOut}
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill= "none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={color}
            style={{
                height: "2rem",
                width: "2rem",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseOut}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
        </svg>
        </span>
    );
}

export default StarRating;