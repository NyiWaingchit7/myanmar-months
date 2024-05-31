import React from "react";
import { useParams } from "react-router-dom";
import { monthData } from "../utils/data";
import DetailTextPart from "./DetailTextPart";
const Detail = () => {
  const id = Number(useParams().id);
  const cardDetail = monthData.find((d) => d.Id === id);
  return (
    <div className="">
      <div className=" min-h-[100vh] flex justify-center items-center text-2xl additional-scroll ">
        <div>
          <p className="text-[#ffffff]">{cardDetail.MonthMm}</p>
        </div>
      </div>
      <DetailTextPart cardDetail={cardDetail} />
    </div>
  );
};

export default Detail;
