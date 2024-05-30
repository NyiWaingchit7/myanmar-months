import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const [hoverEffect, setHoverEffect] = useState(false);
  return (
    <Link
      to={`/detail/${data.Id}`}
      className=" flex-shrink-0"
      onMouseOver={() => setHoverEffect(true)}
      onMouseLeave={() => setHoverEffect(false)}
    >
      <div className=" border-4 border-[#FFFFFF]  relative ">
        <img
          src={`img/${data.Id}.jpg`}
          className={`${
            hoverEffect ? "hidden" : "w-[225px] h-[250px] object-cover "
          }`}
          alt="pic"
        />
        {!hoverEffect && (
          <div className=" absolute top-0 w-[225px] h-[250px]  flex justify-center items-center">
            <p className="text-[#FFFFFF]  text-[1.5rem] font-bold text-center">
              {data.MonthMm}
            </p>
          </div>
        )}
        <div
          className={`${
            hoverEffect
              ? "w-[225px] h-[250px] bg-[#ffffff] flex justify-center items-center "
              : "hidden"
          }`}
        >
          <p className="text-[1.5rem] font-bold text-center"> {data.MonthMm}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
