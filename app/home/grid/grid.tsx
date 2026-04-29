import React from "react";
import Tabs from "./tabs";

const Grid = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full h-full">
        <div className="pt-15 md:pt-15 grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-auto md:grid-rows-4 lg:grid-rows-5 h-full w-full p-4 md:p-6 lg:p-20">
          <div className="bg-secondary flex flex-col justify-between rounded-2xl md:row-span-2 lg:row-span-2">
            <Tabs />


          </div>
          <div className="bg-card flex flex-col justify-between rounded-2xl border p-6 md:row-span-2 lg:row-span-2">2</div>
          <div className="bg-card flex flex-col justify-between rounded-2xl border p-6 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-3">
            3
          </div>
          <div className="bg-muted flex flex-col justify-between rounded-2xl p-6 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-5 lg:col-start-3 lg:row-start-1">
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
