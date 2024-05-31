import React, { useRef, useEffect } from "react";
import { monthData } from "../utils/data";
import Card from "./Card";

const Home = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const onWheel = (event) => {
      if (event.deltaY !== 0) {
        element.scrollLeft += event.deltaY * 10;
        event.preventDefault();
      }
    };

    if (element) {
      element.addEventListener("wheel", onWheel);
    }
  }, []);
  return (
    <div className=" max-w-[1000px] h-[100vh] flex flex-col justify-center mx-2 sm:mx-auto">
      <div className="flex justify-end mb-2">
        <p className="bg-[#ffffff] text-[#030303] p-2">မြန်မာလအသေးစိတ်များ</p>
      </div>
      <div
        ref={elementRef}
        className="  overflow-auto scroll-smooth scrollbar-none "
      >
        <div className=" flex items-center gap-5 ">
          {monthData.map((d) => (
            <Card data={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
