import React from "react";
import { useNavigate } from "react-router-dom";

const DetailTextPart = ({ cardDetail }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#ffffff] min-h-[100vh] snap-center  p-3">
      <div className="flex justify-center items-center gap-3 text-md sm:text-2xl   mt-3">
        <p>{cardDetail.MonthMm}</p>
        <p>({cardDetail.MonthEn})</p>
      </div>
      <div className="flex justify-center items-center gap-3 text-md sm:text-2xl  mt-3 ">
        <div>
          <p>{cardDetail.FestivalMm}</p>
        </div>
        <div>
          <p>({cardDetail.FestivalEn})</p>
        </div>
      </div>
      <div
        className="flex justify-center my-2"
        onClick={() => {
          navigate(-1);
        }}
      >
        <button className=" border border-[#030303] px-3 rounded-md hover:bg-[#030303] hover:text-[#ffffff]">
          BACK
        </button>
      </div>
      <div className="max-w-[1200px] mx-auto flex justify-center flex-col lg:flex-row gap-5 p-3  leading-7   ">
        <div>
          <img
            className="w-[400px] h-[150px]"
            src={`../monthImg/${cardDetail.Id}.jpg`}
            alt="img"
          />
          <div className="lg:w-[500px] flex-shrink-0 mt-5 lg:mt-0 ">
            {cardDetail.Description}
          </div>
        </div>

        <div className="">{cardDetail.Detail}</div>
      </div>
    </div>
  );
};

export default DetailTextPart;
