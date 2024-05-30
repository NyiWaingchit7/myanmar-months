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
    <div
      ref={elementRef}
      className=" max-w-[1000px] mx-auto overflow-auto scroll-smooth scrollbar-none "
    >
      <div className="h-[100vh] flex items-center gap-5 ">
        {monthData.map((d) => (
          <Card data={d} />
        ))}
      </div>
    </div>
  );
};

export default Home;
