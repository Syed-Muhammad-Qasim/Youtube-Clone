import React from "react";
import Dummyimg from "../assets/Dummyimg.png";

const DummyCard = () => {
  return (
    <div className="bg-gray-100 h-[240px] w-[350px] hover:bg-gray-300 cursor-pointer rounded-xl flex flex-col">
      <img
        src={Dummyimg}
        className="rounded-tl-xl rounded-br-xl rounded-tr-xl rounded-bl-xl px-2 py-2 h-[140px] w-[350px] object-cover"
        alt="thumbnail"
      />
      <h1 className="text-[13px] font-bold pl-4 mt-2">
        Dummy Video Title - How to Fix Image Paths in React
      </h1>
      <h2 className="text-[10px] pl-4 text-gray-600">Dummy Channel</h2>
      <div className="flex gap-2 text-[10px] pl-4 text-gray-500">
        <h2>1M views</h2>
        <h2>2 hours ago</h2>
      </div>
    </div>
  );
};

export default DummyCard;
