import React from "react";
import { useParams } from "react-router-dom";
import { monthData } from "../utils/data";
import DetailTextPart from "./DetailTextPart";
const Detail = () => {
  const id = Number(useParams().id);
  const cardDetail = monthData.find((d) => d.Id === id);
  return (
    <div className="">
      <div className="relative min-h-[100vh] flex flex-col justify-center items-center text-2xl additional-scroll ">
        <div className="">
          <p className="text-[#ffffff]">{cardDetail.MonthMm}</p>
          <div className=" absolute bottom-5 w-[100px] flex justify-center">
            <img src="../scroll.png" className="w-[50px] " alt="img" />
          </div>
        </div>
      </div>
      <DetailTextPart cardDetail={cardDetail} />
    </div>
  );
};

export default Detail;
