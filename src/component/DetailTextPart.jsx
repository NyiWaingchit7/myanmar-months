import React from "react";

const DetailTextPart = ({ cardDetail }) => {
  return (
    <div>
      <div className="bg-[#ffffff] min-h-[100vh] p-3 additional-scroll ">
        <div className="flex justify-center items-center gap-3 text-2xl mt-3">
          <p>{cardDetail.MonthMm}</p>
          <p>{cardDetail.MonthEn}</p>
        </div>
        <div className="flex justify-center items-center gap-3 text-2xl mt-3 ">
          <div>
            <p>{cardDetail.FestivalMm}</p>
          </div>
          <div>
            <p>{cardDetail.FestivalEn}</p>
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row gap-2 p-3 leading-7  ">
          <div className="lg:w-[500px] flex-shrink-0 ">
            {cardDetail.Description}
          </div>

          <div className="">{cardDetail.Detail}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailTextPart;
