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
      <div className="w-[140px] md:w-[230px] text-md sm:text-2xl  border-4 border-[#FFFFFF]  relative ">
        {!hoverEffect && (
          <div>
            <img
              src={`img/${data.Id}.jpg`}
              className=" w-[100%] h-[250px] object-cover "
              alt="pic"
            />

            <div className=" absolute top-0  w-[100%] h-[250px]  flex justify-center items-center">
              <p className="text-[#FFFFFF]   font-bold text-center">
                {data.MonthMm}
              </p>
            </div>
          </div>
        )}
        {hoverEffect && (
          <div className="  w-[100%] h-[250px] bg-[#ffffff] flex justify-center items-center ">
            <p className="font-bold text-center">{data.MonthMm}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
